"use client";
import { React } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Member", "Role", "Team", ""];

function MemberTableEditBtn() {
  return console.log("edit");
}

export default function MemberTable({ img, name, email }) {
  return (
    <div className="container flex flex-col pt-4 text-white">
      <Card className="h-full w-full   border-[1px] border-gray-200  p-0 shadow-none">
        <CardBody className="p-0 py-0">
          <table className="mt-0 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-gray-200/60 bg-gray-100/50 p-4"
                  >
                    <Typography
                      variant="h6"
                      color="black"
                      className="font-bold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr key={name}>
                <td className="border-b border-gray-200/60 p-4">
                  <div className="flex items-center gap-3">
                    <Avatar src={img} alt={name} size="sm" className="border" />
                    <div className="flex flex-col">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm font-bold"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm opacity-50"
                      >
                        {email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200/60 p-4">
                  <div className="flex flex-col">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-sm"
                    >
                      Developer
                    </Typography>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-sm opacity-50"
                    >
                      UI Designer
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="w-max">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Online"
                      color="cyan"
                    />
                  </div>
                </td>
                <td>
                  <Tooltip content="Edit User">
                    <IconButton variant="text" onClick={MemberTableEditBtn}>
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="filled"
              size="sm"
              className="rounded-full normal-case"
            >
              Back
            </Button>
            <Button
              variant="filled"
              size="sm"
              className="rounded-full normal-case"
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
