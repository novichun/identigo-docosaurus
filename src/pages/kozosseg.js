import React from 'react';
import Layout from '@theme/Layout';

export default function KozossegPage() {
  return (
    <Layout title="Közösség" description="identiGO szakmai közösség és csapat">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>Szakmai közösség</h1>

          <p className="lead">
            Csatlakozz az identiGO szakmai közösségéhez, ahol gyakorlati tippek, esettanulmányok és heti
            kérdezz-felelek anyagok jelennek meg.
          </p>

          <a
            className="button button--primary button--lg"
            href="https://forms.gle/example-identigo-facebook"
            target="_blank"
            rel="noreferrer">
            Facebook közösség jelentkezési űrlap
          </a>

          <h2>Judit és Zsuzsa</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Judit</h3>
              <p>Szabályozási szakértő, aki a napi működésre fordítható, gyakorlatias AML mintákat hoz.</p>
            </div>
            <div className="feature-card">
              <h3>Zsuzsa</h3>
              <p>Ügyfélélmény-fókuszú mentor, aki az adminisztráció egyszerűsítésében segíti a csapatokat.</p>
            </div>
          </div>

          <h2>Munkatársak</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <strong>Customer Success</strong>
              <p>Onboarding és folyamat-támogatás.</p>
            </div>
            <div className="feature-card">
              <strong>Termék</strong>
              <p>Folyamatos fejlesztés, visszajelzés-vezérelt roadmap.</p>
            </div>
            <div className="feature-card">
              <strong>Support</strong>
              <p>Gyors válaszidő, hétköznapi operatív segítség.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
