"use client";

import ButtonAuth from "@/components/shared/ButtonAuth";
import { Product } from "@/models/product";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  if (status === "loading") {
    <p>Loading .... </p>;
  }

  const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
    const data = await res.json();
    return data;
  };

  const deleteProduct = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );
    return await res.json();
  };

  const handleRemoveProduct = async (id: number) => {
    await deleteProduct(id);
    router.refresh();
  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getProducts();

      setProducts(res);
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
              <Link href="/products">Products</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="#">About us</Link>
              <Link href="#">Contact</Link>
              <ButtonAuth />
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product: Product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleRemoveProduct={() => handleRemoveProduct(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
