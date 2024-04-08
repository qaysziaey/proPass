'use client';
import React from 'react';
import Link from 'next/link';
import {
  PlusIcon,
  CheckCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import {
  Button,
  Typography,
  Alert,
  Input,
  Textarea,
} from '@material-tailwind/react';

import { Google_Fab as Google } from 'iconview/svgs/Google_Fab';
import { Instagram_Fab as Instagram } from 'iconview/svgs/Instagram_Fab';
import { Github_Fab as Github } from 'iconview/svgs/Github_Fab';
import { Twitter_Fab as Twitter } from 'iconview/svgs/Twitter_Fab';

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
          <form>
            <div className='flex flex-row gap-6 w-full  justify-center lg:px-60 flex-wrap'>
              <div className='mb-1  flex flex-col gap-6 flex-auto'>
                <Typography
                  variant='h6'
                  placeholder='Enter text'
                  className='-mb-5 tracking-wide text-gray-500 tracking-wide'>
                  Account name
                </Typography>
                <Input
                  size='lg'
                  placeholder='name@mail.com'
                  className='flex-grow !border-t-blue-gray-200 focus:!border-gray-900 border-[1.5px] border-gray-900'
                  crossOrigin={undefined}
                />
                <Typography
                  variant='h6'
                  placeholder='Enter text'
                  className='-mb-5 tracking-wide text-gray-500 tracking-wide'>
                  Email
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
                  className='-mb-5 tracking-wide text-gray-500 tracking-wide'>
                  Description
                </Typography>
                <Textarea
                  variant='outlined'
                  placeholder='Static'
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 h-32'
                />
              </div>
              <div className='mb-1 flex flex-col gap-6 flex-grow'>
                <Typography
                  variant='h6'
                  placeholder='Enter text'
                  className='-mb-5 tracking-wide text-gray-500 tracking-wide'>
                  Password
                </Typography>
                <Input
                  type='password'
                  size='lg'
                  placeholder='********'
                  className='flex-grow !border-t-blue-gray-200 focus:!border-t-gray-900'
                  crossOrigin={undefined}
                />
                <Typography
                  variant='h6'
                  placeholder='Enter text'
                  className='-mb-5 tracking-wide text-gray-500 tracking-wide'>
                  Generated Password
                </Typography>
                <Input
                  label='xd@!.sPass*ff12deFBsx!.sPass*ff12deFBs'
                  type='text'
                  size='lg'
                  color='gray'
                  placeholder='xd@!.sPass*ff12deFBsx!.sPass*ff12deFBs'
                  className='flex-grow !border-t-blue-gray-200 focus:!border-t-gray-900 bg-gray-900 truncate'
                  crossOrigin={undefined}
                  disabled
                />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Password has been generated.');
                  }}
                  variant='filled'
                  color='gray'
                  className='group mt-9 small w-full flex gap-2 bg-gray-900 border-[1.5px] border-gray-700/20 hover:border-gray-700/30  items-center justify-center text-gray-500 hover:text-gray-300 transition-all'
                  placeholder=''>
                  <SparklesIcon className='h-5 w-5 text-gray-600 group-hover:text-cyan-300 transition-all' />
                  <Typography
                    variant='h6'
                    placeholder='Enter text'
                    className='text-sm normal-case tracking-wide'>
                    Generate
                  </Typography>
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Password has been generated.');
                  }}
                  variant='filled'
                  color='white'
                  className=' w-full border-[1.5px] border-gray-700/20 hover:border-gray-700/30  items-center justify-center text-gray-700 hover:text-gray-900 transition-all'
                  placeholder=''>
                  <Typography
                    variant='h6'
                    placeholder='Enter text'
                    className='text-sm normal-case tracking-wide'>
                    Save
                  </Typography>
                </Button>
              </div>
            </div>
          </form>
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
