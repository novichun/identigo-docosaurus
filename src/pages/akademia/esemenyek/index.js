import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { getSortedEvents } from '../../../data/akademiaEvents';

function statusStyles(status) {
  if (status === 'open') {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  }
  if (status === 'few') {
    return 'bg-amber-50 text-amber-700 border-amber-200';
  }
  if (status === 'soon') {
    return 'bg-sky-50 text-sky-700 border-sky-200';
  }
  return 'bg-slate-100 text-slate-700 border-slate-200';
}

export default function AkademiaEsemenyekPage() {
  const events = getSortedEvents();

  return (
    <Layout title="Akadémia események" description="identiGO Akadémia eseménylista">
      <main className="bg-slate-50 min-h-screen py-14 md:py-20">
        <section className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#53A8C7]" />
              <span className="text-sm font-bold tracking-widest uppercase text-[#53A8C7]">Események</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">identiGO Akadémia eseménylista</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Válogatott workshopok és szakmai alkalmak megfelelési, jogi és operatív csapatoknak. Minden eseményhez
              külön részletoldal és jelentkezési blokk tartozik.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <article
                key={event.slug}
                className="bg-white border border-slate-200 rounded-[1.75rem] p-7 md:p-8 shadow-lg shadow-slate-200/40"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${statusStyles(event.status)}`}
                  >
                    {event.statusLabel}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#53A8C7]">{event.eyebrow}</span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 mb-3">{event.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{event.summary}</p>

                <div className="grid grid-cols-2 gap-3 mb-7 text-sm">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <p className="text-slate-500 mb-1">Dátum</p>
                    <p className="font-semibold text-slate-900">{event.dateLabel}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <p className="text-slate-500 mb-1">Idő</p>
                    <p className="font-semibold text-slate-900">{event.time}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <p className="text-slate-500 mb-1">Helyszín</p>
                    <p className="font-semibold text-slate-900">{event.location}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <p className="text-slate-500 mb-1">Részvétel</p>
                    <p className="font-semibold text-slate-900">{event.price}</p>
                  </div>
                </div>

                <Link
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white no-underline bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors"
                  to={`/akademia/esemenyek/${event.slug}`}
                >
                  Részletek és jelentkezés
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
