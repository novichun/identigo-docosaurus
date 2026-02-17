---
slug: hogyan-tortenik-az-ensz-eu-szures-kit-szerinti-szures
title: "Hogyan történik az ENSZ / EU szűrés (Kit. szerinti szűrés)?"
authors: [Judit]
tags: []
date: 2022-01-20T12:26:37.127Z
---

A Pmt. hatálya alá tartozó szolgáltatók kötelesek ellenőrizni ügyfeleiket az ENSZ-EU szankciós listáin.
Ezen a listán olyan szervezetek, magánszemélyek szerepelnek, akik összefüggésbe hozhatók pénzmosással, terrorizmusfinanszírozással kapcsolatos bűncselekményekkel.

A Pmt. hatálya alá tartozó szolgáltatók kötelesek tehát elvégezni a Kit. szerinti szűrést az alábbi esetekben:

* üzleti kapcsolat létesítésekor
* a listák frissülésekor (kb. 2-3 hetes rendszerességgel frissül a lista)

Azok a szolgáltatók, akik 1000-nél több ügyféllel rendelkeznek, ezt a szűrést automatizált módon kötelesek végezni.

> **Az identiGO **MINDEN NAP** automatikusan lefuttatja az összes cégnevet, képviselőt, tulajdonost, valamint tényleges tulajdonost az aktuális ENSZ / EU listán.**

* a szűrés **eredményét és időpontját** az ügyfél adatlapján rögzítjük
*  NAV által elfogadott módon **exportálható listát készítünk** a szűrések eredményeiről
* **találat esetén** rendszerünk **értesítő emailt küld**, illetve az ügyféllistában piros sávval jelenik meg az adott cég

Az ügyféladatlapon pirossal emeljük ki azt a nevet, ahol egyezést mutat a lista, illetve innen elérhetők a listák. **Találat esetén javasoljuk a kézi ellenőrzést.**

[Hogyan tudok kézzel keresni az ENSZ-EU szankciós listán?](https://forum.identigo.hu/t/hogyan-tudok-kezzel-keresni-az-ensz-eu-listan/55)

:bangbang: **FIGYELEM! Találat esetén a szolgáltatónak azonnali bejelentési kötelezettsége van a NAV PEI felé a VPOP_PMT17 nyomtatványon!:bangbang:**


### :bulb: Tech info:

A rendszerünkben szereplő cégneveket, képviselő neveket, tulajdonos neveket, valamint tényleges tulajdonos neveket egy külön adatbázisban tároljuk el.

Ezeket az értékeket (neveket) átalakítottuk egy normalizált formára (szóközök, speciális karakterek nélküli formátum).

Mindkét szanckiós listán ilyen normalizált formában (is) szerepelnek a cég-, illetve személynevek. Ezek összevetésével garantált az esetleges egyezések kiszűrése. Az algoritmus az eredeti, valamint a normalizált formátumot is lefuttatja az ENSZ / EU aktuális szankciós listáján, egyezést keresve. Egyezés lehet szó eleji, szó közepi és szó végi is.