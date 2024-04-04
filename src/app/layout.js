'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import Image from 'next/image';
import appLogoWhite from '../../public/logo-white.png';
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { Bars_Fas as HamBurger } from 'iconview/svgs/Bars_Fas';
import { Xmark_Fas as XMark } from 'iconview/svgs/Xmark_Fas';

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as='a'
        href='#'
        variant='paragraph'
        color='blue-gray'
        className='text-blue-gray-700 flex items-center gap-2 font-medium'>
        {children}
      </Typography>
    </li>
  );
}

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar
          shadow={false}
          fullWidth
          className='border-0 bg-gradient-to-r from-black to-black border-b border-gray-900 px-0 fixed inset-x-0 top-0 z-50 backdrop-blur-lg'>
          <div className='container mx-auto flex items-center justify-between'>
            <Image
              src={appLogoWhite}
              alt='ProPass logo'
              width={100}
              height={10}
            />
            <ul className='ml-10 hidden items-center gap-2 lg:flex'>
              <NavItem className='hover:bg-gray-700'>
                <Link href='/landing_page'>
                  <Typography
                    variant='h6'
                    className='text-gray-400 hover:text-gray-200 hover:bg-gray-900 px-4 py-1 rounded-lg'>
                    Home home
                  </Typography>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/users'>
                  <Typography
                    variant='h6'
                    className='text-gray-400 hover:text-gray-200 hover:bg-gray-900 px-4 py-1 rounded-lg'>
                    Users
                  </Typography>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/groups'>
                  <Typography
                    variant='h6'
                    className='text-gray-400 hover:text-gray-200 hover:bg-gray-900 px-4 py-1 rounded-lg'>
                    Groups
                  </Typography>
                </Link>
              </NavItem>
            </ul>
            <div className='hidden items-center gap-4 lg:flex'>
              <Link href='/login'>
                <Button
                  variant='text'
                  className='text-gray-300 hover:text-white'>
                  Log in
                </Button>
              </Link>
              <Link href='/signup'>
                <Button color='gray'>Sign up</Button>
              </Link>
            </div>
            <IconButton
              variant='text'
              color='white'
              onClick={handleOpen}
              className='ml-auto inline-block lg:hidden'>
              {open ? <HamBurger /> : <XMark />}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className='container mx-auto mt-3 border-t border-gray-900 px-7 pt-4'>
              <ul className='flex flex-col gap-4'>
                <NavItem>
                  <Link href='#'>
                    <Typography
                      variant='h6'
                      className='text-gray-400 hover:text-gray-200 rounded-lg'>
                      Home
                    </Typography>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/users'>
                    <Typography
                      variant='h6'
                      className='text-gray-400 hover:text-gray-200 rounded-lg'>
                      Users
                    </Typography>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/groups'>
                    <Typography
                      variant='h6'
                      className='text-gray-400 hover:text-gray-200 rounded-lg'>
                      Group
                    </Typography>
                  </Link>
                </NavItem>
              </ul>
              <div className='mt-6 mb-4 flex items-center gap-4 flex flex-col'>
                <Button className='w-full'>Log in</Button>
                <Button color='gray' className='w-full'>
                  Sign up
                </Button>
              </div>
            </div>
          </Collapse>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
