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
          <Typography className='inline-flex text-xs rounded-lg border-[1.5px] border-deep-purple-600 bg-gray-900 py-1 lg:px-4 px-2 font-medium text-gray-200'>
            Exciting News! Introducing our latest innovation
          </Typography>
          <Typography
            variant='h1'
            className='mx-auto my-10 pb-4 w-full !text-2xl lg:max-w-4xl lg:!text-6xl text-gray-200 leading-loose'>
            Enhance your digital safety with ease. Simplify passwords, amplify
            protection.
          </Typography>
          <Typography
            variant='h6'
            className='mx-auto w-full !text-gray-500 lg:text-sm drop-shadow-lg'>
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
