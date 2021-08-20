import { MikroORM } from '@mikro-orm/core';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import redis from 'redis';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { __prod__ } from './constants';
import mikroConfig from './mikro-orm.config';
import { ProjectResolver } from './resolvers/ProjectResolver';
import { SkillResolver } from './resolvers/SkillResolver';
import { UserResolver } from './resolvers/UserResolver';
import { myContext } from './types/types';

(async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        sameSite: 'lax',
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: 'gjhkfukfhmfhkkfhdtyuetvdfagkgo689oyj4tha',
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SkillResolver, ProjectResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): myContext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000);
})().catch((err) => console.log(err));
