"use client";

import { React, useState } from "react";
import Link from "next/link";
import {
  CheckCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  SquaresPlusIcon,
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
import NewCredentialForm from "../../components/NewCredentialForm";

export default function Dashboard() {
  const [copyNotification, setCopyNotification] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const CopyPasswordBtn = () => {
    setCopyNotification(
      <div className="-translate-y-1/5 absolute left-1/2 top-1/3 -translate-x-1/2 transform">
        <Alert
          className="flex items-center  justify-center gap-2 border-none bg-gray-100/40 "
          icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}
        >
          <Typography
            variant="h6"
            className="text-small tracking-wide text-black "
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
      accountIcon: <Google className="text-3xl" />,
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 2,
      accountTitle: "Instagram",
      accountDescription: "m_michael",
      accountIcon: <Instagram className="text-3xl" />,
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 3,
      accountTitle: "GitHub",
      accountDescription: "michael.dev",
      accountIcon: <Github className="text-3xl" />,
      copyPasswordBtn: CopyPasswordBtn,
    },
    {
      id: 4,
      accountTitle: "Twitter",
      accountDescription: "m_michael",
      accountIcon: <Twitter className="text-3xl" />,
      copyPasswordBtn: CopyPasswordBtn,
    },
  ];
  return (
    <div className="flex h-screen flex-col p-0">
      <div className="flex w-full flex-col border-b border-gray-500/10 bg-white pb-10 pt-[120px]">
        <div className="relative flex items-center justify-center">
          {copyNotification}
        </div>
        <div className="container flex flex-wrap items-center justify-center align-middle ">
          <div className="align-start flex flex-1 flex-row items-center justify-center gap-4 ">
            <SquaresPlusIcon className="h-12 w-12 rounded-xl border-[1px] border-white bg-white/40 p-0 text-gray-900 shadow-lg shadow-cyan-300/40 ring-2 ring-purple-900/5 transition-all" />
            <div className="flex-1 flex-col justify-start">
              <h1 className="m-0 p-0 text-3xl font-semibold leading-normal tracking-tight text-black">
                Credentials
              </h1>
              <p className="mt-[-5px] text-sm leading-normal text-gray-600">
                Manage your personal Credentials
              </p>
            </div>
          </div>
          <div className="flex place-items-center justify-center align-middle">
            <Link href="#">
              <Button
                onClick={toggleOpen}
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
        <div className="container mx-auto ">
          <Collapse open={open} className="w-full p-0 ease-in-out">
            <Card className="mt-8 flex w-full flex-col gap-4 bg-gray-200/30 p-0 shadow-none transition-all duration-300 ease-in-out">
              <CardBody className="p-2">
                <form>
                  <div className="flex w-full flex-row flex-wrap justify-center gap-2 p-0">
                    <div className="mb-1 flex flex-auto flex-col gap-6">
                      <Input
                        label="Account title"
                        size="lg"
                        placeholder="name@mail.com"
                        className="flex-grow border border-gray-900 text-gray-900 focus:border-blue-500 active:border-blue-500"
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
                    <div className="mb-1 flex flex-grow flex-col justify-between gap-6">
                      <Select label="Choose account logo">
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <Typography variant="h6">Login</Typography>
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          Streaming{" "}
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
                          <Typography variant="h6">Card</Typography>
                        </Option>
                        <Option className="flex flex-row items-center gap-4 text-gray-600">
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
                          className="small group mb-0 flex w-full items-center justify-center gap-2 border-[1.5px] border-gray-700/20 bg-gray-900 text-white shadow-none transition-all hover:border-gray-700/30 hover:bg-gray-800 hover:text-gray-200 hover:shadow-sm"
                          placeholder=""
                        >
                          <SparklesIcon className="h-5 w-5 text-white transition-all group-hover:text-blue-300" />
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
                          className="my-0 w-full items-center justify-center border-[1.5px] border-gray-900/10 text-gray-700 shadow-none transition-all hover:border-gray-700/30 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
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
      <div className="container mx-auto flex flex-wrap gap-2 pt-10">
        {credentials.map((credential) => (
          <CredentialSingleAccount key={credential.id} {...credential} />
        ))}
      </div>
      <div>
        <NewCredentialForm />
      </div>
    </div>
  );
}
