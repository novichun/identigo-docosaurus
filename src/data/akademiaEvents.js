export const akademiaEvents = [
  {
    slug: 'nyito-workshop',
    title: 'Nyitó workshop: AML megfelelés ügyvédi irodákban',
    eyebrow: 'Kezdő szint',
    summary:
      'Áttekintés a legfontosabb Pmt. kötelezettségekről, azonnal alkalmazható sablonokkal és ellenőrzési fókuszokkal.',
    description:
      'Interaktív online workshop, ahol konkrét irodai folyamatokon keresztül mutatjuk meg, hogyan lehet egyszerűbben, átláthatóbban és auditbiztosan kezelni az AML feladatokat.',
    dateLabel: '2026. március 12.',
    isoDate: '2026-03-12',
    time: '10:00 - 11:30',
    location: 'Online (Zoom)',
    duration: '90 perc + kérdések',
    format: 'Online workshop',
    status: 'open',
    statusLabel: 'Nyitott jelentkezés',
    seats: '30 hely',
    price: 'Ingyenes',
    ctaLabel: 'Jelentkezés a workshopra',
    agenda: [
      'Pmt. kötelezettségek rövid, gyakorlati áttekintése',
      'Tipikus hibák NAV ellenőrzésnél és megelőzésük',
      'Digitális workflow: mit érdemes automatizálni elsőként',
      'Q&A: konkrét ügyvédi esetek átbeszélése',
    ],
    targetGroup: [
      'ügyvédi irodák és jogi csapatok',
      'pénzügyi és compliance munkatársak',
      'irodavezetők, akik rendeznék a belső megfelelési folyamatokat',
    ],
    speaker: 'identiGO compliance szakértői csapat',
  },
  {
    slug: 'compliance-mini-masterclass',
    title: 'Compliance mini masterclass: NAV-ellenőrzési felkészülés',
    eyebrow: 'Haladó szint',
    summary:
      'Mélyebb szakmai alkalom kockázatalapú szemléletről, belső kontrollpontokról és ellenőrzési felkészülésről.',
    description:
      'A mini masterclass azoknak szól, akik már rendelkeznek alapfolyamatokkal, és most a minőséget, sebességet és auditbiztonságot szeretnék feljebb vinni.',
    dateLabel: '2026. április 03.',
    isoDate: '2026-04-03',
    time: '09:30 - 12:00',
    location: 'Budapest',
    duration: '150 perc + kérdések',
    format: 'Személyes workshop',
    status: 'few',
    statusLabel: 'Kevés hely maradt',
    seats: '12 hely',
    price: '39 000 Ft + ÁFA',
    ctaLabel: 'Érdekel a masterclass',
    agenda: [
      'Kockázatalapú ügyfélátvilágítás haladó példákkal',
      'Belső kontrollok és felelősségi pontok kialakítása',
      'Ellenőrzésre felkészülés valós checklist alapján',
    ],
    targetGroup: [
      'haladó compliance és jogi szakemberek',
      'belső auditorok és folyamatgazdák',
    ],
    speaker: 'meghívott NAV-szakértő + identiGO',
  },
  {
    slug: 'esettanulmany-live',
    title: 'Esettanulmány live: valós megfelelési szituációk',
    eyebrow: 'Eszközök és példák',
    summary:
      'Élő előadás gyakorlati esettanulmányokkal: dokumentáció, monitorozás, döntési pontok.',
    description:
      'Rövid, fókuszált online alkalom. A fő hangsúly azon van, hogyan lesz a szabályozásból ténylegesen működő napi folyamat.',
    dateLabel: '2026. május 08.',
    isoDate: '2026-05-08',
    time: '10:00 - 11:00',
    location: 'Online',
    duration: '60 perc',
    format: 'Online előadás',
    status: 'soon',
    statusLabel: 'Hamarosan nyit',
    seats: 'Várólista',
    price: 'Ingyenes',
    ctaLabel: 'Kérem az értesítést',
    agenda: [
      '3 tipikus megfelelési helyzet döntési fák mentén',
      'Dokumentációs minimum és bizonyíthatóság',
      'Q&A és következő lépések',
    ],
    targetGroup: ['gyakorlati szemléletű szakemberek', 'vezetők és döntéshozók'],
    speaker: 'identiGO product és compliance csapat',
  },
];

export function getEventBySlug(slug) {
  return akademiaEvents.find((event) => event.slug === slug);
}

export function getSortedEvents() {
  return [...akademiaEvents].sort((a, b) => new Date(a.isoDate) - new Date(b.isoDate));
}
