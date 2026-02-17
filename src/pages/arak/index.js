import React, { useMemo, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Main } from '../../components/elements/main';
import { Plan, PricingMultiTier } from '../../components/sections/pricing-multi-tier';
import { ButtonLink, SoftButtonLink } from '../../components/elements/button';

const VAT_RATE = 0.27;
const CUSTOMER_OPTIONS = [20, 50, 100, 200, 300, 400, 500];

const PRICE_TABLE = {
  BASIC: {
    20: 1800,
    50: 2500,
    100: 3600,
    200: 4200,
    300: 4800,
    400: 5400,
    500: 6000,
  },
  PREMIUM: {
    20: 3600,
    50: 5000,
    100: 7200,
    200: 8400,
    300: 9600,
    400: 10800,
    500: 12000,
  },
};

const FEATURE_TOOLTIPS = {
  FREE: [
    {
      id: 'cegfigyeles_F',
      label: 'Cégfigyelés',
      tip:
        'Adószám alapján figyeljük a cégeket, és értesítjük, ha a Pénzmosási törvény szerinti adat változik (pl. képviselő, tulajdonos, törölt adószám). Kiváltható vele más céginfó előfizetés.',
    },
    {
      id: 'cegtortenet_F',
      label: 'Visszakereshető cégtörténet',
      tip:
        'A rendszer menti mind az identiGO-ban, mind a nyilvános céginformációban történt változásokat, ezek egyszerű felületen visszakereshetők. Szűrhető lista dátum, ügyfél, változástípus szerint.',
    },
    {
      id: 'adatszinkron_F',
      label: 'Adatszinkron/frissítés 1 kattintással',
      tip:
        'Egyszerű összehasonlító táblázatban láthatja az identiGO-ban tárolt adatokat és a nyilvános céginformáció aktuális adatait. Az eltérések egyből látszanak, az adatok egy kattintással frissíthetők.',
    },
    {
      id: 'magas_kockazat_F',
      label: 'Automatikus magas kockázat',
      tip:
        'Objektív kockázati tényező esetén a rendszer automatikusan magas kategóriát alkalmaz, hogy ebből biztos ne legyen probléma ellenőrzésen (pl. kiemelt kockázatú, vagy offshore ország érintettség, stb.)',
    },
    {
      id: 'tobb_Szolgaltato_F',
      label: '1 szolgáltató',
      tip:
        'Ha Ön több szolgáltatóval nyújt Pmt. hatálya alá tartozó szolgáltatást (pl. egy Kft.-vel és egy egyéni vállalkozással), lehetősége van ügyfeleit egy előfizetés alatt, egy fiókban kezelni - külön díj nélkül.',
    },
    {
      id: 'ttnyelt_F',
      label: 'Automatikus nyomtatványkitöltés',
      tip:
        'KSZ17, AFADREG, TTNYELT és PMT17 nyomtatvány kitöltése automatikusan, pár kattintással az identiGO-ban tárolt adatok alapján.',
    },
  ],
  BASIC: [
    {
      id: 'tt-ensz-eu_A',
      label: 'ENSZ-EU / közszereplő szűrés',
      tip:
        'Az identiGO automatikusan futtatja naponta a szankciós és kiemelt közszereplői szűréseket, eredményét NAV által elfogadott formátumban rögzíti.',
    },
    {
      id: 'adatkitoltes_A',
      label: 'Automatikus adatkitöltés 1 kattintással',
      tip:
        'Adószám alapján automatikusan töltjük ki az ügyféladatok nagyrészét a nyilvános céginformáció alapján. Gyors beköltözés, kevesebb hibalehetőség.',
    },
    {
      id: 'teendok_A',
      label: 'Figyelmeztetés teendőkre',
      tip:
        'Esedékes kockázati felülvizsgálat, beküldendő TTNYELT nyomtatvány, lejáró igazolvány - mindenről értesítjük, semmi sem kerülheti el a figyelmét.',
    },
    {
      id: 'atvilagitas_A',
      label: 'Ügyfélátvilágítási adatlap',
      tip:
        'Ügyfélátvilágítási adatlap automatikusan kitöltött adatokkal, egyszerű webes felületen. PDF és DOCX formátumban, magyar és angol nyelven.',
    },
    {
      id: 'dokumentumtarolas_A',
      label: 'Dokumentumtárolás',
      tip:
        'Tárolja ügyfele dokumentumait külön kategóriákba rendezve (adatlapok, szerződések, igazolványok), hogy később pillanatok alatt megtaláljon bármit.',
    },
    {
      id: 'lejaro_igazolvanyok_A',
      label: 'Értesítés lejáró igazolványokról',
      tip:
        'Nem kell többet excelben tárolni az igazolványokat, vagy kézzel visszakeresni: az identiGO már a lejárat előtt 30 nappal figyelmeztet, hogy újat kell beszerezni.',
    },
  ],
  PREMIUM: [
    {
      id: 'cegfigyeles_P',
      label: 'Cégfigyelés',
      tip:
        'Adószám alapján figyeljük a cégeket, és értesítjük, ha a Pénzmosási törvény szerinti adat változik (pl. képviselő, tulajdonos, törölt adószám). Kiváltható vele más céginfó előfizetés.',
    },
    {
      id: 'cegtortenet_P',
      label: 'Visszakereshető cégtörténet',
      tip:
        'A rendszer menti mind az identiGO-ban, mind a nyilvános céginformációban történt változásokat, ezek egyszerű felületen visszakereshetők. Szűrhető lista dátum, ügyfél, változástípus szerint.',
    },
    {
      id: 'adatszinkron_P',
      label: 'Adatszinkron/frissítés 1 kattintással',
      tip:
        'Egyszerű összehasonlító táblázatban láthatja az identiGO-ban tárolt adatokat és a nyilvános céginformáció aktuális adatait. Az eltérések egyből látszanak, az adatok egy kattintással frissíthetők.',
    },
    {
      id: 'magas_kockazat_P',
      label: 'Automatikus magas kockázat',
      tip:
        'Objektív kockázati tényező esetén a rendszer automatikusan magas kategóriát alkalmaz, hogy ebből biztos ne legyen probléma ellenőrzésen (pl. kiemelt kockázatú, vagy offshore ország érintettség, stb.)',
    },
    {
      id: 'tobb_Szolgaltato_P',
      label: '5 szolgáltató',
      tip:
        'Ha Ön több szolgáltatóval nyújt Pmt. hatálya alá tartozó szolgáltatást (pl. egy Kft.-vel és egy egyéni vállalkozással), lehetősége van ügyfeleit egy előfizetés alatt, egy fiókban kezelni - külön díj nélkül.',
    },
    {
      id: 'ttnyelt_P',
      label: 'Automatikus nyomtatványkitöltés',
      tip:
        'KSZ17, AFADREG, TTNYELT és PMT17 nyomtatvány kitöltése automatikusan, pár kattintással az identiGO-ban tárolt adatok alapján.',
    },
  ],
};

