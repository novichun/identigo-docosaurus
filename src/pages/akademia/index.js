import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function AkademiaPage() {
  return (
    <Layout title="Akadémia" description="identiGO Akadémia főoldal">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>identiGO Akadémia</h1>

          <p className="lead">
            Képzések, miniworkshopok és esettanulmányok egy helyen. Az oldal a végleges programstruktúra vázát
            tartalmazza.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Tananyagok</h3>
              <p>Rendszeres, frissített szakmai anyagok.</p>
            </div>
            <div className="feature-card">
              <h3>Workshopok</h3>
              <p>Élő, interaktív alkalmak gyakorlati fókuszban.</p>
            </div>
            <div className="feature-card">
              <h3>Közösségi Q&amp;A</h3>
              <p>Kérdések és válaszok valós esetekből.</p>
            </div>
          </div>

          <Link className="button button--primary button--lg" to="/akademia/esemenyek">
            Események megtekintése
          </Link>
        </div>
      </main>
    </Layout>
  );
}
