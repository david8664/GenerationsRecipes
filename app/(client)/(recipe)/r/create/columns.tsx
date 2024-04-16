"use client";

import * as z from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

const hebrewRegex = /^[\u0590-\u05FF\s]+$/;

export const Tag = z.object({
  id: z.string(),
  name: z.string().regex(hebrewRegex, { message: "שם קטגוריה לא חוקי" }),
  isActive: z.boolean(),
});

export const columns: ColumnDef<typeof Tag>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-right">שם</div>,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="בחר הכול"
        className="text-right"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="בחירת שורה"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
