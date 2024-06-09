// "use client";

// import React, { useRef, useState, useTransition, useEffect } from "react";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { MdImageSearch } from "react-icons/md";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import useCurrentUser from "@/hooks/use-current-user";
// import { IngredientSchema, RecipeSchema } from "@/schemas";
// import FormError from "@/components/form-error";
// import FormSuccess from "@/components/form-success";
// import readFileAsBase64 from "@/Functions/utils/readFileAsBase64";
// import { createWorker } from "tesseract.js";


// const CreateRecipeFormByScan = () => {
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isPending, startTransition] = useTransition();
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
  
//   const worker = createWorker({
//     logger: (m) => console.log(m), // Optional: Add logging
//   });
  
//   async function initializeTesseract() {
//     await worker.load();
//     await worker.loadLanguage("heb"); // Load Hebrew language model
//     await worker.initialize("heb");
//   }
  
//   initializeTesseract().catch((err) => console.error(err));
  
//   const ImageScanSchema = z.object({
//     image: z.string(),
//   });

//   const form = useForm<{ image: string }>({
//     resolver: zodResolver(ImageScanSchema),
//     defaultValues: {
//       image: "",
//     },
//   });

//   const handleSelectImage = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Convert the file to Base64
//     const base64 = await readFileAsBase64(file);

//     // Recognize text from the image
//     const {
//       data: { text },
//     } = await worker.recognize(base64, {
//       logger: (m) => console.log(m),
//       psm: 6, // Set Page Segmentation Mode to assume a single block of text
//       oem: 3, // Set OCR Engine Mode to LSTM only
//     });

//     console.log(text); // Log the recognized text

//     // Optionally, update your component's state with the recognized text
//     // setText(text); // Assuming you have a state variable named setText
//   };

//   useEffect(() => {
//     return () => {
//       worker.terminate();
//     };
//   }, []);

//   const onSubmit = (values: z.infer<typeof ImageScanSchema>) => {
//     setError("");
//     setSuccess("");
//     startTransition(async () => {
//       try {
//         setSuccess("הצלחנו לזהות את המתכון. נא לוודאות שהכול תקין!");
//       } catch (error: any) {
//         setError("לא הצלחנו לעבד את בקשתך");
//       }
//     });
//   };

//   return (
//     <Card className="flex flex-col flex-wrap items-center">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">יצירת מתכון</p>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <div
//               className="relative border-2 w-full h-32 flex cursor-pointer bg-slate-400 rounded-b-lg"
//               onClick={handleSelectImage}
//             >
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 ref={fileInputRef}
//                 disabled={isPending}
//                 onChange={handleImageUpload}
//               />
//               {!imageUrl ? (
//                 <div className="w-full flex flex-col justify-center items-center">
//                   <MdImageSearch
//                     className="text-slate-600 opacity-25"
//                     size={96}
//                   />
//                   <span className="text-lg text-slate-300">בחר תמונה</span>
//                 </div>
//               ) : (
//                 <FormField
//                   control={form.control}
//                   name="image"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Image
//                           src={imageUrl}
//                           alt="תמונת מתכון"
//                           fill
//                           className="rounded-b-lg"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               )}
//             </div>
//             <FormError message={error} />
//             <FormSuccess message={success} />
//             <Button type="submit" className="w-full" disabled={isPending}>
//               צור מתכון
//             </Button>
//             <div>{recognizedText}</div>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };
// export default CreateRecipeFormByScan;
