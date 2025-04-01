"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerAuthUser } from "@/models/user";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [error, setErrors] = useState<string[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerAuthUser>();
  const router = useRouter();

  const onSubmit = handleSubmit(
    async ({ address, email, password }: registerAuthUser) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address,
            email,
            password,
          }),
        }
      );

      const responseAPI = await res.json();

      if (!res.ok) {
        setErrors(responseAPI.message);
        return;
      }

      const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (responseNextAuth?.error) {
        setErrors(responseNextAuth.error.split(","));
        return;
      }

      router.push("/login");
    }
  );

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="test@test.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className=" text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div className="space-y-1.5 mt-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="123123"
                {...register("password",{required:true})}
              />
              {errors.password && <p className=" text-red-500 text-sm">Password is required</p>}
            </div>
            <div className="space-y-1.5 mt-2">
              <Label>Address</Label>
              <Input
                type="text"
                placeholder="some 123"
                {...register("address",{required:true})}
              />
              {errors.address && <p className=" text-red-500 text-sm">Address is required</p>}
            </div>
            <Button className="space-y-1.5 mt-4">Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default RegisterPage;
