import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';

export default function Home() {
  const youtubeID = "XtvRaaKjcfY";

  return (
    <Layout home>
      <div className={styles.homeCont}>
        <div className={styles.homeItemCont}>
          <h2>APPETIZER</h2>
          <Link href="/live">View Upcoming Dates &gt;</Link>
          <Image
            src="/images/stand.jpg"
            alt=""
            height={400}
            width={400}
            className={styles.homeImg}
          ></Image>
        </div>
        <div className={styles.homeItemCont}>
          <h2>MAIN COURSE</h2>
          <Link href="/video">See More Videos &gt;</Link>
          <iframe
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
          </iframe>
        </div>
      </div>
    </Layout>
  )
}
