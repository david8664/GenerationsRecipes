"use client";

import * as z from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Tag = z.object({
  id: z.string(),
  name: z.string(),
});

export const columns: ColumnDef<typeof Tag>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            type="button"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            שם
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="text-right">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="בחר הכול"
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="בחר שורה"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
