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

        {/* Features/Steps Section - NICER AND BRIGHTER DESIGN */}
        <section className="py-24 relative overflow-hidden bg-white ">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Hogyan rakok rendet az identiGO-val?
              </h2>
              <div className="w-24 h-1.5 bg-[#0a7ac3] mx-auto rounded-full mb-8"></div>
              <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Egyszerű, átlátható és hatékony folyamat, amellyel búcsút inthet a papírmunkának és az átláthatatlan táblázatoknak.
              </p>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                <div  className="group bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-100/50  transition-all hover:translate-y-[-12px] hover:border-blue-200">
                  <div className="w-20 h-20 bg-gradient-to-br bg-[#53A8C7]  text-white rounded-3xl flex items-center justify-center mb-8 text-3xl font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900">Állapotfelmérés</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Rövid audit a jelenlegi folyamatokról. Megnézzük, hol vannak a szűk keresztmetszetek és a hibalehetőségek a napi adminisztráció során.
                  </p>
                </div>

                <div className="group bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-100/50 border border-blue-50 transition-all hover:translate-y-[-12px] hover:border-blue-200">
                  <div className="w-20 h-20 bg-gradient-to-br bg-[#53A8C7] text-white rounded-3xl flex items-center justify-center mb-8 text-3xl font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900">Prioritások</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Mit kell azonnal rendezni és mi várhat. Kijelöljük a legfontosabb lépéseket a gyors siker és a jogszabályi megfelelés érdekében.
                  </p>
                </div>

                <div className="group bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-100/50 border border-blue-50 transition-all hover:translate-y-[-12px] hover:border-blue-200">
                  <div className="w-20 h-20 bg-gradient-to-br bg-[#53A8C7] text-white rounded-3xl flex items-center justify-center mb-8 text-3xl font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900">Bevezetés</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Fokozatos, csapatbarát átállás. Az identiGO segítségével zökkenőmentessé tesszük a napi működést és felszabadítjuk a kollégák idejét.
                  </p>
                </div>
              </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
