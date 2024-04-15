"use client";
import { Typography } from "@material-tailwind/react";
import { React } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
export default function Form() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center bg-gray-100 pt-24 align-middle text-black sm:px-0 md:px-0 lg:px-32">
      <div className="container relative flex flex-row flex-wrap border-gray-900 bg-[#0a0a0a] p-0">
        <h1 className="absolute left-14 top-12 m-0 p-0 text-3xl font-bold text-white md:text-3xl">
          Guarding your apps frontline.
        </h1>
        <div className="flex-1 flex-col border-r-[0.5px] border-gray-800/60 text-gray-200">
          <div className="flex-1 border-b-[0.5px] border-gray-800/60 px-8 py-16"></div>
          <Link href="#">
            <div className="group flex flex-1 flex-row justify-between border-b-[0.5px] border-gray-800/60 px-14 py-6 transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-900/30">
              <Typography variant="h5" className="m-0 p-0 font-bold">
                Proactive Defense
              </Typography>
              <ArrowRightIcon className="h-8 w-8 rounded-full border-[0.5px] border-gray-800/60 p-1 text-gray-500 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
            </div>
          </Link>
          <div className="flex flex-1 flex-col items-start px-14 py-12 text-gray-200">
            <div className="flex flex-row items-center gap-1">
              <ShieldCheckIcon className="h-5 w-5 text-gray-500" />
              <Typography
                variant="h6"
                className="font-bold tracking-wide text-gray-600"
              >
                Vercel Firewall
              </Typography>
            </div>
            <Typography variant="h6" className="pt-3 tracking-wide">
              Integrated DDoS protection and dedicated support that keeps your
              site safe from attacks.
            </Typography>
          </div>
        </div>
        <div className="flex flex-1 flex-col text-gray-200">
          <div className="hidden flex-1 border-b-[0.5px] border-gray-800/60 px-8 py-16 sm:block md:block"></div>
          <Link href="#">
            <div className="group flex flex-1 flex-row justify-between border-b-[0.5px] border-gray-800/60 px-12 py-6 transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-900/30">
              <Typography variant="h5" className="m-0 p-0 font-bold">
                Extend your backend
              </Typography>
              <ArrowRightIcon className="h-8 w-8 rounded-full border-[0.5px] border-gray-800/60 p-1 text-gray-500 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
            </div>
          </Link>
          <div className="4 flex flex-1 flex-col items-start px-14 py-12 text-gray-200">
            <div className="flex flex-row items-center gap-1">
              <CheckBadgeIcon className="h-5 w-5 text-gray-500" />
              <Typography
                variant="h6"
                className="font-bold tracking-wide text-gray-600"
              >
                Secure Compute
              </Typography>
            </div>
            <Typography variant="h6" className="pt-3 tracking-wide ">
              Securely bridge your Kubernetes or on-premise backend services
              with Secure Compute to ensure private access to Vercel.
            </Typography>
          </div>
        </div>
        <div className="flex-1 flex-col border-l-[0.5px] border-gray-800/60 text-gray-200">
          <div className="hidden flex-1 border-b-[0.5px] border-gray-800/60 px-8 py-16 sm:block md:block"></div>
          <Link href="#">
            <div className="group flex flex-1 flex-row justify-between border-b-[0.5px] border-gray-800/60 px-12 py-6 transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-900/30">
              <Typography variant="h5" className="m-0 p-0 font-bold">
                App Observability
              </Typography>
              <ArrowRightIcon className="h-8 w-8 rounded-full border-[0.5px] border-gray-800/60 p-1 text-gray-500 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
            </div>
          </Link>
          <div className="flex flex-1 flex-col items-start px-14 py-12 text-gray-200 ">
            <div className="flex flex-row items-center gap-1">
              <EyeIcon className="h-5 w-5 text-gray-500" />
              <Typography
                variant="h6"
                className="font-bold tracking-wide text-gray-600"
              >
                Observability by default
              </Typography>
            </div>
            <Typography variant="h6" className="pt-3 tracking-wide">
              Visualize usage, traffic, and more from your Vercel dashboard with
              built-in monitoring, audit, and runtime logs.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
