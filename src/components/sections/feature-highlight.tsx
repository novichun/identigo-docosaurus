import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

export function FeatureHighlight({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section className={clsx('', className)} {...props}>
      <div className='py-16'>
        <div className="flex flex-wrap mx-0 bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-xs border border-mist-200 dark:border-white/10">
          <div 
            className="lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] max-w-full bg-cover bg-center bg-no-repeat relative z-0 min-h-[25rem]"
            style={{ backgroundImage: 'url("https://identigo.hu/img/torveny.png")' }}
          >
          </div>
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] max-w-full">
            <div className="p-10 xl:p-16 lg:p-16 md:p-12">
              <div className="relative text-lg leading-relaxed pt-10">
                <div className="absolute top-0 left-0 text-[6.5rem] text-mist-200 dark:text-mist-800 opacity-30 leading-none font-serif select-none pointer-events-none transform -translate-y-8">
                  “
                </div>
                <p className="font-bold mb-4 text-mist-950 dark:text-white relative z-10">Mindig a jogszabályok nyomában – Ön helyett is figyelünk.</p>
                <p className="text-sm mb-4 text-mist-700 dark:text-mist-400 relative z-10">
                  Az identiGO mögött nem csupán technológia, hanem szakmai háttér is áll. Digitális megfelelési szakértőnk folyamatos kapcsolatban van a NAV-val, figyeli a
                  friss jogszabályokat, rendeleteket, és aktívan részt vesz az értelmezésükben.
                </p>
                <p className="text-sm mb-4 text-mist-700 dark:text-mist-400 relative z-10">
                  Ezért van az, hogy az identiGO funkciói mindig naprakészek: lekövetik a törvényi változásokat, a legfrissebb elvárások szerint működnek, és dokumentumai
                  megfelelnek a hatósági ellenőrzések során is.
                </p>
                <div className="space-y-2 mb-8 relative z-10">
                  <p className="text-sm text-mist-950 dark:text-white flex items-center gap-2">
                    <span>✅</span> NAV által elfogadott dokumentumformátumok
                  </p>
                  <p className="text-sm text-mist-950 dark:text-white flex items-center gap-2">
                    <span>✅</span> Ellenőrzés-biztos nyilvántartások
                  </p>
                  <p className="text-sm text-mist-950 dark:text-white flex items-center gap-2">
                    <span>✅</span> Jogszabálykövető működés automatikusan
                  </p>
                </div>
                <div className="flex items-center relative z-10">
                  <div>
                    <h5 className="text-base font-semibold text-mist-950 dark:text-white">Az identiGO-val nemcsak rendszert, hanem szakmai biztonságot is kap.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
