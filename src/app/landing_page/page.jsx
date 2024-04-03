'use client';
import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import appLogoWhite from '../../../public/logo-white.png';
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

function HeroSection16() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className='border-0 bg-gradient-to-r from-black to-black border-b border-gray-900 px-0'>
        <div className='container mx-auto flex items-center justify-between'>
          <Image
            src={appLogoWhite}
            alt='ProPass logo'
            width={100}
            height={10}
          />
          <ul className='ml-10 hidden items-center gap-2 lg:flex'>
            <NavItem className='hover:bg-gray-700'>
              <Link href='#'>
                <Typography
                  variant='h6'
                  className='text-gray-400 hover:text-gray-200 hover:bg-gray-900 px-4 py-1 rounded-lg'>
                  Home
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
              <Button variant='text' className='text-gray-300 hover:text-white'>
                Log in
              </Button>
            </Link>
            <Button color='gray'>Sign up</Button>
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

      <header className='bg-black p-8 landing-section'>
        <div className='grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat'>
          <div className='container mx-auto px-4 text-center'>
            <Typography className='inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary'>
              Exciting News! Introducing our latest innovation
            </Typography>
            <Typography
              variant='h1'
              className='mx-auto my-10 pb-8 w-full leading-snug !text-2xl lg:max-w-2xl lg:!text-5xl text-gray-200'>
              Enhance your{' '}
              <span className='inline-block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-t from-blue-800 to-blue-400 bg-clip-text'>
                digital safety
              </span>{' '}
              with ease. Simplify passwords, {''}
              <span className='inline-block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-t from-cyan-800 to-cyan-400 bg-clip-text'>
                amplify protection
              </span>
              {''}.
            </Typography>
            <Typography
              variant='h4'
              className='mx-auto w-full !text-gray-500 lg:text-lg text-base'>
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </Typography>
            <div className='mt-8 grid  place-items-center md:justify-center'>
              <div className='flex w-full flex-col gap-4 md:flex-row'>
                <Button className='px-4'>
                  <div className=' bg-gray'></div>
                  get started
                </Button>
                <Button className='px-4'>
                  <div className='bg-gray'></div>
                  Learn more
                </Button>
              </div>
            </div>
            {/* <div className='w-full border-2'>
              <Image src={appImg} alt='robot' width={700} height={300} />
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;
