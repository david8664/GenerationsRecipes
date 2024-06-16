import { useForm } from "react-hook-form";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import FormError from "@/components/form-error";
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
}

const IngredientCreation = ({
  ingredients,
  setIngredients,
}: IngredientCreationProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [amountOpen, setAmountOpen] = useState(false);

  const form = useForm<z.infer<typeof IngredientSchema>>({
    resolver: zodResolver(IngredientSchema),
    defaultValues: {
      name: "",
      amount: "",
      unit: "גרם",
    },
  });

  const generateOptionsForAmount = (amount: string): string[] => {
    const ingredientUnit = form.getValues("unit");
    let result = [];
    if (
      ingredientUnit === "כוס" ||
      ingredientUnit === "כף" ||
      ingredientUnit === "כפית"
    ) {
      const baseFractions = [
        "1/10",
        "1/9",
        "1/8",
        "1/7",
        "1/6",
        "1/5",
        "1/4",
        "1/3",
        "1/2",
        "2/5",
        "2/3",
        "3/8",
        "3/5",
        "3/4",
        "4/5",
        "5/8",
        "5/6",
        "7/8",
      ];
      const isNumberAndEndsWithSpace = /^\d+\s$/.test(amount);
      result.push(amount);
      baseFractions.forEach((fraction) => {
        if (isNumberAndEndsWithSpace) {
          result.push(`${amount} ו-${fraction}`);
        } else if (fraction.includes(amount) && amount !== fraction) {
          result.push(fraction);
        }
      });
    }

    return result;
  };

  const onSubmit = (data: z.infer<typeof IngredientSchema>) => {
    if (
      ingredients().some((ingredient) => ingredient.name.includes(data.name))
    ) {
      setError("מצרך זה כבר קיים!");
    } else {
      setIngredients(data);
    }
    form.reset({
      ...data,
      name: "",
      amount: "",
    });
    form.resetField("unit");
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
                <Input
                  {...field}
                  type="text"
                  className="rounded-full border-b-black focus-visible:ring-0 focus-visible:border-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>כמות</FormLabel>
              <Popover open={amountOpen} onOpenChange={setAmountOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value || "בחירת כמות"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="בחירת כמות"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        form.setValue("amount", target.value);
                      }}
                    />
                    <CommandList>
                      <CommandGroup
                        className="cursor-pointer hover:bg-gray-300 text-black font-bold rounded"
                        dir="center"
                      >
                        {generateOptionsForAmount(field.value).map(
                          (option, index) => (
                            <CommandItem
                              value={option}
                              key={index}
                              onSelect={() => {
                                form.setValue("amount", option);
                                setAmountOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  option === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {option}
                            </CommandItem>
                          )
                        )}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="גרם" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  dir="center"
                  className="cursor-pointer hover:bg-gray-300 text-black font-bold rounded"
                >
                  <SelectItem value="כוס">כוס</SelectItem>
                  <SelectItem value="כף">כף</SelectItem>
                  <SelectItem value="כפית">כפית</SelectItem>
                  <SelectItem value="קורט">קורט</SelectItem>
                  <SelectItem value="גרם">גרם</SelectItem>
                  <SelectItem value={`ק"ג`}>ק"ג</SelectItem>
                  <SelectItem value={`מ"ל`}>מ"ל</SelectItem>
                  <SelectItem value="ליטר">ליטר</SelectItem>
                  <SelectItem value="אינץ'">אינץ'</SelectItem>
                  <SelectItem value={`ס"מ`}>ס"מ</SelectItem>
                  <SelectItem value={`מ"מ`}>מ"מ</SelectItem>
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
        >
          הוסף
        </Button>
      </form>
      <FormError message={error} />
    </Form>
  );
};
export default IngredientCreation;
