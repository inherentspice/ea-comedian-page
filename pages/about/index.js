import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.aboutCont}>
          <h2>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Nulla hendrerit fringilla orci, at pretium mi eleifend tristique.
          </p>
          <p>
            Donec iaculis consectetur venenatis. Vivamus felis magna, efficitur ullamcorper elit sed, finibus mollis nunc. Integer vitae ultricies tellus, nec accumsan ipsum. Sed vel finibus leo. Mauris id dapibus odio. Etiam eget urna malesuada, sollicitudin erat nec, facilisis eros. Donec in nunc et ipsum elementum blandit sit amet a est. Ut interdum arcu lorem, id dapibus dolor fringilla eu.
          </p>
          <p>
            Fusce eget luctus eros. Curabitur sed metus sit amet felis fringilla egestas et sit amet lorem.
          </p>
          <p>
            In eget sodales magna, et aliquam justo. Suspendisse luctus augue et blandit auctor. Vestibulum at commodo sem, et cursus enim. Mauris et ligula ac turpis dapibus venenatis. Duis sagittis dignissim orci, sit amet ultricies lorem ultricies non. Curabitur id augue vestibulum, eleifend ante ut, tristique ipsum. Ut porttitor odio cursus sapien condimentum, et aliquet nibh posuere. Integer quis augue nec magna sagittis faucibus sed sed ante. Phasellus sed mauris egestas, venenatis nisi ac, sagittis justo.
          </p>
          <p>
            Suspendisse vel nisl bibendum, laoreet dui sit amet, cursus nisi.
          </p>
        </div>
      </div>
    </Layout>
  );
}
