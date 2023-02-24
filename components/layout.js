import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { IconContext } from 'react-icons';


export const siteTitle = 'Eric Alexander Comedy';

export default function Layout({ children, home }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Eric Alexander Comedy Page"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <nav className={styles.siteNav}>
          <div onClick={handleMenuClick}>
          <IconContext.Provider
            value={{ className: `${styles.reactIcons} ${styles.hamburger}`, size: "50px" }}
          >
            {menuOpen ? <CgCloseO /> : <GiHamburgerMenu />}
          </IconContext.Provider>
          </div>
          <div className={styles.menuNavCont}>
            <ul className={`${styles.menu} ${styles.navMenu} ${!menuOpen && styles.closedNav}`}>
              <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - About page"
                  href="/about"
                >ABOUT</Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Live page"
                  href="/live"
                >LIVE</Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Video page"
                  href="/video"
                >VIDEO</Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Contact page"
                  href="/contact"
                >CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.siteTitle}>
          {home && <Link
            title="Eric Alexander - Home Page"
            href="/"
          >
            <Image
              priority
              src="/images/title.png"
              height={100}
              width={700}
              alt=""
              className={utilStyles.heading2Xl}
            />
          </Link>}
        </div>
        <div className={styles.socialMedia}>
          <Link href="https://www.instagram.com/interestedinbread/" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "50px" }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.youtube.com/@interestedinbread3634" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "50px" }}
            >
              <FaYoutube />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.tiktok.com/@interestedinbread" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "50px" }}
            >
              <FaTiktok />
            </IconContext.Provider>
          </Link>
        </div>
        {home ? <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={350}
          width={250}
          alt=""
        /> :
        <Image
          src="/images/profile.png"
          alt=""
          className={styles.borderImg}
          width={600}
          height={800}
        />}
      </header>
      <main className={styles.mainCont}>{children}</main>
    </div>
  );
}
