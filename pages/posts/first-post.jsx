import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./first-post.module.scss";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Page</h1>
      <div className={styles.heading}>This is My Name</div>
      <h2>
        <Link href="/">Home Page</Link>
      </h2>
    </Layout>
  );
}
