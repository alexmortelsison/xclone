"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import News from "./News";

export default function RightSidebar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
      <div className="sticky top-0 py-2">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-100 rounded-full"
          />
        </form>
      </div>
      <News />
    </>
  );
}
