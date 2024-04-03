'use client';
import { Button } from '@material-tailwind/react';
import NavBar from '../components/NavBar';
export default function Home() {
  return (
    <main className='container flex min-h-screen flex-col items-center justify-between p-0'>
      <nav>
        <NavBar />
      </nav>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-2 border-red-200'>
        <h1 className=''>Logo</h1>
      </div>
      <Button>Button</Button>
    </main>
  );
}
