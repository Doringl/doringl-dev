import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout title='Dashboard'>
      <Head>
        <title>Dashboard</title>
      </Head>
    </Layout>
  );
};

export default Dashboard;
