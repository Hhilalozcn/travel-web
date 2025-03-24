import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>New Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
