import argon2 from 'argon2';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { COOKIE_NAME } from '../constants';
import { User } from '../entities/User';
import { myContext } from '../types/types';

@InputType()
class UserTypeCheck {
  @Field()
  id: number;

  @Field()
  userName: string;

  @Field()
  userType: boolean;
}

@InputType()
class UserInputs {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async savedUser(@Ctx() { em, req }: myContext): Promise<User | null> {
    if (!req.session!.userID) {
      return null;
    }
    const user = await em.findOne(User, { id: req.session!.userID });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('input') inputs: UserInputs,
    @Ctx() { em }: myContext
  ): Promise<UserResponse> {
    if (inputs.userName.length <= 2) {
      return {
        errors: [
          { field: 'username', message: 'User name must be greater than 2 !' },
        ],
      };
    }
    if (!inputs.email.match(/\w+@\w+\.[a-zA-Z]{2,}/)) {
      return {
        errors: [{ field: 'email', message: 'Email pattern are wrong !' }],
      };
    }
    if (inputs.password.length < 8) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Password length must be 8 characters !',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(inputs.password);
    const user = em.create(User, {
      userName: inputs.userName,
      email: inputs.email,
      password: hashedPassword,
    });

    try {
      await em.persistAndFlush(user);
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [{ field: 'username', message: 'User name already taken !' }],
        };
      }
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('input') inputs: UserInputs,
    @Ctx() { em, req }: myContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, {
      userName: inputs.userName,
      email: inputs.email,
    });

    if (!user) {
      return {
        errors: [{ field: 'username', message: 'User not found !' }],
      };
    }

    const passwordCheck = await argon2.verify(user.password, inputs.password);

    if (!passwordCheck) {
      return {
        errors: [{ field: 'password', message: `Password doesn't match !` }],
      };
    }

    req.session!.userID = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: myContext) {
    return new Promise((resolve) => {
      req.session?.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      });
    });
  }

  @Mutation(() => UserResponse)
  async updateUserType(
    @Arg('inputs') inputs: UserTypeCheck,
    @Ctx() { em }: myContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, {
      userName: inputs.userName,
      id: inputs.id,
    });

    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: 'User not found, wrong username or id !',
          },
        ],
      };
    }

    if (inputs.userType) {
      user.userType = 'admin';
      await em.persistAndFlush(user);
    } else {
      user.userType = 'user';
      await em.persistAndFlush(user);
    }

    return { user };
  }
}
