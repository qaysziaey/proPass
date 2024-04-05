'use client';

import { Button, Typography } from '@material-tailwind/react';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function CredentialSingleAccount({
  accountTitle,
  accountDescription,
  copyPasswordBtn,
  accountIcon,
}) {
  return (
    <div className='flex grow border-[1.5px] border-[#2f3640]/50 hover:bg-gray-800/40 w-70 h-10 py-9 pl-3 pr-4 rounded-[12px] bg-gray-900 text-gray-400 transition-all flex gap-3 flex-row items-center  justify-between align-middle'>
      <div className='bg-gray-800/30 p-2 rounded-xl flex text-cyan-100'>
        {accountIcon}
      </div>
      <div className='flex flex-col items-start w-full gap-1 pl-1 justify-center'>
        <Typography variant='h6' className='text-white leading-none'>
          {accountTitle}
        </Typography>
        <Typography
          variant='paragraph'
          className='text-gray-400 leading-1 truncate'>
          {accountDescription}
        </Typography>
      </div>
      <div className='flex flex-col items-end w-6 gap-0'>
        <Button
          onClick={copyPasswordBtn}
          size='sm'
          variant='filled'
          className='rounded-full p-1 bg-[#2f3542] bg-transparent hover:bg-transparent'>
          <Square2StackIcon className='h-6 w-6 text-gray-500 hover:text-cyan-300 hover:scale-110 transition-all' />
        </Button>
      </div>
    </div>
  );
}
