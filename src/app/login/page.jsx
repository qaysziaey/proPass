'use client';
import React from 'react';
import Link from 'next/link';
import { Card, Input, Button, Typography } from '@material-tailwind/react';

export default function Login() {
  const pointerEnter = () => {
    console.log('Pointer entered.');
  };

  const pointerLeave = () => {
    console.log('Pointer left.');
  };

  return (
    <div className='flex justify-center items-center h-screen login-container '>
      <Card
        className='p-6 backdrop-blur-sm bg-gray-900 text-gray-200'
        placeholder=''
        onPointerEnterCapture=''
        onPointerLeaveCapture=''>
        <Typography
          variant='h4'
          placeholder='Enter text'
          onPointerEnterCapture=''
          onPointerLeaveCapture=''>
          Sign Up
        </Typography>
        <Typography
          variant='h6'
          placeholder='Enter text'
          onPointerEnterCapture=''
          onPointerLeaveCapture=''
          className='mt-1 font-normal text-gray-500'>
          Nice to meet you! Enter your details to log in.
        </Typography>
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography
              variant='h6'
              placeholder='Enter text'
              onPointerEnterCapture=''
              onPointerLeaveCapture=''
              className='-mb-3'>
              Your Name
            </Typography>
            <Input
              onPointerEnterCapture={pointerEnter}
              onPointerLeaveCapture={pointerLeave}
              size='lg'
              placeholder='name@mail.com'
              className='border-red focus:border-gray-900'
              crossOrigin={undefined}
            />

            <Typography
              variant='h6'
              placeholder='Enter text'
              onPointerEnterCapture=''
              onPointerLeaveCapture=''
              className='-mb-3'>
              Password
            </Typography>
            <Input
              onPointerEnterCapture={pointerEnter}
              onPointerLeaveCapture={pointerLeave}
              type='password'
              size='lg'
              placeholder='********'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined}
            />
          </div>
          <Button
            variant='gradient'
            className='mt-6 small w-full'
            onPointerEnterCapture={pointerEnter}
            onPointerLeaveCapture={pointerLeave}
            placeholder=''>
            Log in
          </Button>
          <Typography
            variant='h6'
            placeholder='Enter text'
            onPointerEnterCapture=''
            onPointerLeaveCapture=''
            className='mt-4 text-center font-normal'>
            Don't have an account?{' '}
            <Link href='/signup' className='font-medium'>
              Sign up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
