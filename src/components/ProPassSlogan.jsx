import { Typography } from "@material-tailwind/react";
import { React } from "react";
import Link from "next/link";
import {
  ShieldCheckIcon,
  CheckBadgeIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

export default function ProPassSlogan() {
  return (
    <div className="md:rounded-0 container relative flex flex-row flex-wrap border-gray-900 bg-gray-900 p-0 shadow-2xl  lg:rounded-xl">
      <div className="flex-1 flex-col border-r-[0.5px] border-gray-800/30 text-gray-200">
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-start gap-4 border-b-[0.5px] border-gray-800/30 px-12 py-8 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60  ">
            <ShieldCheckIcon className="h-7 w-7 rounded-full border-[0.5px] border-gray-700/30 text-orange-500 transition-all duration-300 ease-in-out group-hover:scale-110" />
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Defense Firewall
            </Typography>
          </div>
        </Link>
        <div className=" flex flex-1 flex-col items-start justify-start p-12 text-gray-200">
          <Typography variant="h6" className="pt-3 text-left text-gray-400">
            Strengthening your defenses proactively with advanced monitoring.
            Choose ProPass for better cybersecurity protection.
          </Typography>
        </div>
      </div>
      <div className="flex-1 flex-col text-gray-200">
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-start gap-4 border-b-[0.5px] border-gray-800/30 px-12 py-8 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60">
            <CheckBadgeIcon className="h-7 w-7 rounded-full border-[0.5px] border-gray-700/30 text-cyan-300 transition-all duration-300 ease-in-out group-hover:scale-110" />
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Threat Detection
            </Typography>
          </div>
        </Link>
        <div className="flex flex-1 flex-col items-start p-12  text-gray-200 ">
          <article className="text-pretty">
            <Typography
              variant="h6"
              className="balanced pt-3 text-left tracking-wide text-gray-400"
            >
              Anticipate threats before they emerge. ProPass empowers you with
              robust security features for a seamless online experience.
            </Typography>
          </article>
        </div>
      </div>
      <div className="flex-1 flex-col border-l-[0.5px] border-gray-800/30 text-gray-200">
        <Link href="#">
          <div className="group flex flex-1 flex-row items-center justify-start gap-4 border-b-[0.5px] border-gray-800/30 px-12 py-8 text-left align-middle transition-all duration-300 ease-in-out hover:border-t-gray-800/60  ">
            <EyeIcon className="h-7 w-7 rounded-full border-[0.5px] border-gray-700/30  text-green-400 transition-all duration-300 ease-in-out group-hover:scale-110" />
            <Typography variant="h5" className="m-0 p-0 font-bold">
              Default Observability
            </Typography>
          </div>
        </Link>
        <div className="flex flex-1 flex-col items-start p-12  text-gray-200 ">
          <article className="text-pretty">
            <Typography
              variant="h6"
              className="balanced pt-3 text-left tracking-wide text-gray-400"
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
