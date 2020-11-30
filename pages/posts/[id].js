// Naming this file '[...id].js' would make this a catch-all route - https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes

import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Specify dynamic routes to pre-render based on data.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    // If fallback is true, Next.js will serve a fallback version of the page instead of a 404
    // ? Fallback documentation: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

// Fetch data at build time.
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// * For more getStaticProps/getStaticPaths example, see bottom of this page - https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
