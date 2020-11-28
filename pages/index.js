// Entry point into our app

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm Romaan, a software developer. Reach out to me on{' '}
          <a href="https://twitter.com/romaanster">Twitter</a>, or check out my{' '}
          <a href="https://github.com/romaannaeem">GitHub</a>!
        </p>
      </section>
    </Layout>
  );
}
