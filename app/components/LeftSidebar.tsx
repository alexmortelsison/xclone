import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href={"/"}>
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3" />
      </Link>
      <Link href={"/"} className="flex items-center p-3 gap-2 w-fit">
        <HiHome className="w-7 h-7" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <Button>Sign in</Button>
    </div>
  );
}
