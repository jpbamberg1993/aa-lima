import Image from "next/image";
import { Toolbar } from "@/components/toolbar"

export default function Home() {
  return (
    <main className="px-8 py-4 container max-w-sm mx-auto">
      <Toolbar />
    </main>
  );
}
