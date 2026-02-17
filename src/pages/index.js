import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.buttonLink)}
            to="/docs/tartalomjegyzek">
            Ismerd meg az identiGO-t 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Kezdőlap`}
      description="identiGO - Biztonságos és egyszerű identitáskezelés megoldások vállalkozásoknak.">
      <HomepageHeader />
      <main>
        <section className="mx-auto max-w-5xl px-4 py-6">
          <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-900">
            Tailwind CSS tesztblokk: utility class-ek aktívak.
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
