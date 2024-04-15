"use client";
import PropTypes from "prop-types";
import { React } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Square2StackIcon } from "@heroicons/react/24/outline";

export default function CredentialSingleAccount({
  accountTitle,
  accountDescription,
  copyPasswordBtn,
  accountIcon,
}) {
  return (
    <div className="flex flex-1 items-center justify-between gap-3 rounded-xl  bg-gray-200/30 p-7 align-middle text-gray-400 transition-all hover:cursor-pointer  hover:bg-gray-200/50">
      <div className="text-gray-800">{accountIcon}</div>
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
      <div className="">
        <Button
          onClick={copyPasswordBtn}
          size="sm"
          variant="filled"
          className="rounded-full bg-[#2f3542] bg-transparent p-0 shadow-none hover:bg-transparent hover:shadow-none"
        >
          <Square2StackIcon className="h-6 w-6 text-gray-400 transition-all hover:scale-110 hover:text-gray-900" />
        </Button>
      </div>
    </div>
  );
}
CredentialSingleAccount.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountDescription: PropTypes.string.isRequired,
  copyPasswordBtn: PropTypes.func.isRequired,
  accountIcon: PropTypes.node.isRequired,
};
