import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react';

import { Container } from '../components/elements/container';
import { Subheading } from '../components/elements/subheading';
import { Text } from '../components/elements/text';
import { Wallpaper } from '../components/elements/wallpaper';
import { AnnouncementBadge } from '../components/elements/announcement-badge';
import { Button, ButtonLink, PlainButton, PlainButtonLink, SoftButtonLink } from '../components/elements/button';
import { Link } from '../components/elements/link';
import { Logo, LogoGrid } from '../components/elements/logo-grid';
import { Main } from '../components/elements/main';
import { Screenshot } from '../components/elements/screenshot';
import { ArrowNarrowRightIcon } from '../components/icons/arrow-narrow-right-icon';
import { ChevronIcon } from '../components/icons/chevron-icon';
import { CallToActionSimple } from '../components/sections/call-to-action-simple';
import { FAQsTwoColumnAccordion, Faq } from '../components/sections/faqs-two-column-accordion';
import { FeatureThreeColumnWithDemos, Features } from '../components/sections/features-three-column-with-demos';
import { HeroWithDemoOnBackground } from '../components/sections/hero-with-demo-on-background';

import { Stat, StatsWithGraph } from '../components/sections/stats-with-graph';
import { FeatureHighlight } from '../components/sections/feature-highlight';
import { TestimonialLargeQuote } from '../components/sections/testimonial-with-large-quote';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Kezdőlap`}
      description="identiGO - Pénzmosási törvény automatizált adminisztráció vállalkozásoknak.">

      <Main>
        {/* Hero */}
        <HeroWithDemoOnBackground
          id="hero"
          eyebrow={
            <AnnouncementBadge
              href="#"
              text="Újdonság: Tényleges tulajdonosi modul"
              cta="Részletek"
              variant="overlay"
            />
          }
          headline="Pénzmosási törvény automatizált adminisztráció"
          subheadline={
            <p>
              Elege van a kezelhetetlen mennyiségű adminisztrációból? Szeretné elkerülni a több százezres bírságokat?
              Bízza a Pmt. megfelelést az identiGO-ra.
            </p>
          }
          cta={
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" color="light">
                Ingyenes DEMO <ArrowNarrowRightIcon />
              </Button>

              <PlainButton
                size="lg"
                color="light"
                className="gap-2 underline underline-offset-4 decoration-white/70 text-white/90 hover:text-white"
                command="show-modal"
                commandfor="demo-video-modal"
                onClick={() => {
                  const iframe = document.getElementById('demo-video-iframe');
                  if (iframe && !iframe.src) {
                    iframe.src = 'https://www.youtube.com/embed/7J2bbFGUM6g?rel=0&autoplay=1';
                  }
                }}
              >
                Bemutató videó ▶
              </PlainButton>
            </div>
          }
          demo={
            <>
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-white/75 shadow-lg dark:bg-black/75">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                  {/* Banner */}
                  <img
                    src="https://identigo.hu/img/app_screens/1.png"
                    alt="identiGO rendszerbemutató előnézet"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </>
          }
        />
        <ElDialog>
          <dialog id="demo-video-modal" className="backdrop:bg-black/70">
            <ElDialogPanel className="fixed inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    command="close"
                    commandfor="demo-video-modal"
                    aria-label="Bezárás"
                    className="inline-flex rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      const iframe = document.getElementById('demo-video-iframe');
                      if (iframe) iframe.src = '';
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    id="demo-video-iframe"
                    className="h-full w-full"
                    src=""
                    title="identiGO rendszerbemutató"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>

        {/* Features */}
        <Features
          id="features"
          headline="Fő előnyök, amik leveszik az adminisztráció terhét."
          subheadline={
            <p>
              Automatizált adatkitöltés, figyelmeztetések és naprakész nyilvántartás a magabiztos NAV-ellenőrzésért.
            </p>
          }
          cta={
            <Link href="#">
              Nézze meg hogyan működik <ArrowNarrowRightIcon />
            </Link>
          }
          features={
            <>
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      width={1800}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/1.png"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                    />
                  </Screenshot>
                }
                headline="Csökkenti az adminisztrációs terheket"
                subheadline={<p>Automatikus adatkitöltés és szűrések — kézi beavatkozás nélkül.</p>}
                div />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      width={1800}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/2.png"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                    />
                  </Screenshot>
                }
                headline="Növeli a pontosságot"
                subheadline={<p>Figyelmeztet a teendőkre, hogy semmi ne kerülje el a figyelmét.</p>}
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="brown" placement="bottom-left">
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://identigo.hu/img/app_screens/3.png"
                      alt=""
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                      width={1200}
                      height={736}
                    />
                  </Screenshot>
                }
                headline="Segít elkerülni a bírságokat"
                subheadline={<p>Naprakész nyilvántartás és időben elvégzett teendők.</p>}
              />
            </>
          }
        />

        {/* Stats */}
        <StatsWithGraph
          id="stats"
          eyebrow="Gyorsabb megfelelés"
          headline="Kevesebb adminisztráció, nagyobb pontosság."
          subheadline={
            <p>
              Az identiGO automatizált rendszere leegyszerűsíti a kötelező nyilvántartást, így Ön a valódi munkájára
              koncentrálhat.
            </p>
          }
        >

          <Stat stat="700+" text="identiGO felhasználó." />
          <Stat stat="100%" text="törvényi megfelelés." />
          <Stat stat="20+" text="funkció." />
          <Stat stat="100+" text="teljesített NAV ellenőrzés" />
        </StatsWithGraph>

        {/* Testimonial */}
        <TestimonialLargeQuote
          id="testimonial"
          quote={
            <p>
              Mi levesszük a válláról ezt a terhet, hogy Ön a valódi munkájára koncentrálhasson.
            </p>
          }
          img={
            <img
              src="https://identigo.hu/img/rendszerbemutato.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="identiGO csapat"
          byline="Pmt. megfelelés automatizálása"
        />

        {/* FAQs */}
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
          <Faq
            id="faq-1"
            question="Kiknek ajánljuk az identiGO-t?"
            answer="Bármely Pmt. hatálya alá tartozó szolgáltatónak, legyenek ügyfelei akár cégek, akár magánszemélyek. Kiemelten érintettek például ingatlanosok, könyvelők, könyvvizsgálók, biztosítási közvetítők, pénzügyi tanácsadók és székhelyszolgáltatók."
          />
          <Faq
            id="faq-2"
            question="Van ingyenes csomag?"
            answer="Igen, 5 ügyfélig ingyenesen használható, fizetési kötelezettség nélkül."
          />
          <Faq
            id="faq-3"
            question="Mit tartalmaz az Alap csomag?"
            answer="ENSZ-EU / közszereplő szűrés, automatikus adatkitöltés 1 kattintással, figyelmeztetés teendőkre, ügyfélátvilágítási adatlap, dokumentumtárolás és értesítés lejáró igazolványokról."
          />
          <Faq
            id="faq-4"
            question="Mit tud a Prémium csomag és a kiegészítő modul?"
            answer="A Prémium csomag mindent tartalmaz az Alap csomagból, plusz cégfigyelést, visszakereshető cégtörténetet, adatszinkron/frissítést 1 kattintással, automatikus magas kockázatot és 5 szolgáltatót. Kiegészítőként a tényleges tulajdonos modul +700 Ft/hó."
          />
        </FAQsTwoColumnAccordion>



        <Wallpaper className="py-24 sm:py-32" color="blue">
          <Container className="text-center">
            <Subheading color="light" className="mx-auto max-w-2xl">
              Próbálja ki az identiGO-t kockázat nélkül.
            </Subheading>
            <Text color="light" size="lg" className="mx-auto mt-6 max-w-xl">
              5 ügyfélig ingyenesen, fizetési kötelezettség nélkül.
            </Text>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonLink href="#" size="lg" color="light">
                Ingyenes DEMO
              </ButtonLink>

              <PlainButtonLink href="#" size="lg" color="light">
                Kérjen bemutatót <ChevronIcon />
              </PlainButtonLink>
            </div>
          </Container>
        </Wallpaper>


      </Main>
    </Layout>
  );
}
