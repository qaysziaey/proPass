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
    <div className="w-70 flex flex h-10 grow flex-row items-center justify-between gap-3 rounded-[12px] border-[1.5px] border-[#2f3640]/50 bg-gray-900 py-9 pl-3 pr-4 align-middle text-gray-400 transition-all  hover:border-cyan-300/20 hover:bg-gray-800/40">
      <div className="flex rounded-xl bg-gray-800/30 p-2 text-cyan-100">
        {accountIcon}
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-1 pl-1">
        <Typography variant="h6" className="leading-none text-white">
          {accountTitle}
        </Typography>
        <Typography
          variant="paragraph"
          className="leading-1 truncate text-gray-400"
        >
          {accountDescription}
        </Typography>
      </div>
      <div className="flex w-6 flex-col items-end gap-0">
        <Button
          onClick={copyPasswordBtn}
          size="sm"
          variant="filled"
          className="rounded-full bg-[#2f3542] bg-transparent p-1 shadow-none hover:bg-transparent hover:shadow-none"
        >
          <Square2StackIcon className="h-6 w-6 text-gray-500 transition-all hover:scale-110 hover:text-cyan-300" />
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
