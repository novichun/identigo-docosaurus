import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { getSortedEvents } from '../../data/akademiaEvents';

export default function AkademiaPage() {
  const events = getSortedEvents();
  const highlightedEvent = events[0];

  return (
    <Layout title="Akadémia" description="identiGO Akadémia főoldal">
      <main className="bg-slate-50 min-h-screen">
        <section className="relative overflow-hidden py-20 md:py-28 bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(83,168,199,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(83,168,199,0.2),transparent_30%)]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#53A8C7]" />
                <span className="text-sm font-bold tracking-widest uppercase text-[#9ad6ea]">identiGO Akadémia</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Gyakorlati képzések
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-10">
                Workshopok, mini masterclass alkalmak és esettanulmány fókuszú események egy helyen. Minden esemény
                gyakorlati szemléletű, konkrét folyamatokkal és azonnal használható mintákkal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center justify-center rounded-xl px-7 py-4 font-bold text-white no-underline bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors"
                  to="/akademia/esemenyek"
                >
                  Események megtekintése
                </Link>
                <a
                  className="inline-flex items-center justify-center rounded-xl px-7 py-4 font-bold text-white no-underline border border-white/30 hover:border-white/60 transition-colors"
                  href="/rend"
                >
                  Hírlevél feliratkozás
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/40">
              <p className="text-sm font-bold uppercase tracking-wide text-[#53A8C7] mb-3">Kiemelt következő esemény</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">{highlightedEvent.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-8">{highlightedEvent.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Dátum</p>
                  <p className="font-semibold text-slate-900">{highlightedEvent.dateLabel}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Idő</p>
                  <p className="font-semibold text-slate-900">{highlightedEvent.time}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Helyszín</p>
                  <p className="font-semibold text-slate-900">{highlightedEvent.location}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Részvétel</p>
                  <p className="font-semibold text-slate-900">{highlightedEvent.price}</p>
                </div>
              </div>
              <Link
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white no-underline bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors"
                to={`/akademia/esemenyek/${highlightedEvent.slug}`}
              >
                {highlightedEvent.ctaLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Workshopok',
                  text: 'Elo, interaktiv alkalmak valos problemakra epulve.',
                },
                {
                  title: 'Sablonok es checklistak',
                  text: 'Azonnal hasznalhato mintak, amik gyorsitjak a napi munkat.',
                },
                {
                  title: 'Kerdezz-felelek',
                  text: 'Nyilt Q&A szakasz minden esemenyen, konkret esetekkel.',
                },
              ].map((item) => (
                <article key={item.title} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/40">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
