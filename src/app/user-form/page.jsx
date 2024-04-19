"use client";

import { React } from "react";

import NewCredentialForm from "../../components/NewCredentialForm";
import ProPassSlogan from "../../components/ProPassSlogan";
export default function Form() {
  return (
    <div className="container flex h-full flex-col items-center justify-center bg-gray-100 pb-8 pt-24 align-middle text-black sm:px-0 md:px-0 lg:px-32">
      <NewCredentialForm />
      <ProPassSlogan />
    </div>
  );
}
