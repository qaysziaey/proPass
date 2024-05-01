"use client";
import { React } from "react";
import PageHeader from "../../components/PageHeader";

export default function Groups() {
  return (
    <div className="flex h-screen flex-col p-0 text-white">
      <PageHeader
        headerTitle="Teams"
        headerSubtitle="Manage your Teams"
        handleHeaderBtn={() => {}}
      />
      {/* <div className="container flex py-4 text-black">
        <UserTable />
      </div> */}
      <div className="container flex py-4 text-black">
        No Teams created yet.{" "}
      </div>
    </div>
  );
}
