"use client";
import React from "react";

import { UsersIcon } from "@heroicons/react/24/outline";

// async function getData() {
//   try {
//     const res = await fetch("https://api.example.com/...", {
//       cache: "force-cache",
//     });
//   } catch (err) {}
// }

export default function Users() {
  return (
    <div className="flex h-screen flex-col p-0 text-white">
      <div className="flex w-full flex-col border-b border-gray-500/10 bg-white pb-5 pt-[120px]">
        <div className="container flex flex-wrap items-center justify-center align-middle ">
          <div className="align-start flex flex-1 flex-row items-center justify-center gap-4 ">
            <UsersIcon className="h-12 w-12 rounded-xl border-[1px] border-white bg-white/40 p-0 text-gray-900 shadow-lg shadow-green-300/40 ring-2 ring-purple-900/5 transition-all" />
            <div className="flex-1 flex-col justify-start">
              <h1 className="m-0 p-0 text-3xl font-semibold leading-normal tracking-tight text-black">
                Members
              </h1>
              <p className="mt-[-5px] text-sm leading-normal text-gray-600">
                Manage members of a team
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap gap-2 pt-10">hello</div>
    </div>
  );
}
