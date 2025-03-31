"use client";

import { useSession } from "next-auth/react";
import React from "react";

function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    <p>Loading .... </p>;
  }

  const getCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={getCategories}>Categories</button>
    </div>
  );
}

export default DashboardPage;
