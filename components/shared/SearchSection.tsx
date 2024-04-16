"use client";
import SearchBar from "../SearchBar";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name =  (e.target as HTMLFormElement).search.value;
    try {
      router.push(`/search?name=${name}`);
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
