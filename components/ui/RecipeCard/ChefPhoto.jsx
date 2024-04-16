import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChefPhoto({ userId, img }) {
  // add chef photo
  return (
    <Link href={`/p/${userId}`}>
      <Image
        src={img}
        width={50}
        height={50}
        alt={"chef profile"}
        className="rounded-full z-10 top-2 left-2 object-cover aspect-square"
      />
    </Link>
  );
}
