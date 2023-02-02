import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quibusdam aspernatur, nobis, suscipit odio totam
              perspiciatis facere voluptatibus sit numquam et in, unde aliquam?
              Error modi officia itaque facilis illum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Magni repellat eligendi
              cupiditate corporis, voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quibusdam aspernatur, nobis, suscipit odio totam
              perspiciatis facere voluptatibus sit numquam et in, unde aliquam?
              Error modi officia itaque facilis illum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Magni repellat eligendi
              cupiditate corporis, voluptates.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
