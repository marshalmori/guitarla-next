import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Marshal in Next</h1>

      <Link href="/nosotros">Nosotros</Link>
    </>
  );
}
