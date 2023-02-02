import Link from "next/link";

import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className="contenedor">
        <nav className="navegacion">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p>Todos os direitos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
