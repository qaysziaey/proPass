"use client";

import { React, useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Typography, Alert, Collapse } from "@material-tailwind/react";

import CredentialSingleAccount from "../../components/CredentialSingleAccount";
import NewCredentialForm from "../../components/NewCredentialForm";
import PageHeader from "../../components/PageHeader";

export default function Dashboard() {
  const [credentials, setCredentials] = useState([]);
  const [copyNotification, setCopyNotification] = useState(true);
  const [deleteNotification, setDeleteNotification] = useState(true);
  const [copyNotificationVisible, setCopyNotificationVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    async function getCredentials() {
      try {
        const response = await fetch("/api/getCredentials");
        const data = await response.json();
        setCredentials(data.credentials);
      } catch (error) {
        console.error("Error fetching credentials:", error);
      }
    }
    getCredentials();
  }, []);

  // Delete Credential
  const deleteCredential = async (credentialId) => {
    try {
      const response = await fetch("/api/deleteCredential", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: credentialId }),
      });

      if (response.ok) {
        deleteNotification &&
          setDeleteNotification(
            <Alert
              className="flex items-center justify-center gap-2 border-none bg-gray-900 shadow-lg lg:w-1/3"
              icon={<CheckCircleIcon className="text-grey-500 h-6 w-6" />}
            >
              <Typography
                variant="h6"
                className="text-small tracking-wide text-gray-200 "
              >
                Credentials successfully deleted.
              </Typography>
            </Alert>,
          );
        setTimeout(() => {
          setDeleteNotification(false);
        }, 2000);
      }
      if (!response.ok) throw new Error("Failed to delete credential");

      setCredentials((prevCredentials) =>
        prevCredentials.filter((credential) => credential.id !== credentialId),
      );
    } catch (error) {
      console.error("Error during credential deletion:", error);
    }
  };

  const CopyPasswordBtn = () => {
    copyNotificationVisible &&
      setCopyNotification(
        <Alert
          className="flex items-center justify-center gap-2 border-none bg-gray-900 shadow-lg lg:w-1/3"
          icon={<CheckCircleIcon className="text-grey-500 h-6 w-6" />}
        >
          <Typography
            variant="h6"
            className="text-small tracking-wide text-gray-200 "
          >
            Credentials successfully copied.
          </Typography>
        </Alert>,
      );
    setTimeout(() => {
      setCopyNotification(false);
      setCopyNotificationVisible(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen flex-col p-0">
      <PageHeader
        headerTitle="Dashboard"
        headerSubtitle="View and manage your credentials"
        handleHeaderBtn={toggleOpen}
        headerNotification={copyNotification}
      />

      <div className="container mx-auto ">
        <Collapse open={open} className="w-full p-0 ease-in-out">
          <NewCredentialForm />
        </Collapse>
      </div>

      <div className="container flex  flex-wrap justify-center gap-2 pt-10 text-center align-middle ">
        {credentials.length === 0 ? (
          <div className="flex flex-col gap-4">
            <Typography variant="h6" className="text-center">
              No credentials found.
            </Typography>
            <Typography variant="h6" className="text-center text-gray-600">
              Click on Add New to create new Credentials.
            </Typography>
          </div>
        ) : (
          credentials.map((credential) => (
            <CredentialSingleAccount
              key={credential._id}
              accountTitle={credential.accountTitle}
              accountDescription={credential.email}
              accountIcon={credential.accountIcon}
              copyPasswordBtn={CopyPasswordBtn}
              onDeleteCredential={() => deleteCredential(credential._id)} // Corrected
            />
          ))
        )}
      </div>
    </div>
  );
}
