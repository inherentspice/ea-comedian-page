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

export default function Layout({ children, home, about, contact, video, live }) {
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
            value={{ className: `${styles.hamburger}`, size: "50px" }}
          >
            {menuOpen ? <CgCloseO /> : <GiHamburgerMenu />}
          </IconContext.Provider>
          </div>
          <div className={styles.menuNavCont}>
            <ul className={`${styles.menu} ${styles.navMenu} ${!menuOpen && styles.closedNav}`}>
              {!home && <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Home"
                  href="/"
                >HOME</Link>
              </li>}
              {!about && <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - About page"
                  href="/about"
                >ABOUT</Link>
              </li>}
              {!live && <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Live page"
                  href="/live"
                >LIVE</Link>
              </li>}
              {!video && <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Video page"
                  href="/video"
                >VIDEO</Link>
              </li>}
              {!contact && <li className={styles.menuItem}>
                <Link
                  title="Eric Alexander - Contact page"
                  href="/contact"
                >CONTACT</Link>
              </li>}
            </ul>
          </div>
        </nav>
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
        {/* <div className={styles.siteTitle}>
          {home && <Link
            title="Eric Alexander - Home Page"
            href="/"
          >
            <Image
              priority
              src="/images/profile.png"
              height={100}
              width={700}
              alt=""
              className={utilStyles.heading2Xl}
            />
          </Link>}
        </div> */}
        <div className={styles.socialMedia}>
          <Link href="https://www.instagram.com/interestedinbread/" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "100px" }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.youtube.com/@interestedinbread3634" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "100px" }}
            >
              <FaYoutube />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.tiktok.com/@interestedinbread" target="_blank">
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "100px" }}
            >
              <FaTiktok />
            </IconContext.Provider>
          </Link>
        </div>
      </header>
      <main className={home ? styles.mainContHome : styles.mainCont}>{children}</main>
    </div>
  );
}
