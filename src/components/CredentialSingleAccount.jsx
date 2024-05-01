"use client";

import { React } from "react";
import { Button, Typography, ButtonGroup } from "@material-tailwind/react";
import {
  Square2StackIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

export default function CredentialSingleAccount({
  accountTitle,
  accountDescription,
  copyPasswordBtn,
  accountIcon,
  onDeleteCredential,
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-3 rounded-2xl border-[1px] border-gray-200/20  bg-gray-200/40 p-2 align-middle text-gray-400 transition-all hover:cursor-pointer  hover:bg-gray-200/50">
      <div className="flex w-full items-center justify-between gap-3 p-4">
        <div className="border-2 border-gray-200 text-gray-800">
          {accountIcon}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-1 pl-1">
          <Typography
            variant="h6"
            className="font-bold leading-none tracking-wide text-black"
          >
            {accountTitle}
          </Typography>
          <Typography
            variant="paragraph"
            className="leading-1 truncate font-bold text-gray-600/100"
          >
            {accountDescription}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          {/* <Button
            onClick={toggleOpen}
            size="sm"
            variant="filled"
            className="rounded-full bg-[#2f3542] bg-transparent p-0 shadow-none hover:bg-transparent hover:shadow-none"
          >
            <Square2StackIcon className="h-6 w-6 text-gray-400 transition-all hover:scale-110 hover:text-gray-900" />
          </Button> */}
        </div>
      </div>
      <div className="w-full">
        <ButtonGroup fullWidth className="gap-[1px]">
          <Button
            onClick={copyPasswordBtn}
            className="group flex items-center justify-center gap-2 border-none border-gray-200 bg-white font-bold normal-case text-gray-500 shadow-none  hover:text-gray-900 hover:text-gray-900 hover:shadow-none focus:bg-gray-200 active:bg-gray-200"
          >
            <Square2StackIcon className="h-5 w-5 text-gray-400 transition-all group-hover:scale-110 group-hover:text-gray-900 group-focus:text-gray-800 group-active:text-gray-800" />
            {/* Copy */}
          </Button>
          <Button className="group flex items-center justify-center gap-2 border-none bg-white font-bold normal-case text-gray-500 shadow-none  hover:text-gray-900 hover:text-gray-900 hover:shadow-none focus:bg-gray-200 active:bg-gray-200">
            <PencilIcon className="h-4 w-4 text-gray-400 transition-all group-hover:scale-110 group-hover:text-gray-900 group-focus:text-gray-800 group-active:text-gray-800" />
            {/* Edit */}
          </Button>
          <Button
            onClick={onDeleteCredential}
            className="group flex items-center justify-center gap-2 border-none bg-white font-bold normal-case text-gray-500 shadow-none  hover:text-gray-900 hover:text-gray-900 hover:shadow-none focus:bg-gray-200 active:bg-gray-200"
          >
            <TrashIcon className="h-4 w-4 text-gray-400 transition-all group-hover:scale-110 group-hover:text-gray-900 group-focus:text-gray-800 group-active:text-gray-800" />
            {/* Delete */}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
