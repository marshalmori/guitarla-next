import Link from "next/link";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Marshal in Next</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
