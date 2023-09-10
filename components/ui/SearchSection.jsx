"use client";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const searchBy = e.target.search.value;
    try {
      router.push(`/search?searchby=${searchBy}`);
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };

  return (
    <ul className=" p-2">
      <li className="flex justify-center gap-2 flex-col md:flex-row flex-wrap">
        <SearchBar submit={submit} />
      </li>
    </ul>
  );
}
