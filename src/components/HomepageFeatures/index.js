import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gyors Integráció',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Az identiGO segítségével percek alatt integrálhatod a modern
        azonosítási megoldásokat alkalmazásodba.
      </>
    ),
  },
  {
    title: 'Biztonság az Első',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A legújabb iparági szabványoknak (OIDC, OAuth2) megfelelve
        garantáljuk felhasználóid adatainak védelmét.
      </>
    ),
  },
  {
    title: 'Testreszabható Felület',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Alakítsd a bejelentkezési folyamatot a saját márkád arculatára
        egyszerűen és rugalmasan.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', 'padding-vert--md')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
