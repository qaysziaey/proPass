'use client';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';

export default function Credentials() {
  return (
    <div className=''>
      <div className='container flex pt-24 text-white h-screen'>
        <div className='w-full border-2 border-red-500 flex flex-col'>
          <h1>User Credentials</h1>
          <div className='flex flex-wrap gap-2'>
            <div className='border flex-auto w-64'>col 1</div>
            <div className='border flex-auto w-64'>
              {' '}
              <Button
                size='sm'
                variant='gradient'
                className='rounded-full flex gap-2 align-middle place-items-center transition-transform hover:bg-black normal-case text-gray-400 hover:text-white'>
                <Typography variant='h6' className='font-bold'>
                  Get Started
                </Typography>
                <ChevronRightIcon className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
