import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <Layout title="Página não encotrada">
      <p className="error">Página não encontrada</p>
      <Link className="error-enlace" href="/">
        Voltar para a Home
      </Link>
    </Layout>
  );
}
