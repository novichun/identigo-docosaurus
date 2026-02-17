import React from 'react';
import Layout from '@theme/Layout';
import { getSortedEvents } from '../../data/akademiaEvents';

import { ButtonLink, PlainButtonLink } from '../../components/elements/button';
import { Container } from '../../components/elements/container';
import { Eyebrow } from '../../components/elements/eyebrow';
import { Heading } from '../../components/elements/heading';
import { Main } from '../../components/elements/main';
import { Subheading } from '../../components/elements/subheading';
import { Text } from '../../components/elements/text';
import { Wallpaper } from '../../components/elements/wallpaper';
import { Section } from '../../components/elements/section';
import { Feature, FeaturesThreeColumn } from '../../components/sections/features-three-column';

export default function AkademiaPage() {
  const events = getSortedEvents();
  const highlightedEvent = events[0];

  return (
    <Layout title="Akadémia" description="identiGO Akadémia főoldal">
      <Main className="bg-white">
        <Wallpaper color="blue" className="text-white">
          <section className="py-20 md:py-24">
            <Container>
              <div className="max-w-4xl">
                <Eyebrow className="text-white/70">identiGO Akadémia</Eyebrow>
                <Heading color="light" className="mt-4">
                  Gyakorlati képzések
                </Heading>
                <Text size="lg" color="light" className="mt-6 max-w-3xl">
                  Workshopok, mini masterclass alkalmak és esettanulmány fókuszú események egy helyen. Minden esemény
                  gyakorlati szemléletű, konkrét folyamatokkal és azonnal használható mintákkal.
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
          headline="Kiemelt következő esemény"
          subheadline={
            <>
              {highlightedEvent.summary}
            </>
          }
          className="bg-mist-50"
        >
          <div className="rounded-3xl bg-white p-8 md:p-10">
            <Eyebrow className="text-[#53A8C7]">Kiemelt esemény</Eyebrow>
            <Subheading className="mt-3 text-mist-950">{highlightedEvent.title}</Subheading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-mist-50 p-4">
                <Text className="text-sm text-mist-500">Dátum</Text>
                <p className="font-semibold text-mist-950">{highlightedEvent.dateLabel}</p>
              </div>
              <div className="rounded-2xl bg-mist-50 p-4">
                <Text className="text-sm text-mist-500">Idő</Text>
                <p className="font-semibold text-mist-950">{highlightedEvent.time}</p>
              </div>
              <div className="rounded-2xl bg-mist-50 p-4">
                <Text className="text-sm text-mist-500">Helyszín</Text>
                <p className="font-semibold text-mist-950">{highlightedEvent.location}</p>
              </div>
              <div className="rounded-2xl bg-mist-50 p-4">
                <Text className="text-sm text-mist-500">Részvétel</Text>
                <p className="font-semibold text-mist-950">{highlightedEvent.price}</p>
              </div>
            </div>
            <div className="mt-8">
              <ButtonLink href={`/akademia/esemenyek/${highlightedEvent.slug}`}> {highlightedEvent.ctaLabel} </ButtonLink>
            </div>
          </div>
        </Section>

        <FeaturesThreeColumn
          headline="Miért hasznos az akadémia?"
          subheadline={
            <>
              Rövid, fókuszált formátumok, amelyek valóban segítik a napi megfelelést.
            </>
          }
          features={
            <>
              <Feature
                headline="Workshopok"
                subheadline={<p>Élő, interaktív alkalmak valós problémákra építve.</p>}
              />
              <Feature
                headline="Sablonok és checklisták"
                subheadline={<p>Azonnal használható minták, amik gyorsítják a napi munkát.</p>}
              />
              <Feature
                headline="Kérdezz-felelek"
                subheadline={<p>Nyílt Q&A szakasz minden eseményen, konkrét esetekkel.</p>}
              />
            </>
          }
        />
      </Main>
    </Layout>
  );
}
