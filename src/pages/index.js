import React from "react";
import Layout from '../components/layout';
import SideBar from '../components/sidebar';
import AboutPage from '../pages/about';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SideBar/>
    <AboutPage/>
    <SEO/>
  </Layout>
)

export default IndexPage
