import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  searchInput: z.string().trim().min(1, {
    message: "נא להכניס ערך",
  }),
});

export function SearchBar() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchInput: "",
    },
  });

  const router = useRouter();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/search?search=${data.searchInput}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row gap-4"
      >
        <FormField
          control={form.control}
          name="searchInput"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="חיפוש..."
                  {...field}
                  className="border border-black rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="rounded-full -mx-12">
          🍳
        </button>
      </form>
    </Form>
  );
}
