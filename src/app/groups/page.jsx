"use client";
import React from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

export default function Groups() {
  // const [copyNotification, setCopyNotification] = React.useState(true);

  return (
    <div className="flex h-screen flex-col p-0 text-white">
      <div className="to-gray] flex w-full flex-col border-b border-[#1e272e] bg-gray-900 bg-gradient-to-b from-black pb-10 pt-[100px]">
        {/* <div className='relative flex justify-center items-center'>
          {copyNotification}
        </div> */}
        <div className="container mx-auto">
          <Typography variant="h3" className="font-bold">
            Groups
          </Typography>
          <Typography variant="h6" color="gray" className="mb-5">
            Manage Group credentials
          </Typography>
          <div className="flex flex-wrap gap-2">
            <div className="w-34 flex flex-auto place-items-center justify-end align-middle">
              {" "}
              <Link href="#">
                <Button
                  size="sm"
                  color="white"
                  variant="filled"
                  className="flex items-center gap-2 rounded-lg align-middle normal-case transition-all"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add New...
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
