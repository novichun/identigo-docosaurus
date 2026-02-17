import React from 'react';
import Layout from '@theme/Layout';

export default function EbookPage() {
  return (
    <Layout title="E-book" description="Ingyenes e-book oldal">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>E-book</h1>

          <p className="lead">
            Rövid, ütős összefoglaló arról, hogyan lehet az ügyfél-átvilágítási folyamatot egyszerűen és
            következetesen kezelni.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Mit kapsz?</h3>
              <p>Konkrét lépések, sablonok és ellenőrzőlista.</p>
            </div>
            <div className="feature-card">
              <h3>Kinek hasznos?</h3>
              <p>Könyvelőknek, irodáknak és compliance felelősöknek.</p>
            </div>
          </div>

          <div className="cta-panel">
            <h3>Gyors hozzáférés</h3>
            <a className="button button--secondary button--lg" href="#">
              Kérem a könyvet
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
