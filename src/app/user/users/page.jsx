'use client';
import React from 'react';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from '@material-tailwind/react';

export default function Users() {
  return (
    <div className='flex p-0 text-white h-screen flex-col'>
      <div className='w-full border-b border-[#1e272e] flex flex-col pt-[100px] pb-10 bg-gray-900 bg-gradient-to-b from-black to-gray]'>
        <div className='container mx-auto'>
          <Typography variant='h3' className='font-bold'>
            Users
          </Typography>
          <Typography variant='h6' color='gray' className='mb-5'>
            Manage User credentials
          </Typography>
          <div className='flex flex-wrap gap-2'>
            <div className='flex-auto w-34 justify-end flex align-middle place-items-center'>
              {' '}
              <Link href='#'>
                <Button
                  size='sm'
                  color='white'
                  variant='filled'
                  className='rounded-lg flex gap-2 align-middle items-center transition-all normal-case'>
                  <PlusIcon className='h-4 w-4' />
                  Add New...
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
