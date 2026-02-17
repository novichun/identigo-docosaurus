import React, { useState, useEffect } from 'react';
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

const EbookSlider = () => {
  const images = [
    useBaseUrl('/img/ebook/pmt-tudastar.png'),
    useBaseUrl('/img/ebook/3oldal.png'),
    useBaseUrl('/img/ebook/14oldal.png'),
    useBaseUrl('/img/ebook/36oldal.png'),
    useBaseUrl('/img/ebook/tartalomjegyzek_2.png'),
    useBaseUrl('/img/ebook/tartalomjegyzek1.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group w-full">
      <div className="aspect-[3/4] w-full rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`Ebook oldal ${index + 1}`} className="w-full h-full object-contain p-2" />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20 border-none cursor-pointer"
        aria-label="Előző kép"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20 border-none cursor-pointer"
        aria-label="Következő kép"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all border-none cursor-pointer ${
              index === currentIndex ? 'bg-[#53A8C7] w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ugrás a(z) ${index + 1}. oldalra`}
          />
        ))}
      </div>
    </div>
  );
};

export default function EbookPage() {
  const juditImage = useBaseUrl('/img/judit.jpeg');
  const zsuzsaImage = useBaseUrl('/img/zsuzsa.jpg');

  return (
    <Layout title="E-book" description="Pénzmosás elleni törvény TUDÁSTÁR eBook">
      <Main className="bg-white min-h-screen">
        <Wallpaper color="blue" className="text-white">
          <header className="overflow-hidden lg:px-5">
            <Container className="px-0">
              <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-y-12 pt-12 pb-16 md:gap-y-16 md:pt-16 md:pb-20 lg:grid-cols-12 lg:gap-y-20 lg:pt-20 lg:pb-36 xl:py-32">
            <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
              <div className="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-[3rem] bg-[#2b6f8f] md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40" />
              <div className="relative z-10 mx-auto w-64 md:w-80 lg:w-96">
                <div className="rounded-2xl bg-white p-4 shadow-2xl">
                  <EbookSlider />
                </div>
              </div>
            </div>

            <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
              <div className="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-transparent" />
              <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                <div className="flex justify-center text-[#f5c542] lg:justify-start">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-2">
                  <p className="text-xl font-semibold text-white">
                    “Végre egy anyag, ami érthetően és gyakorlati példákkal vezet végig a megfelelésen.”
                  </p>
                </blockquote>
                <figcaption className="mt-2 text-sm text-white/70">
                  <strong className="font-semibold text-white before:content-['—_']">Kovács Eszter</strong>, Compliance vezető
                </figcaption>
              </figure>
            </div>

            <div className="bg-transparent pt-16 lg:col-span-7 lg:pt-0 lg:pl-16 xl:pl-20">
              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <Eyebrow className="text-white/70">E-book</Eyebrow>
                <Heading color="light" className="mt-3">
                  Pénzmosás elleni törvény <span className="text-white">TUDÁSTÁR</span>
                </Heading>
                <Text size="lg" color="light" className="mt-6">
                  A legfontosabb Pmt. kötelezettségek egy helyen: érthetően, példákkal, 106 oldalon.
                </Text>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink size="lg" color="light" href="#pricing">
                    Kérem a könyvet
                  </ButtonLink>
                  <ButtonLink size="lg" color="light" className="bg-white/20 text-white hover:bg-white/30" href="#table-of-contents">
                    Tartalomjegyzék
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
            </Container>
          </header>
        </Wallpaper>

        <div className="sticky top-0 z-40">
          <div className="sm:hidden">
            <div className="relative flex items-center px-4 py-3 bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur-sm">
              <span aria-hidden="true" className="font-mono text-sm text-[#53A8C7]">01</span>
              <span className="ml-4 text-base font-medium text-mist-950">Tartalom</span>
              <a
                className="ml-auto inline-flex items-center justify-center rounded-full bg-[#53A8C7] text-white px-4 py-2 text-sm font-semibold"
                href="#pricing"
              >
                Kérem a könyvet
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
          </div>
          <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-mist-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur-sm">
            <ol
              role="list"
              className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-mist-950 [counter-reset:section]"
            >
              {[
                { href: '#table-of-contents', label: 'Tartalomjegyzék' },
                { href: '#screencasts', label: 'Példák' },
                { href: '#resources', label: 'Eszközök' },
                { href: '#pricing', label: 'Megrendelés' },
                { href: '#author', label: 'Szerzők' },
              ].map((item) => (
                <li key={item.href} className="flex [counter-increment:section]">
                  <a
                    href={item.href}
                    className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)] before:text-mist-500 hover:bg-[#53A8C7]/10 hover:before:text-mist-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <FeaturesThreeColumn
          id="table-of-contents"
          headline="Mit kapsz az eBookban?"
          subheadline={
            <>
              Tapasztalataink szerint kevés az átfogó, hiteles és érthető oktatóanyag. Ez az eBook a teljes megfelelési
              folyamatot lefedi, lépésről lépésre.
            </>
          }
          features={
            <>
              <Feature
                headline="Az összes teendő egy helyen"
                subheadline={<p>A szolgáltatás megkezdésétől a monitoring feladatokig, példákkal és speciális esetekkel.</p>}
              />
              <Feature
                headline="Nyomtatványok és kitöltési útmutatók"
                subheadline={<p>Minden szükséges nyomtatvány elérhetősége, magyarázattal és gyakorlati segítséggel.</p>}
              />
              <Feature
                headline="NAV ellenőrzési gyakorlat"
                subheadline={<p>Mire figyelj, mit kérnek, ellenőrzési statisztikák és gyakori hibák.</p>}
              />
            </>
          }
        />

        <Section
          id="screencasts"
          className="bg-white"
          headline="Példák és gyakorlati nézetek"
          subheadline="Valós működési helyzetek és mintafolyamatok, amelyek segítenek gyorsabban dönteni."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {['Ügyfél-átvilágítás folyamat', 'Kockázatértékelési minta', 'Monitoring ellenőrzési pontok'].map((item) => (
              <div key={item} className="rounded-2xl p-6">
                <p className="text-base font-semibold text-mist-950">{item}</p>
                <p className="mt-2 text-sm text-mist-600">Letisztított, használható checklist és példák.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="resources"
          headline="Eszközök és sablonok"
          subheadline="Egyszerűen adaptálható dokumentumok, hogy gyorsabban összeálljon a megfelelési csomag."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {['Mintanyilatkozatok', 'Kockázati mátrix', 'Belépési checklist', 'Belső szabályzat vázlat'].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-mist-50 p-5">
                <div className="h-10 w-10 rounded-xl bg-[#53A8C7]/15 text-[#53A8C7] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base font-medium text-mist-950">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Wallpaper color="blue" className="text-white">
          <section id="pricing" className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-white">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold">Készen állsz, hogy rend legyen?</h2>
                <p className="mt-3 text-lg text-white/70">
                  A Pmt. megfelelés nem kell, hogy stresszes legyen. A könyv lépésről lépésre vezet végig a kötelező
                  folyamatokon.
                </p>
              </div>
              <div className="rounded-2xl bg-white/0 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-white/60">E-book csomag</div>
                <div className="mt-3 text-4xl font-bold">36 000 Ft</div>
                <p className="mt-2 text-sm text-white/60">Azonnali hozzáféréssel, PDF formátumban.</p>
                <a
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-mist-950 hover:bg-mist-100"
                  href="#"
                >
                  Kérem a könyvet
                </a>
              </div>
            </div>
            </div>
          </section>
        </Wallpaper>

        <Section
          id="author"
          headline="Szerzők"
          subheadline="A tudásanyagot tapasztalt AML és compliance szakértők állították össze, akik napi szinten dolgoznak a megfelelési feladatokkal."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: 'Judit',
                role: 'Szabályozási szakértő',
                desc: 'A jogszabályi megfelelés gyakorlati oldalát képviseli, konkrét lépésekkel és példákkal.',
                image: juditImage,
              },
              {
                name: 'Zsuzsa',
                role: 'Közösségi mentor',
                desc: 'Folyamat- és működésfókuszú szemlélettel segít a bevezetésben.',
                image: zsuzsaImage,
              },
            ].map((person) => (
              <div key={person.name} className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-16 w-16 flex-none rounded-full object-cover outline -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-lg font-semibold text-mist-950">{person.name}</h3>
                  <p className="text-sm font-semibold text-[#53A8C7]">{person.role}</p>
                  <p className="mt-2 text-sm text-mist-600">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-mist-200 bg-white/95 [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-mist-950">Pmt. TUDÁSTÁR eBook</p>
              <p className="text-xs text-mist-500">Azonnali hozzáférés PDF-ben.</p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#53A8C7] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#53A8C7]/30 hover:bg-[#3f98b8]"
              href="#pricing"
            >
              Kérem a könyvet
            </a>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
