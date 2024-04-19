import React from "react";
import MemberTable from "../../../components/MemberTable";
import { getUserByClerkId } from "@lib/service/user";

async function Members() {
  const userData = await getUserByClerkId("user_2fBpwZJcPJnJoX1OzgLvaaqWw9D");
  console.log(userData);

  return (
    <div>
      <MemberTable />
    </div>
  );
}

export default Members;
