"use client";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>משהו אינו כשורה</h2>
      <p>שגיאה: {error.toString()}</p>
      <button onClick={() => reset()}>נסה שוב</button>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
