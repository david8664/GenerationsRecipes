"use client";

import React, { useRef, useState, useTransition, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { MdImageSearch } from "react-icons/md";
import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecipeSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form-error";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormSuccess from "@/components/form-success";
import readFileAsBase64 from "@/Functions/utils/readFileAsBase64";
import api from "@/lib/apiCalls";
import { Tag, columns } from "@/app/(client)/(recipe)/r/create/columns";
import { DataTable } from "@/app/(client)/(recipe)/r/create/data-table";
import translateApiMessage from "@/Functions/utils/translateApiMessage";
import { useCurrentUser } from "@/hooks/use-current-user";

export const CreateRecipeForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<z.infer<typeof Tag>[]>();
  const SymbolsOfAllergiesRoot = `https://res.cloudinary.com/dcfwqisy1/image/upload/${process.env.CLOUDINARY_UPLOAD_FOLDER}/SymbolsOfAllergies`;

  const form = useForm<z.infer<typeof RecipeSchema>>({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      userId: useCurrentUser()?.id,
      illustrationImage: "",
      name: "",
      preparationTime: "00:00",
      tags: [],
      description: "",
      ingredients: [{ name: "", amount: 0, unit: "GRAM" }], // TODO: add shadcn-ui table & popover
      preparationMethod: "",
      comments: "",
      yield: 0,
      allergens: [],
      // TODO: Gave option that let the user choose who can see that recipe
      isPrivate: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ingredients",
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
    form.setValue("illustrationImage", newImageUrl);
  };

  // Fetch all tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { message: tags } = await api.get("/r/tags");
        setAllTags(tags as any);
      } catch (error: any) {
        const translateMessage = await translateApiMessage.getAllTags(
          error.message
        );
        setError(translateMessage);
      }
    };
    fetchTags();
  }, []);

  const handleAllergenChange = (allergen: string) => (checked: boolean) => {
    const allergens = form.getValues("allergens") || [];
    const updatedAllergens = checked
      ? [...allergens, allergen]
      : allergens.filter((a) => a !== allergen);
    form.setValue("allergens", updatedAllergens as any);
  };

  const onSubmit = (values: z.infer<typeof RecipeSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      try {
        const { message } = await api.post("/r/create", values);
        const translateMessage = await translateApiMessage.newRecipe(message);
        setSuccess(translateMessage);
      } catch (error: any) {
        const translateMessage = await translateApiMessage.newRecipe(
          error.message
        );
        setError(translateMessage);
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <p className="text-2xl font-semibold text-center">יצירת מתכון</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-row gap-4">
              <div className="space-y-4 justify-evenly">
                <div
                  className="relative border-2 w-full h-32 flex cursor-pointer bg-slate-400 rounded-b-lg"
                  onClick={handleSelectImage}
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    disabled={isPending}
                    onChange={handleImageUpload}
                  />
                  {!imageUrl ? (
                    <div className="w-full flex flex-col justify-center items-center">
                      <MdImageSearch
                        className="text-slate-600 opacity-25"
                        size={96}
                      />
                      <span className="text-lg text-slate-300">בחר תמונה</span>
                    </div>
                  ) : (
                    <FormField
                      control={form.control}
                      name="illustrationImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Image
                              src={imageUrl}
                              alt="תמונת מתכון"
                              fill
                              className="rounded-b-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>שם המתכון</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="סופלה"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preparationTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>זמן הכנה</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isPending} type="time" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>תיאור</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="המאכל הלבנוני המסורתי עם טוויסט מיוחד של זרעי צנובר וכורכום"
                          className="resize-none"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span>מצרכים:</span>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex flex-row gap-4 flex-wrap">
                    <FormField
                      control={form.control}
                      name={`ingredients[${index}].name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>שם המצרך</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder="שם המצרך"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`ingredients[${index}].amount`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>כמות</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder="3"
                              type="number"
                              min="1"
                              max="1000"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`ingredients[${index}].unit`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>יחידת משקל</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={"GRAM"}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="סוג יחידה" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="GRAM">גרם</SelectItem>
                              <SelectItem value="LITER">ליטר</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      variant={"delete"}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      X
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={(value) =>
                    append({
                      name: "",
                      amount: 0,
                      unit: "GRAM",
                    })
                  }
                  className="w-full"
                  disabled={isPending}
                >
                  הוסף מצרך
                </Button>
                <FormField
                  control={form.control}
                  name="preparationMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>אופן הכנה</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={`1.   מחממים   תנור   ל-180   מעלות   צלזיוס   ומשמנים   תבנית   בשמן.
                          2.   מערבבים   את   כל   המצרכים   בקערה   גדולה   עד   שהם   מתמזגים   לתערובת   אחידה.
                          3.   מעבירים   את   התערובת   לתבנית   ומפזרים...`}
                          className="resize-none"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>הערות</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={`1. ניתן להוסיף קמח קוקוס לתערובת כדי לתת טעם נוסף וטקסטורה מעניינת.
                          2. אם נדרש, ניתן להוסיף כפית וחצי חרדל חריף לתערובת כדי להוסיף פיקנטיות...`}
                          className="resize-none"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yield"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>כמות הגשה</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="5"
                          type="number"
                          min="1"
                          max="1000"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h4 className="">אלרגיות:</h4>
                <div className="flex flex-row gap-4 flex-wrap justify-center">
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#1481ba]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/milk.svg`}
                              alt="חלב"
                            />
                            <AvatarFallback>ח</AvatarFallback>
                          </Avatar>
                          <span className="text-[#1481ba]">חלב</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("milk")}
                            onCheckedChange={handleAllergenChange("milk")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#6fd6b8]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/nuts.svg`}
                              alt="אגוזים"
                            />
                            <AvatarFallback>א</AvatarFallback>
                          </Avatar>
                          <span className="text-[#6fd6b8]">אגוזים</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("nuts")}
                            onCheckedChange={handleAllergenChange("nuts")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#e4963b]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/peanuts.svg`}
                              alt="בוטנים"
                            />
                            <AvatarFallback>בו</AvatarFallback>
                          </Avatar>
                          <span className="text-[#e4963b]">בוטנים</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("peanuts")}
                            onCheckedChange={handleAllergenChange("peanuts")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#0e607f]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/fish.svg`}
                              alt="דגים"
                            />
                            <AvatarFallback>ד</AvatarFallback>
                          </Avatar>
                          <span className="text-[#0e607f]">דגים</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("fish")}
                            onCheckedChange={handleAllergenChange("fish")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#8e76da]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/eggs.svg`}
                              alt="ביצים"
                            />
                            <AvatarFallback>בי</AvatarFallback>
                          </Avatar>
                          <span className="text-[#8e76da]">ביצים</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("eggs")}
                            onCheckedChange={handleAllergenChange("eggs")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#f3d219]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/sesame.svg`}
                              alt="שומשום"
                            />
                            <AvatarFallback>ש</AvatarFallback>
                          </Avatar>
                          <span className="text-[#f3d219]">שומשום</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("sesame")}
                            onCheckedChange={handleAllergenChange("sesame")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#42bc70]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/soy.svg`}
                              alt="סויה"
                            />
                            <AvatarFallback>ס</AvatarFallback>
                          </Avatar>
                          <span className="text-[#42bc70]">סויה</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("soy")}
                            onCheckedChange={handleAllergenChange("soy")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergens"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-fit items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                        <FormLabel>
                          <Avatar className="border border-[#a1d057]">
                            <AvatarImage
                              src={`${SymbolsOfAllergiesRoot}/wheat.svg`}
                              alt="גלוטן"
                            />
                            <AvatarFallback>ג</AvatarFallback>
                          </Avatar>
                          <span className="text-[#a1d057]">גלוטן</span>
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value?.includes("wheat")}
                            onCheckedChange={handleAllergenChange("wheat")}
                            disabled={isPending}
                            dir="ltr"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="isPrivate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center text-center justify-between rounded-lg border p-3 shadow-sm bg-slate-400 ">
                      <FormLabel>מתכון פרטי</FormLabel>
                      <FormDescription>
                        האם המתכון צריך להיות פרטי ולא נראה לכל המשתמשים?
                      </FormDescription>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={isPending}
                          dir="ltr"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>קטגוריות</FormLabel>
                      <FormControl>
                        <DataTable
                          columns={columns}
                          data={allTags as any}
                          setSelectedTags={(selectedTags: string[]) =>
                            form.setValue(
                              "tags",
                              selectedTags as [string, ...string[]]
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              צור מתכון
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
