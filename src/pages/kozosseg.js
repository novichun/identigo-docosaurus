import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ButtonLink } from '../components/elements/button';
import { Container } from '../components/elements/container';
import { Eyebrow } from '../components/elements/eyebrow';
import { Heading } from '../components/elements/heading';
import { Main } from '../components/elements/main';
import { Text } from '../components/elements/text';
import { Wallpaper } from '../components/elements/wallpaper';
import { Section } from '../components/elements/section';
import { Feature, FeaturesThreeColumn } from '../components/sections/features-three-column';

export default function KozossegPage() {
  const juditImage = useBaseUrl('/img/judit.jpeg');
  const zsuzsaImage = useBaseUrl('/img/zsuzsa.jpg');

  return (
    <Layout title="Közösség" description="identiGO szakmai közösség és csapat">
      <Main>
        <Wallpaper color="blue" className="text-white">
          <section className="py-20 md:py-24">
            <Container>
              <div className="max-w-3xl">
                <Eyebrow className="text-white/70">Szakmai közösség</Eyebrow>
                <Heading color="light" className="mt-4">
                  Csatlakozz az identiGO közösségéhez
                </Heading>
                <Text size="lg" color="light" className="mt-6 max-w-2xl">
                  Gyakorlati AML és compliance tudásanyagok, valós esetek, heti tippek és szakmai beszélgetések egy
                  támogató közegben.
                </Text>
                <div className="mt-8">
                  <ButtonLink
                    size="lg"
                    color="light"
                    href="https://forms.gle/example-identigo-facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook közösség jelentkezési űrlap
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </section>
        </Wallpaper>

        <FeaturesThreeColumn
          headline="Mit kapsz a közösségben?"
          subheadline={
            <>
              Rövid, használható útmutatókat, ellenőrzési fókuszokat és sablonokat, amiket be tudsz építeni a napi
              működésbe. A cél: kevesebb bizonytalanság, tisztább folyamatok.
            </>
          }
          features={
            <>
              <Feature
                headline="Heti gyakorlati tippek AML témában"
                subheadline={<p>Azonnal beépíthető ellenőrzési pontok és jogszabályi frissítések röviden.</p>}
              />
              <Feature
                headline="Esettanulmányok valós működési helyzetekből"
                subheadline={<p>Konkrét példákon keresztül mutatjuk be, hogyan lehet jól reagálni a rizikókra.</p>}
              />
              <Feature
                headline="Kérdezz-felelek szakértői támogatással"
                subheadline={<p>Gyors válaszok és közös gondolkodás, hogy ne egyedül kelljen dönteni.</p>}
              />
            </>
          }
        />

        <Section
          eyebrow="Judit és Zsuzsa"
          headline="A közösség házigazdái"
          subheadline="Ketten együtt hozzák a szabályozási és működési nézőpontot, hogy a megfelelés érthető és kezelhető legyen."
        >
          <ul role="list" className="divide-y divide-mist-200 dark:divide-white/10">
            <li className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row">
              <img
                src={juditImage}
                alt="Judit"
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline -outline-offset-1 outline-black/5 dark:outline-white/10"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold text-mist-950 dark:text-white">Judit</h3>
                <p className="text-base/7 text-mist-700 dark:text-mist-400">Szabályozási szakértő</p>
                <p className="mt-6 text-base/7 text-mist-700 dark:text-mist-400">
                  A közösségben a jogszabályi megfelelés gyakorlati oldalát képviseli. Olyan megközelítéseket ad, amelyek
                  a napi működésben is kivitelezhetők, nem csak elméletben.
                </p>
              </div>
            </li>

            <li className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row">
              <img
                src={zsuzsaImage}
                alt="Zsuzsa"
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline -outline-offset-1 outline-black/5 dark:outline-white/10"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold text-mist-950 dark:text-white">Zsuzsa</h3>
                <p className="text-base/7 text-mist-700 dark:text-mist-400">Közösségi mentor</p>
                <p className="mt-6 text-base/7 text-mist-700 dark:text-mist-400">
                  Folyamat- és működésfókuszú szemlélettel segít rendet tenni a megfelelési feladatokban. Erőssége a
                  tiszta kommunikáció és a lépésről lépésre felépített bevezetés.
                </p>
              </div>
            </li>
          </ul>
        </Section>
      </Main>
    </Layout>
  );
}
