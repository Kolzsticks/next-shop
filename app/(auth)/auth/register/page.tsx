"use client";
import Image from "next/image";
import Link from "next/link";
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
import { useState } from "react";
import { z } from "zod";
import ErrorMessage from "@/components/error-message";
import LoadingButton from "@/components/loading-button";
import { motion } from "framer-motion";
import { registerSchema } from "@/lib/zod";
import GoogleLoginButton from "@/app/components/GoogleLoginButton";
import { handleGoogleSignIn } from "../../actions/authActions";
import { useRouter } from "next/navigation";

export default function Register() {
  const [globalError, setGlobalError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const router = useRouter();

  // Initialize form with zod schema validation
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const response = await fetch(
        "https://ecommerce-api-kfwt.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setGlobalError(
          errorData.message || "Registration failed. Please try again."
        );
      } else {
        setSuccessMessage(
          "Registration successful! Please check your email to verify your account."
        );
        setGlobalError("");
        form.reset();
        router.push('/auth/signin')
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setGlobalError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex lg:h-screen h-svh">
      {/* Desktop-only Side Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/img/bg_1.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col items-center justify-center text-center w-full p-10 text-white space-y-5">
          <motion.h1
            className="flex gap-4 text-5xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3, ease: "easeOut", repeat: Infinity,
              repeatDelay: 1,
            }}

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
            transition={{
              duration: 3, ease: "easeInOut", repeat: Infinity,
              repeatDelay: 1
            }}
          >
            Welcome! Join our store to discover exclusive products and great
            deals.
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

      {/* Registration Form Section */}
      <div className="relative flex w-full md:w-1/2 items-center justify-center p-4 lg:p-16 lg:bg-gray-300 md:bg-gray-300">
        <Card className="w-full max-w-md space-y-2 z-10 lg:bg-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl lg:text-4xl font-bold text-center text-gray-800 flex items-center">
              <Link href='/' className="mr-2"><span className="icon-home"></span></Link>     Create an Account
            </CardTitle>
            <p className="text-center text-gray-600">Register to get started</p>
          </CardHeader>
          <CardContent>
            {globalError && <ErrorMessage error={globalError} />}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className="text-gray-700">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Enter your username"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          type="password"
                          placeholder="Confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <LoadingButton pending={form.formState.isSubmitting} />
              </form>
            </Form>
            <span className="text-sm text-gray-500 text-center block my-2">
              or
            </span>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <GoogleLoginButton text="Sign up with Google" onSubmit={handleGoogleSignIn} />
            </form>
          </CardContent>
          <p className="text-center text-gray-600 mb-4">
            Already have an account?{" "}
            <Link href="/auth/signin" className="fg-theme hover:underline">
              Log in here
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}