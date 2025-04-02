"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <Button
          onClick={() => {
            signOut();
            if (status === "authenticated") {
              toast.success("Logout successfully", {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff",
                },
              });
            } else {
              toast.error("Close your session");
            }
          }}
          variant={"destructive"}
        >
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        onClick={() => {
          signIn();
         
        }}
        variant={"default"}
      >
        Sign In
      </Button>
    </>
  );
}
