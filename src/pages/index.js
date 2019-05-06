import React from "react";
import Layout from '../components/layout';
import SideBar from '../components/sidebar';
import AboutPage from '../pages/about';
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SideBar/>
    <AboutPage/>
    <Helmet>
        <title>About - Kitika</title>
        <meta charSet="utf-8" />
    </Helmet>
  </Layout>
)

export default IndexPage
