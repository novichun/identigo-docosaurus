import React from 'react';
import Layout from '@theme/Layout';

export default function RendPage() {
  return (
    <Layout title="Hogyan rakok rendet" description="Az identiGO rendrakó folyamata">
      <main className="bg-slate-50 min-h-screen">
        {/* Newsletter Hero Section - Based on identigo.hu/#hirlevel */}
        <section className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/img/rendrakas.png')",
              backgroundColor: '#0f2b46' // Fallback color
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              {/* Pre-title with line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-white opacity-60"></div>
                <span className="text-sm font-bold tracking-widest uppercase opacity-80">
                  HÍRLEVÉL FELIRATKOZÁS
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Hogy rakjak rendet? - 8 részes minitanfolyam
              </h1>

              {/* Description Text */}
              <div className="space-y-6 text-lg md:text-xl opacity-95 max-w-3xl mb-12 leading-relaxed">
                <p>
                  8 részes e-mail sorozatunkban lépésről lépésre megmutatjuk, hogyan segíthet ebben az identiGO – az automatizált, digitális megoldás, amely egyszerűbbé, gyorsabbá és átláthatóbbá teszi a megfelelési folyamatokat.
                </p>
                <p>
                  Sorozatunk az alapoktól indul: hogyan kezdjen nagytakarításba, és hogyan váltsa le a kézi adminisztrációt hatékony, szabályozásnak megfelelő digitális eszközökre.
                </p>
                <p className="font-semibold text-blue-100">
                  Iratkozzon fel, és vágjunk bele együtt a rendrakásba!
                </p>
              </div>

              {/* Subscription Form */}
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <div className="flex-grow">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email cím" 
                    required 
                    className="w-full px-6 py-4 rounded-xl text-slate-900 text-lg border-2 border-transparent focus:border-blue-400 outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-[#53A8C7] hover:bg-blue-400 border-none text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Feliratkozás
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(83,168,199,0.12),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(83,168,199,0.08),transparent_35%)]"></div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#53A8C7]"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-[#53A8C7]">Folyamat</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
                Így lesz rend a megfelelésben
              </h2>
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Nem újabb adminisztrációt adunk, hanem egy működő rendszert: egyértelmű felelősségekkel,
                átlátható folyamatokkal és ellenőrzésbiztos dokumentációval.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Helyzetkép 60 percben',
                  desc: 'Átnézzük a jelenlegi működést, azonosítjuk a kockázatos pontokat és a legnagyobb időveszteségeket.',
                },
                {
                  step: '02',
                  title: 'Prioritási terv',
                  desc: 'Egy tiszta, ütemezett tervet készítünk: mi az azonnali teendő, mi automatizálható, és mi halasztható.',
                },
                {
                  step: '03',
                  title: 'Bevezetés és finomhangolás',
                  desc: 'A napi működésbe illesztjük a rendszert, majd valós használat alapján finomítjuk a folyamatokat.',
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-lg shadow-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black tracking-tight text-slate-900">{item.step}</span>
                    <span className="w-10 h-[3px] rounded-full bg-[#53A8C7]"></span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-[#9ad6ea] text-sm font-bold uppercase tracking-wide mb-2">Következő lépés</p>
                <h3 className="text-2xl font-extrabold">Kérjen személyre szabott rendrakási tervet</h3>
              </div>
              <button className="bg-[#53A8C7] hover:bg-[#3f98b8] border-none text-white font-bold px-8 py-3 rounded-xl transition-colors cursor-pointer">
                Időpontot kérek
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
