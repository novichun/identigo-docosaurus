import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ButtonLink, PlainButtonLink } from '../components/elements/button';
import { Container } from '../components/elements/container';
import { Eyebrow } from '../components/elements/eyebrow';
import { Heading } from '../components/elements/heading';
import { Main } from '../components/elements/main';
import { Text } from '../components/elements/text';
import { Wallpaper } from '../components/elements/wallpaper';
import { Section } from '../components/elements/section';
import { Feature, FeaturesThreeColumn } from '../components/sections/features-three-column';

export default function ZsuzsaPage() {
  const zsuzsaImage = useBaseUrl('/img/zsuzsa.jpg');
  const promoCode = 'ZSUZSA';

  return (
    <Layout title="Zsuzsa ajánlja az identiGO-t" description="Zsuzsa partner promóciós oldal">
      <Main className="bg-white">
        <Wallpaper color="blue" className="text-white">
          <section className="py-20 md:py-24">
            <Container>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
                <div className="lg:pr-6">
                  <div className="relative overflow-hidden rounded-3xl bg-mist-950 px-6 pt-56 pb-8 shadow-2xl sm:px-10 lg:pt-64">
                    <img
                      src={zsuzsaImage}
                      alt="Zsuzsa"
                      className="absolute inset-0 h-full w-full rounded-3xl object-cover brightness-110"
                    />
                    <div className="absolute inset-0 bg-mist-950/70" />
                    <figure className="relative">
                      <blockquote className="text-lg/8 font-semibold text-white">
                        <p>
                          „Az identiGO-val végre átlátható a megfelelés — tudom, mi a következő lépés és nem marad el semmi.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-4 text-sm/6 text-white/70">
                        <strong className="font-semibold text-white">Zsuzsa</strong>, közösségi mentor
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="lg:pt-4">
                  <Eyebrow className="text-white/70">Partner ajánlás</Eyebrow>
                  <Heading color="light" className="mt-4">
                    Zsuzsa ajánlja az identiGO-t
                  </Heading>
                  <Text size="lg" color="light" className="mt-6">
                    Zsuzsa 20+ év tapasztalattal támogatja a megfelelési és ügyfél-átvilágítási folyamatokat. Az
                    identiGO-t azért használja és ajánlja, mert gyorsan átlátja vele a kötelező lépéseket, és nem kell
                    adminisztrációban elakadni.
                  </Text>
                  <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white/10 px-5 py-4">
                    <span className="text-sm font-semibold uppercase tracking-wide text-white/80">Limitált ideig</span>
                    <span className="text-sm text-white/70">Promó kód:</span>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-mist-950">
                      {promoCode}
                    </span>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ButtonLink size="lg" color="light" href="/identigo-docosaurus/">
                      Regisztrálok Zsuzsa kódjával
                    </ButtonLink>
                    <PlainButtonLink size="lg" color="light" href="/identigo-docosaurus/">
                      Mi az identiGO?
                    </PlainButtonLink>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Wallpaper>

        <FeaturesThreeColumn
          headline="Miért jó az identiGO Zsuzsa szerint?"
          subheadline={
            <>
              Kevesebb bizonytalanság, tisztább folyamatok, nyugodtabb NAV‑ellenőrzés.
            </>
          }
          features={
            <>
              <Feature
                headline="Átlátható teendőlista"
                subheadline={<p>Mindig tudod, mi a következő kötelező lépés a megfelelésben.</p>}
              />
              <Feature
                headline="Gyorsabb adminisztráció"
                subheadline={<p>Kevesebb manuális munka, több idő az ügyfelekre és a szakmai döntésekre.</p>}
              />
              <Feature
                headline="Magabiztos ellenőrzés"
                subheadline={<p>Rendezett dokumentáció és naprakész nyilvántartások.</p>}
              />
            </>
          }
        />
      </Main>
    </Layout>
  );
}
