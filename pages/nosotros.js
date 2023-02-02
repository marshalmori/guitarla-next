import Layout from "@/components/layout";
import Link from "next/link";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <div>nosotros</div>
      <Link href="/">Home</Link>
    </Layout>
  );
}
