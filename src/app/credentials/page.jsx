'use client';
import React from 'react';
import Link from 'next/link';
import {
  PlusIcon,
  CheckCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import { Button, Typography, Alert } from '@material-tailwind/react';
import { Google_Fab as Google } from 'iconview/svgs/Google_Fab';
import { Instagram_Fab as Instagram } from 'iconview/svgs/Instagram_Fab';
import { Github_Fab as Github } from 'iconview/svgs/Github_Fab';
import { Twitter_Fab as Twitter } from 'iconview/svgs/Twitter_Fab';

import { Input } from '@material-tailwind/react';

import CredentialSingleAccount from '../../components/CredentialSingleAccount';

export default function Credentials() {
  const [copyNotification, setCopyNotification] = React.useState(true);
  const CopyPasswordBtn = () => {
    setCopyNotification(
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/5'>
        <Alert
          className='bg-cyan-700/10 border-none  flex items-center justify-center gap-2'
          icon={<CheckCircleIcon className='h-6 w-6 text-cyan-600' />}>
          <Typography
            variant='h6'
            className='text-small text-cyan-500 tracking-wide '>
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
            Credentials
          </Typography>
          <Typography variant='h6' color='gray' className='mb-5'>
            Manage your credentials
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
          <div className=' text-white py-6 flex flex-row gap-2' color='white'>
            <div className=' flex-1 grow gap-2 flex flex-col'>
              <Typography variant='h6' className='font-bold'>
                Account
              </Typography>
              <Input
                label='Title'
                color='black'
                type='text'
                placeholder='Account name'
                className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
              />
              <Typography variant='h6' className='font-bold'>
                Email
              </Typography>
              <Input
                label='Email'
                color='black'
                type='email'
                placeholder='Email Address'
                className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
              />
              <Typography variant='h6' className='font-bold mb-0 pb-0'>
                Description
              </Typography>
              <Input
                label='Decription'
                color='black'
                type='textarea'
                placeholder='Description'
                className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-gray-600/10 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
              />
            </div>
            <div className='flex flex-col flex-1'>
              <Typography variant='h6' className='font-bold mb-0 pb-0'>
                Password
              </Typography>
              <Input
                label='Decription'
                color='black'
                type='text'
                placeholder='Password'
                className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-gray-600/10 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
              />
              <Typography variant='h6' className='font-bold mb-0 pb-0 mt-4'>
                Generated Password
              </Typography>

              <Button
                onClick={() => {
                  console.log('Logged in.');
                }}
                variant='gradient'
                color='white'
                className='mt-6 small w-full text-gray-900 flex gap-2 justify-center align-middle items-center transition-all normal-case'
                placeholder=''>
                <SparklesIcon className='h-5 w-5 text-cyan-600' />
                <Typography
                  variant='h6'
                  placeholder='Enter text'
                  className='text-sm normal-case tracking-wide'>
                  Generate
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-5 flex flex-wrap gap-2'>
        {credentials.map((credential) => (
          <CredentialSingleAccount key={credential.id} {...credential} />
        ))}
      </div>
    </div>
  );
}
