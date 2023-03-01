import Layout from "@/components/layout";
import Link from "next/link";
import styles from "@/styles/live.module.css";
import utilStyles from "@/styles/utils.module.css";

export default function Live() {
  return (
    <Layout live>
      <div className={utilStyles.container}>
        <div className={styles.liveCont}>
          <h2>UPCOMING LIVE SHOWS</h2>
          <ul className={styles.latestGigs}>
            <li className={styles.singleGig}>
              <span className={styles.eventDate}>
                03 Mar
              </span>
              <div className={styles.location}>
                <span className={styles.venueTown}>Shanghai</span>
                <p className={styles.venueName}>Spicy Comedy</p>
              </div>
              <Link className={styles.ticketPortal} href="https://www.smartshanghai.com/event/72444">Buy Tickets</Link>
            </li>
            <li className={styles.singleGig}>
              <span className={styles.eventDate}>
                05 Mar
              </span>
              <div className={styles.location}>
                <span className={styles.venueTown}>Shanghai</span>
                <p className={styles.venueName}>Park Tavern</p>
              </div>
              <Link className={styles.ticketPortal} href="/">Buy Tickets</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
