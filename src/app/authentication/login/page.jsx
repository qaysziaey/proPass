'use client';
import React from 'react';
import Link from 'next/link';
import { Card, Input, Button, Typography } from '@material-tailwind/react';

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen login-container '>
      <Card
        className='p-6 backdrop-blur-sm bg-gray-900 text-gray-200'
        placeholder=''>
        <Typography variant='h4' placeholder='Enter text'>
          Sign Up
        </Typography>
        <Typography
          variant='h6'
          placeholder='Enter text'
          className='mt-1 text-gray-600 tracking-wide'>
          Nice to meet you! Enter your details to log in.
        </Typography>
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography
              variant='h6'
              placeholder='Enter text'
              className='-mb-3 tracking-wide'>
              Your Name
            </Typography>
            <Input
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined}
            />

            <Typography
              variant='h6'
              placeholder='Enter text'
              className='-mb-3 tracking-wide'>
              Password
            </Typography>
            <Input
              type='password'
              size='lg'
              placeholder='********'
              className='!border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined}
            />
          </div>
          <Button
            onClick={() => {
              console.log('Logged in.');
            }}
            variant='gradient'
            color='white'
            className='mt-6 small w-full text-gray-900 '
            placeholder=''>
            <Typography
              variant='h6'
              placeholder='Enter text'
              className='text-sm normal-case tracking-wide'>
              Log in
            </Typography>
          </Button>
          <Typography
            variant='h6'
            placeholder='Enter text'
            className='mt-4 text-center  text-gray-600'>
            Don't have an account?{' '}
            <Link href='/authentication/signup' className='font-medium'>
              <Typography
                variant='h6'
                placeholder='Enter text'
                className='text-gray-500 hover:text-cyan-300 hover:underline'>
                Sign up
              </Typography>
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
