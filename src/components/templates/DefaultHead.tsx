import Head from 'next/head';
import { APP_NAME, META } from '@/constants/appSettings';

const DefaultHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
      />
      <title>{APP_NAME}</title>
      <meta name="description" content={META.DEFAULT_DESCRIPTION} />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
};

export default DefaultHead;
