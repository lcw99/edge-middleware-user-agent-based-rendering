import { useRouter } from 'next/router';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {}

const Detail: React.FunctionComponent<Props> = () => {
  const router = useRouter();
  console.log(router.query)
  return <div>
    <Helmet>
      <title>{`${false ? "Admin Title" : "test1"}`}</title>
      <meta name="description" content={`${false ? "Admin Content" : "test2"}`} />
      <meta property="og:title" content="새로운선택"/>
      <meta property="og:description" content="새로운선택"/>
      <meta property="og:image" content="https://newparty.kr/icons/newparty.jpg"/>
      <meta property="og:type" content="website"/>
    </Helmet>
    bot test
    <div>b: {router.query.md}</div>
  </div>;
};

export default Detail;

export const getServerSideProps = async () => {
  return { props: {} };
}