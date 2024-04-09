'use client';
import { useState, useEffect, React } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import appLogoWhite from '../../public/pp-logo.png';
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';

import {
  QrCodeIcon,
  UserIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

import { Bars_Fas as HamBurger } from 'iconview/svgs/Bars_Fas';

import { Xmark_Fas as XMark } from 'iconview/svgs/Xmark_Fas';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // On resize, if the screen is wider than 960px, close the navbar if it's open.
  // This is to prevent the navbar from staying open when the user resizes the
  // window from a small mobile size to a larger size.
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [open]);

  const navItems = [
    {
      id: 1,
      name: 'Home',
      href: '/',
      icon: <HomeIcon className='h-5 w-5 text-gray-600' />,
    },
    {
      id: 2,
      name: 'Credentials',
      href: '/credentials',
      icon: <QrCodeIcon className='h-5 w-5 text-gray-600' />,
    },
    {
      id: 3,
      name: 'Users',
      href: '/user/users',
      icon: <UserIcon className='h-5 w-5 text-gray-600' />,
    },
    {
      id: 4,
      name: 'Groups',
      href: '/groups',
      icon: <UserGroupIcon className='h-5 w-5 text-gray-600' />,
    },
  ];

  return (
    <Navbar
      shadow={false}
      fullWidth
      className='border-0 bg-black border-b border-gray-900 px-0 fixed top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image src={appLogoWhite} alt='ProPass logo' width={28} height={10} />
        </Link>
        <ul className='hidden items-center gap-6 lg:flex'>
          {navItems.map((item) => (
            <li className='flex flex-row items-center gap-2' key={item.id}>
              <Link
                href={item.href}
                className='flex flex-row items-center gap-2'>
                {item.icon}
                <Typography
                  href={item.href}
                  variant='h6'
                  className='text-gray-400 hover:text-white transition-all'>
                  {item.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden items-center gap-4 lg:flex'>
          <div className='flex w-full flex-col gap-2 md:flex-row'>
            <Link href='/sign-in'>
              <Button
                size='sm'
                color='white'
                variant='filled'
                className='rounded-md flex align-middle place-items-center transition-all normal-case text-gray-600 hover:text-gray-900 tracking-wide'>
                <Typography variant='h6' className='text-sm'>
                  Sign in
                </Typography>
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button
                size='sm'
                color='white'
                variant='text'
                className='rounded-md  flex align-middle place-items-center transition-all hover:bg-black normal-case text-gray-400 hover:text-white tracking-wide'>
                <Typography variant='h6' className='text-sm'>
                  Sign up
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
        <IconButton
          variant='filled'
          color='white'
          onClick={handleOpen}
          className='ml-auto inline-block lg:hidden bg-gray-900 text-white rounded-full'>
          {open ? <XMark /> : <HamBurger />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className='container mx-auto mt-3 border-t border-gray-900 px-0 py-0'>
          <ul className='flex flex-col gap-0'>
            {navItems.map((item) => (
              <li
                className='flex flex-row items-center gap-2 py-5 pl-8 transition-all hover:bg-gray-900/40 '
                key={item.id}>
                <Link
                  href={item.href}
                  className='flex flex-row items-center gap-2'>
                  {item.icon}
                  <Typography
                    href={item.href}
                    variant='h6'
                    className='text-gray-400 hover:text-white transition-all'>
                    {item.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
          <div className='mt-6 mb-4 flex items-between gap-4 flex flex-row justify-center'>
            <Link href='/sign-up'>
              <Button
                size='sm'
                color='white'
                variant='filled'
                className='rounded-md w-full flex align-middle place-items-center transition-all normal-case text-gray-600 hover:gray-900 tracking-wide'>
                <Typography variant='h6'>Sign up</Typography>
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button
                size='sm'
                color='gray'
                variant='filled'
                className='rounded-md w-full flex align-middle place-items-center transition-all hover:bg-black normal-case text-gray-400 hover:text-white tracking-wide'>
                <Typography variant='h6'>Sign up</Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
