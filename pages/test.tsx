import { useRouter } from 'next/router';
import React from 'react';

interface Props {}

const Detail: React.FunctionComponent<Props> = () => {
  const router = useRouter();
  console.log(router.query)
  return <div>
    Detail
    <div>b: {router.query.b}</div>
  </div>;
};

export default Detail;

export const getServerSideProps = async () => {
  return { props: {} };
}