"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Product } from "@/models/product";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const { data: session, status } = useSession();


  if (status === "loading") {
    return <p>Loading...</p>;
  }
  console.log(session);
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  const getCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    async function loadCategories() {
      const res = await getCategories();
      setCategories(res.data);
    }
    loadCategories();
  },);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <Button onClick={getCategories} variant={"default"}>
        Get Cats
      </Button> */}
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <div>
        {categories.map((category: Product) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
