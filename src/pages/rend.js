import React from 'react';
import Layout from '@theme/Layout';

export default function RendPage() {
  return (
    <Layout title="Hogyan rakok rendet" description="Az identiGO rendrakó folyamata">
      <main className="container margin-vert--lg">
        <div className="marketing-page">
          <h1>Hogyan rakok rendet</h1>

          <p className="lead">
            Ez az oldal az identiGO jelenlegi mintájára épülő, egyszerű rendrakó keret. A végső szövegezés később
            pontosan cserélhető.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>1. Állapotfelmérés</h3>
              <p>Rövid audit a jelenlegi folyamatokról.</p>
            </div>
            <div className="feature-card">
              <h3>2. Prioritások</h3>
              <p>Mit kell azonnal rendezni és mi várhat.</p>
            </div>
            <div className="feature-card">
              <h3>3. Bevezetés</h3>
              <p>Fokozatos, csapatbarát átállás.</p>
            </div>
          </div>

          <div className="cta-panel">
            <h3>Kérem a rendrakó összefoglalót emailben</h3>
            <p>
              Ez az űrlap az aktuális feliratkozó blokk logikáját követő helyőrző: email + hozzájárulás + CTA.
            </p>
            <form>
              <input type="email" name="email" placeholder="Add meg az email címed" required />
              <button type="submit">Feliratkozom</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
