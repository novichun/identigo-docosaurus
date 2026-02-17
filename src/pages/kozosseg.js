import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function KozossegPage() {
  const juditImage = useBaseUrl('/img/judit.jpeg');
  const zsuzsaImage = useBaseUrl('/img/zsuzsa.jpg');

  return (
    <Layout title="Közösség" description="identiGO szakmai közösség és csapat">
      <main className="bg-slate-50 min-h-screen">
        <section className="relative overflow-hidden py-20 md:py-24 bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(83,168,199,0.3),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(83,168,199,0.18),transparent_35%)]" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#53A8C7]" />
                <span className="text-sm font-bold tracking-widest uppercase text-[#9ad6ea]">Szakmai közösség</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Csatlakozz az identiGO közösségéhez
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-10">
                Gyakorlati AML és compliance tudásanyagok, valós esetek, heti tippek és szakmai beszélgetések egy
                támogató közegben.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-xl px-7 py-4 font-bold text-white no-underline bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors"
                href="https://forms.gle/example-identigo-facebook"
                target="_blank"
                rel="noreferrer"
              >
                Facebook közösség jelentkezési űrlap
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/40">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Mit kapsz a közösségben?</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-8">
                Rövid, használható útmutatókat, ellenőrzési fókuszokat és sablonokat, amiket be tudsz építeni a napi
                működésbe. A cél: kevesebb bizonytalanság, tisztább folyamatok.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Heti gyakorlati tippek AML témában',
                  'Esettanulmányok valós működési helyzetekből',
                  'Kérdezz-felelek szakértői támogatással',
                ].map((item) => (
                  <div key={item} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 text-slate-700 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#53A8C7]" />
              <span className="text-sm font-bold tracking-widest uppercase text-[#53A8C7]">Judit és Zsuzsa</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white border border-slate-200 rounded-[1.75rem] p-7 shadow-lg shadow-slate-200/50">
                <img
                  src={juditImage}
                  alt="Judit"
                  className="w-full aspect-[4/3] object-cover rounded-2xl bg-slate-200 mb-6"
                />
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Judit</h3>
                <p className="text-sm font-bold uppercase tracking-wide text-[#53A8C7] mb-4">Szabályozási szakértő</p>
                <p className="text-slate-600 leading-relaxed">
                  A közösségben a jogszabályi megfelelés gyakorlati oldalát képviseli. Olyan megközelítéseket ad, amelyek
                  a napi működésben is kivitelezhetők, nem csak elméletben.
                </p>
              </article>

              <article className="bg-white border border-slate-200 rounded-[1.75rem] p-7 shadow-lg shadow-slate-200/50">
                <img
                  src={zsuzsaImage}
                  alt="Zsuzsa"
                  className="w-full aspect-[4/3] object-cover rounded-2xl bg-slate-200 mb-6"
                />
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Zsuzsa</h3>
                <p className="text-sm font-bold uppercase tracking-wide text-[#53A8C7] mb-4">Közösségi mentor</p>
                <p className="text-slate-600 leading-relaxed">
                  Folyamat- és működésfókuszú szemlélettel segít rendet tenni a megfelelési feladatokban. Erőssége a
                  tiszta kommunikáció és a lépésről lépésre felépített bevezetés.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
