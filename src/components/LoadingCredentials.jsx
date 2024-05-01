import { React } from "react";
import { Typography } from "@material-tailwind/react";

export default function LoadingCredentials() {
  return (
    <div className="flex w-full animate-pulse flex-col gap-2 rounded-xl bg-gray-100 p-4">
      <div className="flex w-max flex-col gap-2 ">
        <div className="p-2">
          <Typography
            as="div"
            variant="h1"
            className="mb-2 h-4 w-56 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </div>
        <div className="p-2">
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </div>
        <div>
          <div className="flex flex-row flex-wrap justify-between gap-2">
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-7 w-20 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-7 w-20 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-7 w-20 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
