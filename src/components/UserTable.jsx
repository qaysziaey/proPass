import { React, useState, useEffect } from "react";

import { getUserByClerkId } from "../lib/service/user";

export default function UserTable() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // "use server";
    const fetchData = async () => {
      const userData = await getUserByClerkId(
        "user_2fBpwZJcPJnJoX1OzgLvaaqWw9D",
      );
      setUser(userData);
      console.log(userData);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Users list :</h1>
      {user ? (
        <div>
          <h1>{user}</h1>
        </div>
      ) : null}
    </div>
  );
}
