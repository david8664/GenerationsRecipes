"use client";

import React, { useRef, useState, useTransition } from "react";
import CardWrapper from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import api from "@/lib/apiCalls";
import readFileAsBase64 from "@/Functions/utils/readFileAsBase64";
import { CgProfile } from "react-icons/cg";
import translateApiMessage from "@/Functions/utils/translateApiMessage";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: undefined,
      city: undefined,
      neighborhood: undefined,
      street: undefined,
      profilePicture: undefined,
      ToS: false,
    },
  });

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Update the form data state with the new image URL
    const newImageUrl = await readFileAsBase64(file);
    setImageUrl(newImageUrl);
    form.setValue("profilePicture", newImageUrl);
  };
  
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        console.log("register page test");
        
        const { message } = await api.post("/auth/register", values);
        console.log("message:", message);
        setSuccess("יש לאמת הרשמה במייל!");
      } catch (error: any) {
        console.error("error:", error);

        const errorMessage = await translateApiMessage.register(error.message);
        setError(errorMessage);
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="יצירת חשבון"
      backButtonLabel="כבר יש לך חשבון?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-row-reverse gap-4 flex-wrap justify-center">
            <div onClick={handleSelectImage} className="h-fit">
              <input
                type="file"
                disabled={isPending}
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <div className="cursor-pointer bg-slate-300 rounded-lg p-4">
                {!imageUrl ? (
                  <div className=" flex flex-col justify-center items-center">
                    <CgProfile size={120} />
                    <span className="text-lg text-center">
                      בחירת תמונת פרופיל
                    </span>
                  </div>
                ) : (
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>
                      פר
                      <CgProfile size={120} />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-center items-center">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שם מלא</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="חיים ישראל"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שם חיבה</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="haim123"
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
                    <FormLabel>אימייל</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Haimisrael@gmail.com"
                        type="email"
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
                    <FormLabel>סיסמא</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
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
                    <FormLabel>אימות סיסמא</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>עיר</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="ירושלים"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שכונה</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="בוכרים"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>רחוב</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="מתתיהו 36"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>פלאפון</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="0552469068"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ToS"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="space-y-1 leading-none">
                      <FormLabel className="pr-2  hover:cursor-pointer">
                        אני מאשר/ת את{" "}
                        <Link href={"/auth/termsOfService"}>תנאי השימוש</Link>.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            הרשמה
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default RegisterForm;
