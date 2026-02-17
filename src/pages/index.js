import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import clsx from 'clsx';
import styles from './index.module.css';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Kezdőlap`}
      description="identiGO - Biztonságos és egyszerű identitáskezelés megoldások vállalkozásoknak.">
        {/* main page content */}
        
    </Layout>
  );
}
