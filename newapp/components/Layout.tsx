/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="stylesheet" href="../assets/fonts/aquire/stylesheet.css" type="text/css" charSet="utf-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0" />
      <meta name="theme-color" content="#00bfdf" />
      <meta name="description" content="Welcome to I See Me! Please browse our award-winning selection of personalized children's books &amp; gifts that will show your child how special they are! Order today!" />
      <meta name="keywords" content="I see me books, personalized baby gifts, personalized books for kids, personalized baby books, personalized childrens books, personalized children's books, personalized children's book, personalized baby gift, new baby gift, unique gift, personalized baby book" />
      <meta name="robots" content="INDEX,FOLLOW" />

      <title>Personalized Children’s Books &amp; Gifts | I See Me!</title>

      <link rel="icon" href="https://cdn-store.iseeme.com/skin/frontend/polar/default/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="https://cdn-store.iseeme.com/skin/frontend/polar/default/favicon.ico" type="image/x-icon" />

      <script type="text/javascript" src="https://cdn-store.iseeme.com/media/js/3eadf1b6f3495338355d6a8a7e76cf6d.1569506732.js" />
      <link rel="stylesheet" type="text/css" href="https://cdn-store.iseeme.com/media/css_secure/c285f91864fbfc7613a900034a4e2184.1636057530.css" media="all" />
      <link rel="stylesheet" type="text/css" href="https://cdn-store.iseeme.com/media/css_secure/59f10803d9cb78c51fe0c65f6121f099.1569506732.css" media="print" />
      <script type="text/javascript" src="https://cdn-store.iseeme.com/media/js/e6a401f08c9c7742d4ceb01f55ba0036.1636057530.js"></script>
      <link rel="canonical" href="https://www.iseeme.com/en-us/" />
      {/*[if lt IE 7]>
          
          <![endif]*/}
      {/**/}
      <style dangerouslySetInnerHTML={{ __html: "\n        .cms-home .slider .slide.announcement .show-for-medium-up img {\n            width: 100%;\n        }\n    " }} />
      <link rel="stylesheet" type="text/css" href="https://cdn-store.iseeme.com/media/css_secure/72abfde4adeb81bda7cc27419ccee1aa.1576078120.css" media="all" />
      <meta name="google-site-verification" content="G7WNSUNxmnKit2iIpE3BDSoJlTC8LADAj2NU-U-csA8" />
      <meta name="google-site-verification" content="h4B2S7LrymNlQ4YDKdab9-AvFXm2pPc9UWRSDMCIgxM" />
      <meta name="google-site-verification" content="XZ8DhJPDf1p6dfHaLvlJt_JNuhH6fAzzVicUcnKY9Jc" />
      <meta name="msvalidate.01" content="9CEC3795F3B683FB92B471C022DC29EA" />
      <meta name="theme-color" content="#ee9d18" />
      {/* Start Visual Website Optimizer Code */}
      {/* End Visual Website Optimizer Code */}
      {/* recaptcha script */}
      <link rel="stylesheet" href="https://cdn-store.iseeme.com/skin/frontend/polar/default/css/components/pages/home.css" />


    </Head>
  

<body className=" cms-index-index cms-home">
<Header />
      <main>{children}</main>
      <Footer />
</body>


   
  </>
)

export default Layout
