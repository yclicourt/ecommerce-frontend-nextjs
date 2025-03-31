"use client"

import { useRouter } from "next/navigation";
import { Product } from "@/models/product";
import { useSession } from "next-auth/react";
import ProductForm from "./productForm";
import { useForm } from "react-hook-form";

export function ProductPage() {
  const router = useRouter();
  const { handleSubmit } = useForm<Product>();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  const onSubmit = handleSubmit(async (productData: Product) => {
    const res = await fetch("http://localhost:4000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    return data;
  });
  router.push("/products");
  return <ProductForm onSubmit={onSubmit} />;
}
export { ProductForm };
