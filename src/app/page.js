'use client';
import { React } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

export default function Home() {
  return (
    <header className='landing-section bg-[url(/gradient-2-bg.svg)] h-screen bg-cover'>
      <div className='grid min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-center bg-center bg-contain bg-no-repeat'>
        <div className='container mx-auto px-4 text-center'>
          <Typography className='inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary'>
            Exciting News! Introducing our latest innovation
          </Typography>
          <Typography
            variant='h1'
            className='mx-auto my-10 pb-8 w-full leading-snug !text-2xl lg:max-w-2xl lg:!text-5xl text-gray-200'>
            Enhance your{' '}
            <span className='inline-block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-t from-blue-800 to-blue-400 bg-clip-text'>
              digital safety
            </span>{' '}
            with ease. Simplify passwords, {''}
            <span className='inline-block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-t from-cyan-800 to-cyan-400 bg-clip-text'>
              amplify protection
            </span>
            {''}.
          </Typography>
          <Typography
            variant='h4'
            className='mx-auto w-full !text-gray-500 lg:text-lg text-base'>
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </Typography>
          <div className='mt-8 grid  place-items-center md:justify-center'>
            <div className='flex w-full flex-col gap-2 md:flex-row'>
              <Button
                size='sm'
                variant='gradient'
                className='rounded-full flex gap-2 align-middle place-items-center transition-transform hover:bg-black normal-case text-gray-400 hover:text-white'>
                <Typography variant='h6' className='font-bold'>
                  Get Started
                </Typography>
                <ChevronRightIcon className='h-4 w-4' />
              </Button>
              <Button
                size='sm'
                variant='outlined'
                className='rounded-full flex align-middle place-items-center transition-transform hover:bg-black normal-case text-gray-400 hover:text-white'>
                <Link href='/login'>
                  <Typography variant='h6' className='font-bold'>
                    Learn more
                  </Typography>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
