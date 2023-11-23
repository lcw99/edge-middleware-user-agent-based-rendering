import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head'

interface Props {}

const Detail: React.FunctionComponent<Props> = () => {
  const router = useRouter();
  console.log(router.query)
  return <>
    <Head>
      <title>{`${false ? "Admin Title" : "test1"}`}</title>
      <meta name="description" content={`${false ? "Admin Content" : "test2"}`} />
      <meta property="og:title" content="새로운선택"/>
      <meta property="og:description" content="새로운선택"/>
      <meta property="og:image" content="https://newparty.kr/icons/newparty.jpg"/>
      <meta property="og:type" content="website"/>
    </Head>
    bot test
    <div>b: {router.query.md}</div>
  </>;
};

export default Detail;

export const getServerSideProps = async () => {
  return { props: {} };
}