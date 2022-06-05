import type { NextPage } from 'next';
import { Login } from '../components/05-pages/Login/Login';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clone Login Twitter</title>
        <meta name="description" content="It's a Twitter login clone."/>
      </Head>
      <Login />
    </>
  );
};

export default Home;
