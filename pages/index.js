import { Inter } from "@next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout
        title={"Home"}
        description={"Blog de música, venta de guitarras y más"}
      >
        <h1>Home</h1>
      </Layout>
    </>
  );
}
