import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { getEventBySlug } from '../../../data/akademiaEvents';

function readSlug(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
}

export default function AkademiaEsemenyReszletPage() {
  const location = useLocation();
  const slug = readSlug(location.pathname);
  return <AkademiaEsemenyReszletContent slug={slug} />;
}

export function AkademiaEsemenyReszletContent({ slug }) {
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <Layout title="Esemény nem található" description="A keresett esemény nem érhető el.">
        <main className="bg-slate-50 min-h-screen py-20">
          <section className="container mx-auto px-4">
            <div className="max-w-2xl bg-white border border-slate-200 rounded-3xl p-10 shadow-lg shadow-slate-200/40">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Ez az esemény nem található</h1>
              <p className="text-slate-600 mb-8">Lehet, hogy az esemény már lezárult vagy a link hiányos.</p>
              <Link
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white no-underline bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors"
                to="/akademia/esemenyek"
              >
                Vissza az eseménylistához
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title={event.title} description={event.summary}>
      <main className="bg-slate-50 min-h-screen py-14 md:py-20">
        <section className="container mx-auto px-4 mb-10">
          <div className="max-w-4xl">
            <Link className="text-[#53A8C7] font-semibold no-underline hover:underline" to="/akademia/esemenyek">
              ← Vissza az eseményekhez
            </Link>
            <div className="flex flex-wrap items-center gap-3 mt-6 mb-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border bg-sky-50 text-sky-700 border-sky-200">
                {event.statusLabel}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-[#53A8C7]">{event.eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">{event.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{event.description}</p>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Dátum</p>
              <p className="font-semibold text-slate-900">{event.dateLabel}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Idő</p>
              <p className="font-semibold text-slate-900">{event.time}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Helyszín</p>
              <p className="font-semibold text-slate-900">{event.location}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Időtartam</p>
              <p className="font-semibold text-slate-900">{event.duration}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Részvétel</p>
              <p className="font-semibold text-slate-900">{event.price}</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
            <article className="bg-white border border-slate-200 rounded-[1.75rem] p-8 shadow-lg shadow-slate-200/40">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Program</h2>
              <ul className="space-y-3 mb-8">
                {event.agenda.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#53A8C7] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-extrabold text-slate-900 mb-4">Kinek ajánlott?</h3>
              <ul className="space-y-2 mb-8">
                {event.targetGroup.map((item) => (
                  <li key={item} className="text-slate-700">{item}</li>
                ))}
              </ul>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-sm text-slate-500 mb-1">Előadó</p>
                <p className="font-semibold text-slate-900">{event.speaker}</p>
              </div>
            </article>

            <aside className="bg-white border border-slate-200 rounded-[1.75rem] p-8 shadow-lg shadow-slate-200/40 h-fit">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Jelentkezés</h2>
              <p className="text-slate-600 mb-6">Töltse ki az űrlapot, és visszajelzünk a részletekkel.</p>

              <form className="space-y-4" method="post" action="#">
                <input
                  type="text"
                  name="name"
                  placeholder="Teljes név"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email cím"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Cégnév"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <textarea
                  name="note"
                  rows="4"
                  placeholder="Megjegyzés (opcionális)"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white bg-[#53A8C7] hover:bg-[#3f98b8] transition-colors border-none cursor-pointer"
                >
                  {event.ctaLabel}
                </button>
              </form>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
