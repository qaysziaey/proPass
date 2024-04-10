"use client";
import { React, useState } from "react";
import Link from "next/link";
import {
  PlusIcon,
  CheckCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  CreditCardIcon,
  FingerPrintIcon,
  RectangleGroupIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

import {
  Button,
  Typography,
  Alert,
  Input,
  Textarea,
  Collapse,
  Card,
  CardBody,
  Select,
  Option,
} from "@material-tailwind/react";

import { Google_Fab as Google } from "iconview/svgs/Google_Fab";
import { Instagram_Fab as Instagram } from "iconview/svgs/Instagram_Fab";
import { Github_Fab as Github } from "iconview/svgs/Github_Fab";
import { Twitter_Fab as Twitter } from "iconview/svgs/Twitter_Fab";

import CredentialSingleAccount from "../../components/CredentialSingleAccount";

export default function Dashboard() {
  const [copyNotification, setCopyNotification] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const CopyPasswordBtn = () => {
    setCopyNotification(
      <div className="-translate-y-1/5 absolute left-1/2 top-1/3 -translate-x-1/2 transform">
        <Alert
          className="flex items-center  justify-center gap-2 border-none bg-cyan-700/10"
          icon={<CheckCircleIcon className="h-6 w-6 text-cyan-600" />}
        >
          <Typography
            variant="h6"
            className="text-small tracking-wide text-cyan-500 "
          >
            Credentials successfully copied.
          </Typography>
        </Alert>
      </div>,
    );
    setTimeout(() => {
      setCopyNotification(false);
    }, 2000);
  };

  const credentials = [
    {
      id: 1,
      accountTitle: "Google",
      accountDescription: "micl@gmail.com",
      accountIcon: (
        <Google className="h-8 w-8 rounded-xl p-0  transition-all hover:text-cyan-300" />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 2,
      accountTitle: "Instagram",
      accountDescription: "m_michael",
      accountIcon: (
        <Instagram className="h-8 w-8 rounded-xl p-0 transition-all hover:text-cyan-300" />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 3,
      accountTitle: "GitHub",
      accountDescription: "michael.dev",
      accountIcon: (
        <Github className="h-8 w-8 rounded-xl p-0  transition-all hover:text-cyan-300" />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 4,
      accountTitle: "Twitter",
      accountDescription: "m_michael",
      accountIcon: (
        <Twitter className="h-8 w-8 rounded-xl p-0 transition-all hover:text-cyan-300" />
      ),
      copyPasswordBtn: CopyPasswordBtn,
    },
  ];
  return (
    <div className="flex h-screen flex-col p-0 text-white">
      <div className="to-gray flex w-full flex-col border-b border-[#1e272e]  bg-gray-900 bg-gradient-to-br from-black pt-[100px]">
        <div className="relative flex items-center justify-center">
          {copyNotification}
        </div>
        <div className="container mx-auto">
          <Typography variant="h3" className="font-bold">
            Credentials
          </Typography>
          <Typography variant="h6" color="gray" className="mb-5">
            Manage your credentials
          </Typography>
          <div className="flex flex-wrap gap-2">
            <div className="w-34 flex flex-auto place-items-center justify-end align-middle">
              {" "}
              <Link href="#">
                <Button
                  onClick={toggleOpen}
                  size="md"
                  color="white"
                  variant="filled"
                  className="flex items-center gap-2 rounded-lg align-middle normal-case transition-all"
                >
                  <PlusIcon className="h-4 w-4" />
                  <Typography variant="h6" className="text-sm tracking-wide">
                    Add New...
                  </Typography>
                </Button>
              </Link>
            </div>
          </div>

          <Collapse open={open} className="w-full">
            <Card className="my-4 flex w-full flex-col gap-4 bg-gray-50 py-4 transition-all">
              <CardBody>
                <form>
                  <div className="flex w-full flex-row flex-wrap  justify-center gap-6 lg:px-60">
                    <div className="mb-1  flex flex-auto flex-col gap-6">
                      <Input
                        label="Account title"
                        size="lg"
                        placeholder="name@mail.com"
                        className="flex-grow border border-blue-500 text-gray-800"
                        crossOrigin={undefined}
                      />
                      <Input
                        label="Email"
                        size="lg"
                        placeholder="name@mail.com"
                        className="flex-grow border border-blue-500 text-gray-800"
                        crossOrigin={undefined}
                      />

                      <Textarea
                        variant="outlined"
                        label="Description"
                        // placeholder='Write further notes here...'
                        className="h-40 border-2 border-gray-500 text-gray-800"
                      />
                    </div>
                    <div className="mb-1 flex flex-grow flex-col gap-6">
                      <Select label="Choose account logo">
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <FingerPrintIcon className="m-0 h-7 w-7 rounded-lg bg-orange-600/10 p-1 text-orange-500 transition-all group-hover:text-cyan-300" />
                          <Typography variant="h6">Login</Typography>
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <PlayIcon className="h-7 w-7 rounded-lg  bg-red-300/10 p-1 text-red-600 transition-all group-hover:text-cyan-300" />
                          Streaming{" "}
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <CreditCardIcon className="h-7 w-7 rounded-lg bg-cyan-300/10 p-1 text-cyan-500 transition-all group-hover:text-cyan-300" />
                          <Typography variant="h6">Card</Typography>
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <RectangleGroupIcon className="h-7 w-7 rounded-lg bg-purple-300/10 p-1 text-purple-500 transition-all group-hover:text-cyan-300" />
                          <Typography variant="h6">Socials</Typography>
                        </Option>
                      </Select>
                      <Input
                        label="Password"
                        type="password"
                        size="lg"
                        placeholder="********"
                        className="flex-grow border border-blue-500 text-gray-800"
                        crossOrigin={undefined}
                      />
                      {/* <Typography
                        variant='h6'
                        placeholder='Enter text'
                        className='-mb-5 tracking-wide text-gray-800 tracking-wide'>
                        Generated Password
                      </Typography> */}
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Password has been generated.");
                        }}
                        variant="filled"
                        color="white"
                        className="small group flex w-full flex-row items-center justify-between gap-2 border-[1.5px] border-gray-700/20  text-gray-500  shadow-none transition-all hover:border-gray-700/30 hover:text-gray-700 hover:shadow-none"
                        placeholder=""
                      >
                        <Typography
                          variant="h6"
                          placeholder="Enter text"
                          className="text-sm normal-case tracking-wide"
                        >
                          xd@!.sPass*ff12deFB
                        </Typography>
                        <Square2StackIcon className="h-5 w-5 text-gray-600 transition-all group-hover:text-cyan-300" />
                      </Button>

                      <div className="flex flex-col gap-3">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("Password has been generated.");
                          }}
                          variant="filled"
                          color="gray"
                          className="small group mb-0 flex w-full items-center justify-center gap-2 border-[1.5px] border-gray-700/20  bg-gray-900 text-gray-400 transition-all hover:border-gray-700/30 hover:text-gray-200"
                          placeholder=""
                        >
                          <SparklesIcon className="h-5 w-5 text-gray-600 transition-all group-hover:text-cyan-300" />
                          <Typography
                            variant="h6"
                            placeholder="Enter text"
                            className="text-sm normal-case tracking-wide"
                          >
                            Generate
                          </Typography>
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("Password has been generated.");
                          }}
                          variant="filled"
                          color="white"
                          className="my-0 w-full items-center justify-center border-[1.5px]  border-gray-700/20 text-gray-700 transition-all hover:border-gray-700/30 hover:text-gray-900"
                          placeholder=""
                        >
                          <Typography
                            variant="h6"
                            placeholder="Enter text"
                            className="text-sm normal-case tracking-wide"
                          >
                            Save
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap gap-2 py-5">
        {credentials.map((credential) => (
          <CredentialSingleAccount key={credential.id} {...credential} />
        ))}
      </div>
    </div>
  );
}
