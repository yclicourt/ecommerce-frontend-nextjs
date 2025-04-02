"use client";

import ButtonAuth from "@/components/shared/ButtonAuth";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [categories, setCategories] = useState([]);

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
      setCategories(res);
    }
    loadCategories();
  });
  return (
    <>
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold">Ecommerce Yoadev</h1>
        <nav className="mr-40">
          <ul>
            <li className="space-x-5 font-bold">
              <Link href="/">Home</Link>
              <Link href="/products/new">Products</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="#">About us</Link>
              <Link href="#">Contact</Link>
              <ButtonAuth />
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        {categories?.map((category: Category) => (
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
    </>
  );
};
export default Dashboard;
