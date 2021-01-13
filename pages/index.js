import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Button from "../components//Button/index";
import GitHub from "../components/Icons/GitHub";
import styles from "../styles/Home.module.css";
import Logo from "../components/Icons/Logo";
import useUser, { USER_STATES } from "../hooks/useUser";
import Layout from "../components/Layout/index";

import { loginWithFacebook } from "../firebase/client";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  const handleClick = () => {
    loginWithFacebook()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Coffee-Time</title>
          <link rel="icon" href="/coffee-time.png" />
        </Head>

        <section className={styles.section}>
          <Logo width={150} height={150} />
          <h1>Coffee Time</h1>
          <h2>Have a good time</h2>
          <div className={styles.btn}>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with Facebook
              </Button>
            )}
          </div>
        </section>
      </Layout>
    </div>
  );
}
