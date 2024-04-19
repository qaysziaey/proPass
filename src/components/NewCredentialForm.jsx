"use client";

import { React, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import {
  Button,
  Typography,
  Alert,
  Input,
  Textarea,
  Card,
  CardBody,
  Select,
  Option,
} from "@material-tailwind/react";

export default function Dashboard() {
  const [accountTitle, setAccountTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [selectedLogo, setSelectedLogo] = useState("");
  const [saveCredentialNotification, setSaveCredentialNotification] =
    useState(true);

  // TODO: Add validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountTitle || !email || !description || !password) {
      return alert("All fields are required");
    }

    try {
      const response = await fetch("/api/newCred", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountTitle,
          email,
          description,
          password,
          logo: selectedLogo,
        }),
      });

      if (response.ok) {
        SaveCredential();
        const form = e.target;
        form.reset();
      } else {
        console.log("Error creating credentials");
      }
    } catch (err) {
      console.log("Error saving credentials", err);
    }
  };

  const SaveCredential = () => {
    setSaveCredentialNotification(
      <div className="my-4 flex">
        <Alert
          className="flex items-center  justify-center gap-2 border-none bg-gray-900 "
          icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}
        >
          <Typography
            variant="h6"
            className="text-small tracking-wide text-gray-100 "
          >
            Credentials successfully saved.
          </Typography>
        </Alert>
      </div>,
    );
    setTimeout(() => {
      setSaveCredentialNotification(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto ">
      <Card className="mt-8 flex w-full flex-col gap-4 bg-gray-200/30 p-0 shadow-none transition-all duration-300 ease-in-out">
        <CardBody className="p-2">
          <div className="relative flex items-center justify-center">
            {saveCredentialNotification}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-row flex-wrap justify-center gap-2 p-0">
              <div className="mb-1 flex flex-auto flex-col gap-6">
                <Input
                  onChange={(e) => setAccountTitle(e.target.value)}
                  label="Account title"
                  size="lg"
                  placeholder="name@mail.com"
                  className="flex-grow border border-gray-900 text-gray-900 focus:border-blue-500 active:border-blue-500"
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  size="lg"
                  placeholder="name@mail.com"
                  className="flex-grow border border-blue-500 text-gray-800"
                />

                <Textarea
                  onChange={(e) => setDescription(e.target.value)}
                  variant="outlined"
                  label="Description"
                  // placeholder='Write further notes here...'
                  className="h-40 border-2 border-gray-500 text-gray-800"
                />
              </div>
              <div className="mb-1 flex flex-grow flex-col justify-start gap-6">
                <Select
                  value={selectedLogo}
                  label="Choose account logo"
                  className="flex-grow border border-blue-500 py-4 text-gray-800"
                  onChange={(e) => setSelectedLogo(e.target.value)}
                >
                  <Option
                    value="Login"
                    className="flex flex-row items-center gap-4 text-gray-600"
                  >
                    <Typography variant="h6">Login</Typography>
                  </Option>
                  <Option
                    value="Streaming"
                    className="flex flex-row items-center gap-4 text-gray-600"
                  >
                    Streaming{" "}
                  </Option>
                  <Option
                    value="Card"
                    className="flex flex-row items-center gap-4 text-gray-600"
                  >
                    <Typography variant="h6">Card</Typography>
                  </Option>
                  <Option
                    value="Social"
                    className="flex flex-row items-center gap-4 text-gray-600"
                  >
                    <Typography variant="h6">Socials</Typography>
                  </Option>
                </Select>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  size="lg"
                  placeholder="password"
                  className="flex-grow border border-blue-500 text-gray-800"
                />

                <Button
                  variant="filled"
                  type="submit"
                  color="black"
                  className="my-0 w-full items-center justify-center border-[1.5px] border-gray-900/10 text-gray-100 shadow-none transition-all hover:border-gray-700/30 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
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
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
