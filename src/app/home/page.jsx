'use client';
import React from 'react';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.section
      style={{
        backgroundImage:
          'radial-gradient(125% 125% at 50% 0%, #020617 50%, #2bcbba)',
      }}
      className='w-full h-screen pt-20 text-white '>
      <div className='container mx-auto'>
        <h1 className='text-2xl text-center'>Home Page</h1>
      </div>
    </motion.section>
  );
}
