"use client";
import { React } from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export default function Groups() {
  return (
    <div className="flex h-screen flex-col p-0 text-white">
      <div className="flex w-full flex-col border-b border-gray-500/10 bg-white pb-5 pt-[100px]">
        <div className="container flex flex-wrap items-center justify-center rounded-xl align-middle ">
          <div className="flex-1 flex-col">
            <Typography
              variant="h2"
              className="font-black tracking-tight text-black"
            >
              Teams
            </Typography>
            <Typography variant="h6" className=" text-gray-900/50">
              Manage your Teams
            </Typography>
          </div>
          <div className="flex place-items-center justify-center align-middle">
            {" "}
            <Link href="#">
              <Button
                size="sm"
                color="black"
                className="group flex items-center gap-2 rounded-lg align-middle normal-case shadow-none transition-all hover:bg-gray-800 hover:shadow-none"
              >
                <Typography variant="h6" className=" tracking-wide">
                  Add New
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
