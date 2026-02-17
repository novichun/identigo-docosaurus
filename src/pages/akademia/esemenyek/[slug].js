import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { getEventBySlug } from '../../../data/akademiaEvents';
import { ButtonLink, PlainButtonLink } from '../../../components/elements/button';
import { Container } from '../../../components/elements/container';
import { Eyebrow } from '../../../components/elements/eyebrow';
import { Heading } from '../../../components/elements/heading';
import { Main } from '../../../components/elements/main';
import { Section } from '../../../components/elements/section';
import { Subheading } from '../../../components/elements/subheading';
import { Text } from '../../../components/elements/text';
import { Wallpaper } from '../../../components/elements/wallpaper';

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
        <Main className="bg-white">
          <Section
            eyebrow="identiGO Akadémia"
            headline="Ez az esemény nem található"
            subheadline="Lehet, hogy az esemény már lezárult vagy a link hiányos."
            className="bg-mist-50"
          >
            <ButtonLink href="/akademia">Vissza az eseménylistához</ButtonLink>
          </Section>
        </Main>
      </Layout>
    );
  }

  return (
    <Layout title={event.title} description={event.summary}>
      <Main className="bg-white">
        <Wallpaper color="blue" className="text-white">
          <section className="py-16 md:py-20">
            <Container>
              <div className="max-w-4xl">
                <PlainButtonLink href={useBaseUrl('/akademia')} color="light" className="mb-6">
                  ← Vissza az eseményekhez
                </PlainButtonLink>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border bg-white/15 text-white border-white/30">
                    {event.statusLabel}
                  </span>
                  <Eyebrow className="text-white/70">{event.eyebrow}</Eyebrow>
                </div>
                <Heading color="light" className="mt-2">
                  {event.title}
                </Heading>
                <Text size="lg" color="light" className="mt-5 max-w-3xl">
                  {event.description}
                </Text>
              </div>
            </Container>
          </section>
        </Wallpaper>

        <Section
          eyebrow="Részletek"
          headline="Fő információk"
          subheadline="Időpont, formátum és részvételi információk egy helyen."
          className="bg-mist-50"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <Text className="text-xs uppercase tracking-wide text-mist-500">Dátum</Text>
              <Text className="font-semibold text-mist-950">{event.dateLabel}</Text>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <Text className="text-xs uppercase tracking-wide text-mist-500">Idő</Text>
              <Text className="font-semibold text-mist-950">{event.time}</Text>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <Text className="text-xs uppercase tracking-wide text-mist-500">Helyszín</Text>
              <Text className="font-semibold text-mist-950">{event.location}</Text>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <Text className="text-xs uppercase tracking-wide text-mist-500">Időtartam</Text>
              <Text className="font-semibold text-mist-950">{event.duration}</Text>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <Text className="text-xs uppercase tracking-wide text-mist-500">Részvétel</Text>
              <Text className="font-semibold text-mist-950">{event.price}</Text>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Tartalom"
          headline="Program és jelentkezés"
          subheadline="Fő témák, célcsoport és jelentkezési űrlap."
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
            <article className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm shadow-slate-200/40">
              <Subheading className="text-mist-950">Program</Subheading>
              <ul className="mt-5 space-y-3">
                {event.agenda.map((item) => (
                  <li key={item} className="flex gap-3 text-mist-700 leading-relaxed">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#53A8C7]" />
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>

              <Subheading className="mt-8 text-mist-950">Kinek ajánlott?</Subheading>
              <ul className="mt-4 space-y-2">
                {event.targetGroup.map((item) => (
                  <li key={item} className="text-mist-700">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-mist-50 border border-slate-200 p-5">
                <Text className="text-xs uppercase tracking-wide text-mist-500">Előadó</Text>
                <Text className="font-semibold text-mist-950">{event.speaker}</Text>
              </div>
            </article>

            <aside className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm shadow-slate-200/40 h-fit">
              <Subheading className="text-mist-950">Jelentkezés</Subheading>
              <Text className="mt-3 text-mist-600">Töltse ki az űrlapot, és visszajelzünk a részletekkel.</Text>

              <form className="mt-6 space-y-4" method="post" action="#">
                <input
                  type="text"
                  name="name"
                  placeholder="Teljes név"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email cím"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Cégnév"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <textarea
                  name="note"
                  rows="4"
                  placeholder="Megjegyzés (opcionális)"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#53A8C7]"
                />
                <ButtonLink href="#" className="w-full justify-center">
                  {event.ctaLabel}
                </ButtonLink>
              </form>
            </aside>
          </div>
        </Section>
      </Main>
    </Layout>
  );
}
