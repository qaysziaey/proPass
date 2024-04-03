'use client';
import { useState, useEffect } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

import { Bars_Fas as HamBurger } from 'iconview/svgs/Bars_Fas';
import { Xmark_Fas as XMark } from 'iconview/svgs/Xmark_Fas';

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography as='li' variant='small' color='blue-gray' className='p-1'>
        <Link
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link
          href='/users'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Users
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Groups
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [logedIn, setLogedIn] = useState(true);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='mx-auto top-0 z-index-20 max-w-screen-xl px-6 py-3  rounded-none  shadow-none'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h5'
          className='mr-4 cursor-pointer py-1.5'>
          ProPass
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <div className='flex gap-2'>
          {logedIn ? (
            <Button
              size='sm'
              className='rounded-full text-sm font-medium normal-case px-6'>
              Log out
            </Button>
          ) : (
            <Button
              size='sm'
              className='rounded-full text-sm font-medium normal-case px-6'>
              Log in
            </Button>
          )}
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMark className='h-6 w-6' />
          ) : (
            <HamBurger className='h-6 w-6' />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
