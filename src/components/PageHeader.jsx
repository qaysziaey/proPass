import { React } from "react";
import { Button, Typography } from "@material-tailwind/react";

export default function PageHeader({
  headerTitle,
  headerSubtitle,
  handleHeaderBtn,
  headerNotification,
}) {
  return (
    <div className="flex w-full flex-col border-b border-gray-500/10 bg-white pb-4 pt-[65px]">
      <div className="container flex items-center justify-center pt-4 align-middle">
        {headerNotification}
      </div>
      <div className="container flex flex-wrap items-center justify-center pt-10 align-middle">
        <div className="align-start flex flex-1 flex-row items-center justify-center gap-4 ">
          <div className="flex-1 flex-col justify-start">
            <h1 className="m-0 p-0 text-3xl font-semibold leading-normal tracking-tight text-black">
              {headerTitle}
            </h1>
            <p className="mt-[-5px] text-sm leading-normal text-gray-600">
              {headerSubtitle}
            </p>
          </div>
        </div>
        <div className="flex place-items-center justify-center align-middle">
          <Button
            onClick={handleHeaderBtn}
            size="sm"
            color="black"
            className="flex items-center gap-2 rounded-full align-middle normal-case shadow-none transition-all hover:bg-gray-800 hover:shadow-none"
          >
            <Typography variant="h6" className="text-1xl tracking-wide">
              Add New
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
