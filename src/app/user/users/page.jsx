"use client";
import { React } from "react";
import MemberTable from "../../../components/MemberTable";
import PageHeader from "../../../components/PageHeader";
import { useUser } from "@clerk/nextjs";

export default function Members() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <PageHeader
        headerTitle="Members"
        headerSubtitle="Manage your Teams"
        handleHeaderBtn={() => {}}
        headerNotification={false}
      />
      {user && (
        <MemberTable
          key={user.id}
          img={user.imageUrl}
          name={user.username}
          email={user.primaryEmailAddress.emailAddress}
        />
      )}
    </div>
  );
}
