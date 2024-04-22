"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import api from "@/lib/apiCalls";
import FormError from "./form-error";
import translateApiMessage from "@/Functions/utils/translateApiMessage";
import FormSuccess from "./form-success";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";

const categoryRegex = /^([a-zA-Z]+(?: [a-zA-Z]+)*|[א-ת]+(?: [א-ת]+)*)$/;
const CategoryCreationSchema = z.object({
  category: z.string().regex(categoryRegex, {
    message: "ערך לא תקין",
  }),
});

export const CategoryCreation = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [oldCategories, setOldCategories] = useState<string[]>([]);
  const [newCategories, setNewCategories] = useState<string[]>([]);

  const router = useRouter();
  const form = useForm<z.infer<typeof CategoryCreationSchema>>({
    resolver: zodResolver(CategoryCreationSchema),
    defaultValues: {
      category: "",
    },
  });

  useEffect(() => {
    startTransition(() => {
      const fetchCategories = async () => {
        try {
          const { message } = await api.get<string[]>("/r/tags");
          setOldCategories(message);
        } catch (error: any) {
          setError(error.message);
        }
      };
      fetchCategories();
    });
  }, []);

  const onClick = (data: z.infer<typeof CategoryCreationSchema>) => {
    const inputValue = data.category;
    if (
      newCategories.includes(inputValue) ||
      oldCategories.includes(inputValue)
    ) {
      setError("קטגוריה זו כבר קיימת!");
      setTimeout(() => {
        setError("");
        form.reset();
      }, 3000);
    } else {
      setNewCategories((prevCategories) => [...prevCategories, inputValue]);
    }
  };

  const handleDelete = (categoryToDelete: string) => {
    setNewCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToDelete)
    );
  };

  const onSubmit = () => {
    startTransition(async () => {
      try {
        const { message } = await api.post("admin/addTags", { tags: newCategories });
        setSuccess(await translateApiMessage.categories(message));
        const userId = useCurrentUser()?.id;
        router.push(`/p/${userId}`);
      } catch (error: any) {
        const translateMessage = await translateApiMessage.login(error.message);
        setError(translateMessage);
      }
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onClick)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>קטגוריה</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
                <div className="bg-white rounded-md">
                  <FormError message={error} />
                  <FormSuccess message={success} />
                </div>
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-evenly">
            <Button type="submit" disabled={isPending}>
              הוסף קטגוריה
            </Button>
            <Button type="button" disabled={isPending} onClick={onSubmit}>
              עדכון קטגוריות
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-row gap-4 mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 font-semibold text-gray-700">
                קטגוריות קיימות
              </th>
            </tr>
          </thead>
          <tbody>
            {oldCategories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-400">
                <td className="px-4 py-2 border">{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full text-left border-collapse h-fit">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 font-semibold text-gray-700">
                קטגוריות חדשות
              </th>
              <th className="px-4 py-2 bg-gray-200 font-semibold text-gray-700">
                פעולה
              </th>
            </tr>
          </thead>
          <tbody className="border-x px-4">
            {newCategories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-400">
                <td className="px-4 py-2 border">{category}</td>
                <td className="px-4 py-2 border hover:text-red-500">
                  <button
                    type="button"
                    disabled={isPending}
                    onClick={() => handleDelete(category)}
                  >
                    הסר
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
