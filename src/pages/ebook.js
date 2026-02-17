import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
    <div className="relative group">
      {/* Main Image Container */}
      <div className="aspect-[3/4] rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Ebook oldal ${index + 1}`}
              className="w-full h-full object-contain p-2"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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

      {/* Pagination Dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all border-none cursor-pointer ${
              index === currentIndex ? 'bg-[#0a7ac3] w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ugrás a(z) ${index + 1}. oldalra`}
          />
        ))}
      </div>
    </div>
  );
};

export default function EbookPage() {
  return (
    <Layout title="E-book" description="Pénzmosás elleni törvény TUDÁSTÁR eBook">
      <main className="bg-white min-h-screen py-10 md:py-14 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-3/5 space-y-6">
              {/* Category Label with Line */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#53A8C7]"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-[#53A8C7]">
                  EBOOK
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Pénzmosás elleni törvény <br />
                <span className="text-[#0a7ac3]">TUDÁSTÁR</span> eBook?
              </h1>

              {/* Description Texts */}
              <div className="space-y-0 text-slate-600 text-base md:text-base leading-relaxed max-w-2xl">
                <p>
                  Tapasztalataink szerint a Pénzmosási törvény (Pmt.) értelmezése és gyakorlati alkalmazása sokak számára kihívást jelent. Jelenleg <span className="font-bold text-slate-800">kevés az átfogó, hiteles és érthető oktatóanyag</span>, ezért sokan nem tudják, honnan érdemes tájékozódni a jogszabályi kötelezettségekről, egyáltalán hogyan kezdjenek neki a megfelelésnek.
                </p>
                <p>
                  E hiány pótlására írtunk egy könyvet az összes, Pmt.-vel kapcsolatos kötelezettségről - gyakorlat-orientáltan, érthetően, szakértőtől - 106 oldalon.
                </p>
              </div>

              {/* Feature List with Checkmarks */}
              <ul className="space-y-2">
                {[
                  {
                    title: "Az összes teendő",
                    desc: "A szolgáltatás megkezdésétől kezdve az ügyfélátvilágításon át a monitoring feladatokig, részletesen, példákkal, speciális esetekkel."
                  },
                  {
                    title: "Nyomtatványok, kitöltési útmutatók",
                    desc: "Az összes szükséges nyomtatvány elérhetősége, magyarázattal, kitöltési útmutatóval."
                  },
                  {
                    title: "NAV ellenőrzési gyakorlat",
                    desc: "Gyakorlati példák, mire kell figyelni, mit kérnek, ellenőrzési statisztikák és számos fontos információ."
                  },
                  {
                    title: "Ellenőrizendő listák",
                    desc: "A kapcsolódó listák elérhetősége: kiemelt kockázatú és offshore országok, szankciós listák, stb."
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1 text-green-500">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-2">
                <button 
                  className="w-full md:w-auto bg-[#53A8C7] hover:bg-[#0a7ac3] text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-xl shadow-blue-100 transition-all hover:scale-105 active:scale-95 border-none cursor-pointer"
                >
                  Kérem a könyvet
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-50 to-white p-5 rounded-[2.5rem] shadow-2xl border border-blue-100 mb-12 lg:mb-0">
                <EbookSlider />

                {/* Decorative dots pattern (from screenshot) */}
                <div className="absolute -top-6 -left-6 w-24 h-24 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[100px] rounded-full -z-10"></div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
