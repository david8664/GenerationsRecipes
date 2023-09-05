"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div>
      <p>{error}</p>
      <button onClick={() => reset()}>Refresh</button>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
};

export default Error;
