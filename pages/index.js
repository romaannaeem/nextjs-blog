// Next.js is server-side rendered, meaning it generates HTML and then sends that to the browser
// The generated HTML is then hydrated once the JS loads, but it will still display the HTML and CSS without JS loading, unlike Create React App

// You can also choose to statically generate the HTML instead of using SSR. You would do this because the browser can cache this data, or it can be served through a CDN

// This file is the entry point into our app

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// ? getStaticProps notes
// 1. Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
// 2. getStaticProps only ever runs on the server side.
// 3. In development, getStaticProps will run on every request. In prod, it will only run at build time
// 4. getStaticProps can only be exported from a page. You can’t export it from non-page files.
// 5. Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request.
// 6. In cases like this, you can try Server-side Rendering or skip pre-rendering.

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); // Basically an API request, we just made the request to a local file for the purpose of this app
  return {
    props: {
      allPostsData, // feeds allPostsData to component as props
    },
  };
}

// ! To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
