'use client';
import React from 'react';
import Link from 'next/link';
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button, Typography, Alert } from '@material-tailwind/react';
import { Google_Fab as Google } from 'iconview/svgs/Google_Fab';
import { Instagram_Fab as Instagram } from 'iconview/svgs/Instagram_Fab';
import { Github_Fab as Github } from 'iconview/svgs/Github_Fab';
import { Twitter_Fab as Twitter } from 'iconview/svgs/Twitter_Fab';

export default function Groups() {
  const [copyNotification, setCopyNotification] = React.useState(true);
  const CopyPasswordBtn = () => {
    setCopyNotification(
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Alert
          className='bg-[#1e272e] border-none flex items-center justify-center gap-2'
          icon={<CheckCircleIcon className='h-6 w-6 text-green-500' />}>
          <Typography variant='h6' className='text-white'>
            Credentials successfully copied.
          </Typography>
        </Alert>
      </div>
    );
    setTimeout(() => {
      setCopyNotification(false);
    }, 2000);
  };

  const credentials = [
    {
      id: 1,
      accountTitle: 'Google',
      accountDescription: 'micl@gmail.com',
      accountIcon: (
        <Google className='h-8 w-8 p-0 rounded-xl  hover:text-cyan-300 transition-all' />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 2,
      accountTitle: 'Instagram',
      accountDescription: 'm_michael',
      accountIcon: (
        <Instagram className='h-8 w-8 p-0 rounded-xl hover:text-cyan-300 transition-all' />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 3,
      accountTitle: 'GitHub',
      accountDescription: 'michael.dev',
      accountIcon: (
        <Github className='h-8 w-8 p-0 rounded-xl  hover:text-cyan-300 transition-all' />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 4,
      accountTitle: 'Twitter',
      accountDescription: 'm_michael',
      accountIcon: (
        <Twitter className='h-8 w-8 p-0 rounded-xl hover:text-cyan-300 transition-all' />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
  ];
  return (
    <div className='flex p-0 text-white h-screen flex-col'>
      <div className='w-full border-b border-[#1e272e] flex flex-col pt-[100px] pb-10 bg-gray-900 bg-gradient-to-b from-black to-gray]'>
        <div className='relative flex justify-center items-center'>
          {copyNotification}
        </div>
        <div className='container mx-auto'>
          <Typography variant='h3' className='font-bold'>
            Groups
          </Typography>
          <Typography variant='h6' color='gray' className='mb-5'>
            Manage Group credentials
          </Typography>
          <div className='flex flex-wrap gap-2'>
            <div className='flex-auto w-34 justify-end flex align-middle place-items-center'>
              {' '}
              <Link href='#'>
                <Button
                  size='sm'
                  color='white'
                  variant='filled'
                  className='rounded-lg  flex gap-2 align-middle items-center transition-all normal-case'>
                  <PlusIcon className='h-5 w-5' />
                  <Typography variant='paragraph' className='font-bold'>
                    Add New...
                  </Typography>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
