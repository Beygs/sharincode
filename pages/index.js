import { useAtom } from "jotai";
import Head from "next/head";
import PostCard from "components/PostCard/PostCard";
import { showNewPostModalAtom } from "store";
import styles from "styles/Home.module.css";
import NewPostModal from "components/NewPostModal";

export default function Home() {
  const [showNewPostModal] = useAtom(showNewPostModalAtom);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | SnipShare</title>
        <meta name="description" content="SnipShare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showNewPostModal && <NewPostModal />}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <PostCard />
      </main>
    </div>
  );
}