const formatFt = (value) =>
  new Intl.NumberFormat('hu-HU').format(Math.round(value)) + ' Ft';

export default function Pricing() {
  const { siteConfig } = useDocusaurusContext();
  const [customerNum, setCustomerNum] = useState(20);
  const [yearly, setYearly] = useState(true);
  const [currentType, setCurrentType] = useState('BASIC');
  const [ttlkEnabled, setTtlkEnabled] = useState(false);

  const ttlkMonthlyNet = 700;

  const pricing = useMemo(() => {
    const baseMonthly = PRICE_TABLE[currentType][customerNum];
    const ttlkMonthly = ttlkEnabled ? ttlkMonthlyNet : 0;
    const monthlyNet = baseMonthly + ttlkMonthly;
    const yearlyNet = monthlyNet * 12;
    const net = yearly ? yearlyNet : monthlyNet;
    const gross = net * (1 + VAT_RATE);

    return {
      baseMonthly,
      ttlkMonthly,
      monthlyNet,
      yearlyNet,
      net,
      gross,
    };
  }, [currentType, customerNum, yearly, ttlkEnabled]);

  const planPrice = (plan, isYearly) => {
    const monthly = PRICE_TABLE[plan][customerNum];
    if (isYearly) {
      return formatFt(monthly * 12);
    }
    return formatFt(monthly);
  };

  const planPeriod = yearly ? '/ év' : '/ hó';

  const renderFeature = (item) => (
    <span className="inline-flex items-center gap-2">
      <span>{item.label}</span>
      <span className="group relative inline-flex">
        <span
          tabIndex={0}
          aria-describedby={item.id}
          className="cursor-help text-mist-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          ?
        </span>
        <span
          id={item.id}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-[calc(100%+0.5rem)] z-10 w-[260px] -translate-x-1/2 rounded-lg border border-mist-950/10 bg-white px-3 py-2 text-xs text-mist-700 opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-within:opacity-100 dark:border-white/10 dark:bg-mist-950 dark:text-white"
        >
          {item.tip}
        </span>
      </span>
    </span>
  );
  return (
    <Layout
      title={`${siteConfig.title} - Árak`}
      description="identiGO - Árak">
      <Main>
        <div className="mx-auto w-full max-w-5xl px-4 pt-8">
          <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-mist-700 dark:text-mist-300">
                Ügyfélszám
              </div>
              <div className="relative">
                <select
                  id="customer-num"
                  className="min-w-[160px] rounded-lg border border-mist-950/10 bg-white px-3 py-2 text-sm text-mist-950 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-mist-950 dark:text-white"
                  value={customerNum}
                  onChange={(event) => setCustomerNum(Number(event.target.value))}>
                  {CUSTOMER_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      {value} ügyfélig
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-full border border-mist-950/10 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-mist-950">
              <div className="relative flex">
                <div
                  className="absolute inset-y-1 rounded-full bg-primary shadow-sm transition-transform duration-300"
                  style={{
                    width: '50%',
                    transform: yearly ? 'translateX(100%)' : 'translateX(0%)',
                  }}
                />
                <button
                  type="button"
                  className="relative z-10 min-w-[140px] rounded-full px-4 py-2 text-sm font-semibold text-mist-950 transition-colors dark:text-white"
                  onClick={() => setYearly(false)}>
                  Havi fizetés
                </button>
                <button
                  type="button"
                  className="relative z-10 min-w-[140px] rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
                  onClick={() => setYearly(true)}>
                  Éves fizetés
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-6 max-w-3xl rounded-xl border border-mist-950/10 bg-mist-950/2.5 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-mist-950 dark:text-white">
                  Tényleges tulajdonos modul
                </div>
                <div className="text-xs text-mist-600 dark:text-mist-400">
                  +700 Ft / hónap
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={ttlkEnabled}
                  onChange={(event) => setTtlkEnabled(event.target.checked)}
                />
                <div className="h-6 w-10 rounded-full bg-mist-950/20 transition peer-checked:bg-primary dark:bg-white/20">
                  <div className="h-5 w-5 translate-x-0.5 translate-y-0.5 rounded-full bg-white transition peer-checked:translate-x-[1.25rem]" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <PricingMultiTier
          id="pricing"
          headline="Árak a vállalkozása igényeihez."
          subheadline="Válasszon ügyfélszámot és fizetési ciklust, majd hasonlítsa össze a csomagokat."
          plans={
            <>
              <Plan
                name="Ingyenes"
                price="0 Ft"
                period="/hó"
                subheadline={<p>5 ügyfélig, fizetési kötelezettség nélkül</p>}
                features={FEATURE_TOOLTIPS.FREE.map(renderFeature)}
                cta={
                  <SoftButtonLink href="https://identigo.hu/app/registration" size="lg">
                    Ingyenes DEMO
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Alap"
                price={planPrice('BASIC', yearly)}
                period={planPeriod}
                subheadline={<p>Alap szolgáltatások a mindennapokra</p>}
                features={FEATURE_TOOLTIPS.BASIC.map(renderFeature)}
                className={currentType === 'BASIC' ? 'ring-2 ring-primary' : undefined}
                cta={
                  <ButtonLink
                    href="#pricing"
                    size="lg"
                    onClick={() => setCurrentType('BASIC')}>
                    Tovább a fizetéshez
                  </ButtonLink>
                }
              />
              <Plan
                name="Prémium"
                price={planPrice('PREMIUM', yearly)}
                period={planPeriod}
                subheadline={<p>Minden ami alap, plusz extra kényelmi funkciók</p>}
                badge="Népszerű"
                features={FEATURE_TOOLTIPS.PREMIUM.map(renderFeature)}
                className={currentType === 'PREMIUM' ? 'ring-2 ring-primary' : undefined}
                cta={
                  <SoftButtonLink href="#pricing" size="lg" onClick={() => setCurrentType('PREMIUM')}>
                    Ezt választom
                  </SoftButtonLink>
                }
              />
            </>
          }
        />

        <div className="mx-auto mb-16 w-full max-w-3xl px-4">
          <div className="rounded-xl border border-mist-950/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-start justify-between text-sm text-mist-700 dark:text-mist-300">
              <span>
                {currentType === 'BASIC' ? 'Alap' : 'Prémium'} csomag, {customerNum}{' '}
                ügyfélig - {yearly ? 'éves' : 'havi'} előfizetés
              </span>
              <div className="text-right">
                <div className="font-semibold text-mist-950 dark:text-white">
                  {formatFt(pricing.gross)}
                </div>
                <div className="text-xs text-mist-500 dark:text-mist-400">
                  {formatFt(pricing.net)} + Áfa
                </div>
              </div>
            </div>
            {ttlkEnabled && (
              <div className="mb-4 flex items-center justify-between text-xs text-mist-600 dark:text-mist-400">
                <span>Tényleges tulajdonos modul</span>
                <span>+{formatFt(pricing.ttlkMonthly * (yearly ? 12 : 1))}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-mist-950 dark:text-white">
                Összesen fizetendő
              </h3>
              <div className="text-right">
                <div className="text-xl font-bold text-mist-950 dark:text-white">
                  {formatFt(pricing.gross)}
                </div>
                <div className="text-xs text-mist-500 dark:text-mist-400">
                  {formatFt(pricing.net)} + Áfa
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
