"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "@/lib/zod";
import LoadingButton from "@/components/loading-button";
import { handleCredentialsSignin } from "../../actions/authActions";
import { useState } from "react";
import ErrorMessage from "@/components/error-message";
import { motion } from "framer-motion";
import GoogleLoginButton from "@/app/components/GoogleLoginButton";
import { handleGoogleSignIn } from "../../actions/authActions";
import Link from "next/link";

export default function SignIn() {
  const [globalError, setGlobalError] = useState<string>("");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const result = await handleCredentialsSignin(values);
      if (result?.message) {
        setGlobalError(result.message);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.", error);
    }
  };

  return (
    <div className="flex h-svh">
      {/* Image & Store Title Section */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/img/bg_1.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay for readability */}
        <div className="z-10 flex flex-col items-center justify-center text-center w-full p-10 text-white space-y-5">
          <motion.h1
            className="flex gap-4 text-5xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              width={50}
              height={30}
              src="/img/logo.png"
              alt="OnyxShop logo"
            />
            <span className="fg-theme">Onyx</span>Shop
          </motion.h1>

          <motion.p
            className="text-lg max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          >
            Welcome to our store! Discover exclusive products and great deals.
            Let’s get you signed in!
          </motion.p>
        </div>
      </div>

      {/* Mobile-only Background Image */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/mobile_bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Login Form Section */}
      <div className="relative flex w-full md:w-1/2 items-center justify-center p-4 lg:p-16 lg:bg-gray-300 md:bg-gray-300">
        <Card className="w-full max-w-md space-y-6 lg:bg-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl lg:text-4xl font-bold text-center text-gray-800 flex items-center">
        <Link href='/' className="mr-2"><span className="icon-home"></span></Link>      Welcome Back
            </CardTitle>
            <p className="text-center text-gray-600">Sign in to continue</p>
          </CardHeader>
          <CardContent>
            {globalError && <ErrorMessage error={globalError} />}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          type="email"
                          placeholder="Enter your email address"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <LoadingButton pending={form.formState.isSubmitting} />
              </form>
            </Form>
            <span className="text-sm text-gray-500 text-center block my-2">
              or
            </span>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <GoogleLoginButton text="Sign in with Google" onSubmit={handleGoogleSignIn} />
            </form>
          </CardContent>
          <p className="text-center text-gray-600 mb-4">
            Don't have an account?{" "}
            <Link href="/auth/register" className="fg-theme hover:underline">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
