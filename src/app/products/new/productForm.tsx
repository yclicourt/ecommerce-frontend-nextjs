"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/models/product";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function ProductForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Product>();

  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = handleSubmit(async (productData: Product) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);
    router.push("/products");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="space-y-1.5">
          <Label>Product Name</Label>
          <Input {...register("name", { required: true })} />
          {errors.name && (
            <p className=" text-red-500 text-sm">Name is required</p>
          )}
        </div>
        <div className="space-y-1.5 mt-2">
          <Label>Description</Label>
          <Input {...register("description", { required: true })} />
          {errors.description && (
            <p className=" text-red-500 text-sm">Description is required</p>
          )}
        </div>
        <div className="space-y-1.5 mt-2">
          <Label>Price</Label>
          <Input {...register("price", { required: true })} />
          {errors.price && (
            <p className=" text-red-500 text-sm">Price is required</p>
          )}
        </div>
        <div className="space-y-1.5 mt-2">
          <Label>Image</Label>
          <Input {...register("image", { required: true })} />
          {errors.image && (
            <p className=" text-red-500 text-sm">Image is required</p>
          )}
        </div>
        <Button className="space-y-1.5 mt-4">Create Product</Button>
      </form>
    </div>
  );
}
