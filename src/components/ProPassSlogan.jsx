"use client";
import { Typography } from "@material-tailwind/react";
import { React } from "react";
import Link from "next/link";
import Image from "next/image";
import appLogoWhite from "../../public/logo-white.png";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
export default function ProPassSlogan() {
  return (
    <div className="md:rounded-0 container relative flex flex-row flex-wrap border-gray-900 bg-gray-900 p-0 shadow-2xl  lg:rounded-xl">
      <div className="flex-1 flex-col border-r-[0.5px] border-gray-800/30 text-gray-200">
        <div className="flex-1 border-b-[0.5px] border-gray-800/30 px-8 py-16"></div>
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-between border-b-[0.5px] border-gray-800/30 px-12 py-6 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-800/20 ">
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Proactive Security
            </Typography>
            <ArrowRightIcon className="h- w-7 rounded-full border-[0.5px] border-gray-700/30 p-1 text-gray-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
          </div>
        </Link>
        <div className=" flex flex-1 flex-col items-start justify-start p-12 text-gray-200">
          <div className="flex flex-row items-center gap-2">
            <ShieldCheckIcon className="h-5 w-5 text-orange-500" />
            <Typography
              variant="h6"
              className="text-left font-bold tracking-wide text-gray-600"
            >
              Defense Firewall
            </Typography>
          </div>
          <Typography variant="h6" className="pt-3 text-left">
            Strengthening your defenses proactively with advanced monitoring.
            Choose ProPass for better cybersecurity protection.
          </Typography>
        </div>
      </div>
      <div className="flex-1 flex-col text-gray-200">
        <div className="hidden flex-1 border-b-[0.5px]  border-gray-800/30 px-8 py-12 sm:block md:block">
          <div className="flex items-center justify-center p-0">
            <Image
              src={appLogoWhite}
              alt="proPass Logo"
              width={160}
              height={50}
            />
          </div>
        </div>
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-between border-b-[0.5px] border-gray-800/30 px-12 py-6 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-800/20">
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Robust Protection
            </Typography>
            <ArrowRightIcon className="text-gray- h-7 w-7 rounded-full border-[0.5px] border-gray-700/30 p-1 p-1 text-gray-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
          </div>
        </Link>
        <div className="flex flex-1 flex-col items-start p-12  text-gray-200 ">
          <article className="text-pretty">
            <div className="flex flex-row items-center gap-2">
              <CheckBadgeIcon className="h-5 w-5 text-cyan-500" />
              <Typography
                variant="h6"
                className="text-left font-bold tracking-wide text-gray-600"
              >
                Threat Detection
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="balanced pt-3 text-left tracking-wide"
            >
              Anticipate threats before they emerge. ProPass empowers you with
              robust security features for a seamless online experience.
            </Typography>
          </article>
        </div>
      </div>
      <div className="flex-1 flex-col border-l-[0.5px] border-gray-800/30 text-gray-200">
        <div className="hidden flex-1 border-b-[0.5px] border-gray-800/30 px-8 py-16 sm:block md:block"></div>
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-between border-b-[0.5px] border-gray-800/30 px-12 py-6 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60 hover:bg-gray-800/20">
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Advanced Monitoring
            </Typography>
            <ArrowRightIcon className="text-gray- h-7 w-7 rounded-full border-[0.5px] border-gray-700/30 p-1 p-1 text-gray-100 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-100" />
          </div>
        </Link>
        <div className="flex flex-1 flex-col items-start p-12  text-gray-200 ">
          <article className="text-pretty">
            <div className="flex flex-row items-center gap-2">
              <EyeIcon className="h-5 w-5 text-green-500" />
              <Typography
                variant="h6"
                className="text-left font-bold tracking-wide text-gray-600"
              >
                Observability by default
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="balanced pt-3 text-left tracking-wide"
            >
              Prioritize proactive security measures. Implement our advanced
              password manager to safeguard your digital assets.
            </Typography>
          </article>
        </div>
      </div>
    </div>
  );
}
