import React from 'react';
import Layout from '@theme/Layout';

export default function NyitoWorkshopPage() {
  return (
    <Layout title="Nyitó workshop" description="Esemény részletek és jelentkezés">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>Nyitó workshop</h1>

          <p className="lead">
            Részletes eseményoldal mintája: program, kinek szól, és jelentkezési lehetőség.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <strong>Dátum</strong>
              <p>2026. március 12.</p>
            </div>
            <div className="feature-card">
              <strong>Helyszín</strong>
              <p>Online (Zoom)</p>
            </div>
            <div className="feature-card">
              <strong>Időtartam</strong>
              <p>90 perc + kérdések</p>
            </div>
          </div>

          <div className="cta-panel">
            <h3>Jelentkezés az eseményre</h3>
            <form>
              <input type="text" name="name" placeholder="Név" required />
              <input type="email" name="email" placeholder="Email" required />
              <button type="submit">Jelentkezem</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
