'use client';
import { React, useState } from 'react';
import Link from 'next/link';
import {
  PlusIcon,
  CheckCircleIcon,
  SparklesIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';

import {
  Button,
  Typography,
  Alert,
  Input,
  Textarea,
  Collapse,
  Card,
  CardBody,
} from '@material-tailwind/react';

import { Google_Fab as Google } from 'iconview/svgs/Google_Fab';
import { Instagram_Fab as Instagram } from 'iconview/svgs/Instagram_Fab';
import { Github_Fab as Github } from 'iconview/svgs/Github_Fab';
import { Twitter_Fab as Twitter } from 'iconview/svgs/Twitter_Fab';

import CredentialSingleAccount from '../../components/CredentialSingleAccount';

export default function Credentials() {
  const [copyNotification, setCopyNotification] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
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
      <div className='w-full border-b border-[#1e272e] flex flex-col pt-[100px] pb-10 bg-gray-900 bg-gradient-to-br from-black to-gray'>
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
                  onClick={toggleOpen}
                  size='md'
                  color='white'
                  variant='filled'
                  className='rounded-lg flex gap-2 align-middle items-center transition-all normal-case'>
                  <PlusIcon className='h-4 w-4' />
                  <Typography variant='h6' className='tracking-wide text-sm'>
                    Add New...
                  </Typography>
                </Button>
              </Link>
            </div>
          </div>

          <Collapse open={open} className='w-full'>
            <Card className='my-4 w-full flex py-4 flex-col gap-4 bg-gray-100 transition-all'>
              <CardBody>
                <form>
                  <div className='flex flex-row gap-6 w-full  justify-center lg:px-60 flex-wrap'>
                    <div className='mb-1  flex flex-col gap-6 flex-auto'>
                      <Input
                        label='Account title'
                        size='lg'
                        placeholder='name@mail.com'
                        className='flex-grow border border-blue-500 text-gray-800'
                        crossOrigin={undefined}
                      />
                      <Input
                        label='Email'
                        size='lg'
                        placeholder='name@mail.com'
                        className='flex-grow border border-blue-500 text-gray-800'
                        crossOrigin={undefined}
                      />

                      <Textarea
                        variant='outlined'
                        label='Description'
                        // placeholder='Write further notes here...'
                        className='border-2 border-gray-500'
                      />
                    </div>
                    <div className='mb-1 flex flex-col gap-6 flex-grow'>
                      <Input
                        label='Password'
                        type='password'
                        size='lg'
                        placeholder='********'
                        className='flex-grow border border-blue-500 text-gray-800'
                        crossOrigin={undefined}
                      />
                      {/* <Typography
                        variant='h6'
                        placeholder='Enter text'
                        className='-mb-5 tracking-wide text-gray-800 tracking-wide'>
                        Generated Password
                      </Typography> */}
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log('Password has been generated.');
                        }}
                        variant='filled'
                        color='white'
                        className='group small w-full flex gap-2 flex-row justify-between border-[1.5px] border-gray-700/20 hover:border-gray-700/30  items-center  text-gray-500 hover:text-gray-700 transition-all shadow-none hover:shadow-none'
                        placeholder=''>
                        <Typography
                          variant='h6'
                          placeholder='Enter text'
                          className='text-sm normal-case tracking-wide'>
                          xd@!.sPass*ff12deFB
                        </Typography>
                        <Square2StackIcon className='h-5 w-5 text-gray-600 group-hover:text-cyan-300 transition-all' />
                      </Button>

                      <div className='flex flex-col gap-3'>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log('Password has been generated.');
                          }}
                          variant='filled'
                          color='gray'
                          className='group mb-0 small w-full flex gap-2 bg-gray-900 border-[1.5px] border-gray-700/20 hover:border-gray-700/30  items-center justify-center text-gray-400 hover:text-gray-200 transition-all'
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
                          className='my-0 w-full border-[1.5px] border-gray-700/20 hover:border-gray-700/30  items-center justify-center text-gray-700 hover:text-gray-900 transition-all'
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
                  </div>
                </form>
              </CardBody>
            </Card>
          </Collapse>
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
