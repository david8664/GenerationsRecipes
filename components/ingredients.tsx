import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import FormError from "@/components/form-error";
import translateApiMessage from "@/Functions/utils/translateApiMessage";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IngredientSchema } from "@/schemas";

type IngredientType = z.infer<typeof IngredientSchema>;

interface IngredientCreationProps {
  ingredients: () => IngredientType[];
  setIngredients: (newIngredient: IngredientType) => void;
  // (newIngredient: IngredientType) => void;
}

const IngredientCreation = ({
  ingredients,
  setIngredients,
}: IngredientCreationProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof IngredientSchema>>({
    resolver: zodResolver(IngredientSchema),
    defaultValues: {
      name: "",
      amount: 0,
      unit: "GRAM",
    },
  });

  // If I'll change my mind to use server for get ingredients, then I should use that
  // useEffect(() => {
  //   startTransition(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         const { message } = await api.get<string[]>("ingredientsServer");
  //         setIngredientsUnits(message);
  //       } catch (error: any) {
  //         setError(error.message);
  //       }
  //     };
  //     fetchCategories();
  //   });
  // }, []);

  const onSubmit = (data: z.infer<typeof IngredientSchema>) => {
    if (
      ingredients().some((ingredient) => ingredient.name.includes(data.name))
    ) {
      setError("מצרך זה כבר קיים!");
    } else {
      setIngredients(data);
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="flex flex-row flex-wrap gap-4">
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם המצרך</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} placeholder="שם המצרך" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"amount"}
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
          name={"unit"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>יחידת משקל</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"GRAM"}>
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
          type="button"
          onClick={form.handleSubmit(onSubmit)}
          className="w-full"
          disabled={isPending}
        >
          הוסף
        </Button>
      </form>
      <FormError message={error} />
    </Form>
  );
};
export default IngredientCreation;
