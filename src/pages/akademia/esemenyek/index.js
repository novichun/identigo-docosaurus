import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function AkademiaEsemenyekPage() {
  return (
    <Layout title="Akadémia események" description="Eseménylista">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>Eseménylista</h1>

          <p className="lead">
            Itt jelennek meg az aktuális és közelgő események. A lista jelenleg dummy adatokkal működik.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Nyitó workshop</h3>
              <p>2026. március 12. | Online</p>
              <Link to="/akademia/esemenyek/nyito-workshop">Részletek</Link>
            </div>
            <div className="feature-card">
              <h3>Compliance mini masterclass</h3>
              <p>2026. április 03. | Budapest</p>
              <a href="#">Részletek hamarosan</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
