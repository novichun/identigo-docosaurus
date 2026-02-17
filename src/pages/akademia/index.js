import React from 'react';
import Layout from '@theme/Layout';
import { getSortedEvents } from '../../data/akademiaEvents';
import { ButtonLink, PlainButtonLink } from '../../components/elements/button';
import { Container } from '../../components/elements/container';
import { Eyebrow } from '../../components/elements/eyebrow';
import { Heading } from '../../components/elements/heading';
import { Main } from '../../components/elements/main';
import { Section } from '../../components/elements/section';
import { Subheading } from '../../components/elements/subheading';
import { Text } from '../../components/elements/text';
import { Wallpaper } from '../../components/elements/wallpaper';

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

export default function AkademiaPage() {
  const events = getSortedEvents();

  return (
    <Layout title="Akadémia események" description="identiGO Akadémia eseménylista">
      <Main className="bg-white">
        <Wallpaper color="blue" className="text-white">
          <section className="py-16 md:py-20">
            <Container>
              <div className="max-w-4xl">
                <Eyebrow className="text-white/70">Események</Eyebrow>
                <Heading color="light" className="mt-4">
                  identiGO Akadémia eseménylista
                </Heading>
                <Text size="lg" color="light" className="mt-6 max-w-3xl">
                  Válogatott workshopok és szakmai alkalmak megfelelési, jogi és operatív csapatoknak. Minden eseményhez
                  külön részletoldal és jelentkezési blokk tartozik.
                </Text>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink size="lg" color="light" href="/akademia/esemenyek">
                    Események megtekintése
                  </ButtonLink>
                  <PlainButtonLink size="lg" color="light" href="/rend">
                    Hírlevél feliratkozás
                  </PlainButtonLink>
                </div>
              </div>
            </Container>
          </section>
        </Wallpaper>

        <Section
          eyebrow="Akadémia"
          headline="Aktuális események"
          subheadline="Nyitott, hamarosan induló és korlátozott helyes események egy helyen."
          className="bg-mist-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <article
                key={event.slug}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#53A8C7]" />

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${statusStyles(event.status)}`}
                  >
                    {event.statusLabel}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#53A8C7]">{event.eyebrow}</span>
                </div>

                <Subheading className="text-mist-950">{event.title}</Subheading>
                <Text className="mt-3 text-mist-600">{event.summary}</Text>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-slate-100 bg-mist-50 p-3">
                    <Text className="text-xs uppercase tracking-wide text-mist-500">Dátum</Text>
                    <Text className="font-semibold text-mist-950">{event.dateLabel}</Text>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-mist-50 p-3">
                    <Text className="text-xs uppercase tracking-wide text-mist-500">Idő</Text>
                    <Text className="font-semibold text-mist-950">{event.time}</Text>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-mist-50 p-3">
                    <Text className="text-xs uppercase tracking-wide text-mist-500">Helyszín</Text>
                    <Text className="font-semibold text-mist-950">{event.location}</Text>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-mist-50 p-3">
                    <Text className="text-xs uppercase tracking-wide text-mist-500">Részvétel</Text>
                    <Text className="font-semibold text-mist-950">{event.price}</Text>
                  </div>
                </div>

                <div className="mt-6">
                  <ButtonLink href={`/akademia/esemenyek/${event.slug}`} className="w-full justify-center">
                    Részletek és jelentkezés
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Main>
    </Layout>
  );
}
