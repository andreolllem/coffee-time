import React from "react";
import styles from "styles/CoffeePage.module.css";
import Coffee from "../../components/Cofffee";
import { firestore } from "firebase/admin";
import Link from "next/link";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import AvatarHeader from "../../components/Avatar/AvatarHeader";

export default function CoffeePage(props) {
  const router = useRouter();
  const user = useUser();

  if (router.isFallback) return <h1>Cargando...</h1>;

  return (
    <>
      <header className={styles.header}>
        {user && (
          <div className={styles.avatar}>
            <AvatarHeader src={user.avatar} />
          </div>
        )}
        <Link href={"/"}>
          <a>
            <h2>Inicio</h2>
          </a>
        </Link>
      </header>
      <section>
        <Coffee {...props} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "uL6DILWzSgdH6Bsmom3F" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection("coffees")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}
