"use client";

import ButtonAuth from "@/components/shared/ButtonAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/models/product";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProductPage() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);

  if (status === "loading") {
    <p>Loading .... </p>;
  }

  console.log(session,session?.user?.token)
  const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getProducts();

      setProducts(res.products || []);
    }
    loadProducts();
  }, []);

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
      <div className="grid grid-cols-4 gap-3">
        {products.map((product: Product) => (
          <Card key={product.name}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <span>${product.price}</span>
            </CardHeader>
            <Image src={product.image} width={50} height={50} alt=""></Image>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
