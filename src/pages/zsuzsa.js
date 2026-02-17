import React from 'react';
import Layout from '@theme/Layout';

export default function ZsuzsaPage() {
  return (
    <Layout title="Zsuzsa partner oldal" description="Partner promo landing minta">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>Zsuzsa ajánlja az identiGO-t</h1>

          <p className="lead">
            Ez a partner promo landing template minta egy konkrét slugon. Ugyanez a szerkezet más partner oldalakra
            (pl. <code>/anna</code>, <code>/peter</code>) is másolható.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Ki Zsuzsa?</h3>
              <p>20+ év tapasztalat pénzügyi folyamatok és ügyfélkezelés területén.</p>
            </div>
            <div className="feature-card">
              <h3>Miért szereti az identiGO-t?</h3>
              <p>Mert gyorsítja az adminisztrációt és láthatóvá teszi a napi teendőket.</p>
            </div>
          </div>

          <div className="cta-panel">
            <h3>Exkluzív partner ajánlat</h3>
            <a className="button button--secondary button--lg" href="#">
              Regisztrálj az identiGóra Zsuzsa promó kóddal
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
