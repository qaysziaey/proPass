'use client';
import React from 'react';
import PropTypes from 'prop-types';
import './globals.css';
import NavBar from '../components/NavBar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>
          <NavBar />
        </main>
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is a required node
};
