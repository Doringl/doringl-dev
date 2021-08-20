import { Button, FormControl, Input, useStyleConfig } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import { useLoginMutation } from '../../generated/graphql';

interface ILoginData {
  userName: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm<ILoginData>();
  const [Login] = useLoginMutation();
  const styles = useStyleConfig('Button', { variant: 'outline', size: 'lg' });
  const onSubmit = handleSubmit(async (data) => {
    const response = await Login({
      variables: {
        username: String(data.userName),
        email: String(data.email),
        password: String(data.password),
      },
    });
    if (response.data.login.errors) {
      console.log(response.data.login.errors);
    } else if (response.data.login.user) {
      if (response.data.login.user.userType === 'admin') {
        router.push('/dashboard');
      }
    }
  });
  return (
    <Layout title='Login'>
      <Head>
        <title>Login</title>
      </Head>
      <form onSubmit={onSubmit}>
        <FormControl id='userName' isRequired>
          <Input
            placeholder='User name'
            name='userName'
            size='lg'
            mb='1em'
            ref={register({ required: true })}
          />
        </FormControl>
        {errors.userName?.type === 'required' && (
          <ErrorMessage text='Email field is required !' />
        )}
        <FormControl id='email'>
          <Input
            placeholder='Email'
            name='email'
            size='lg'
            mb='1em'
            ref={register({ required: true, pattern: /\w+@\w+\.[a-zA-Z]{2,}/ })}
          />
        </FormControl>
        {(errors.email?.type === 'required' && (
          <ErrorMessage text='Email field is required !' />
        )) ||
          (errors.email?.type === 'pattern' && (
            <ErrorMessage text='Wrong email pattern !' />
          ))}
        <FormControl id='password'>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            size='lg'
            mb='1em'
            ref={register({
              required: true,
              minLength: 8,
            })}
          />
        </FormControl>
        {(errors.password?.type === 'required' && (
          <ErrorMessage text='Password field is required !' />
        )) ||
          (errors.password?.type === 'minLength' && (
            <ErrorMessage text='Password must be min 8 characters !' />
          ))}
        <Button
          type='submit'
          transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
          className='animationOne'
          sx={styles}
        >
          Log in
        </Button>
      </form>
    </Layout>
  );
};

export default Login;
