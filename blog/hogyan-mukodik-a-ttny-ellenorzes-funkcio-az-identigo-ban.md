---
slug: hogyan-mukodik-a-ttny-ellenorzes-funkcio-az-identigo-ban
title: "Hogyan működik a TTNY ellenőrzés funkció az identiGO-ban?"
authors: [Judit]
tags: []
date: 2022-08-31T09:16:28.725Z
---

Az Afad. törvény életbelépésével a Pmt. hatálya alá tartozóknak újabb kötelezettségük keletkezett: bizonyos ügyfelek esetében össze kell vetniük a náluk lenyilatkozott adatokat a központi tényleges tulajdonosi nyilvántartás adataival, és ennek eredményét rögzíteni, valamint az átvilágítási adatlapon feltüntetni.

**Mikor szükséges a TTNY ellenőrzés? És mikor nem?**
A NAV PEI-vel egyeztetve az alábbi állásfoglalást kaptuk:

> Az Afad törvény rendelkezései alapján a központi tényleges tulajdonosi nyilvántartásból való lekérdezés **a legtöbb esetben opcionális**, tehát a szolgáltatónak kell eldöntenie, hogy azt beépítí-e az ügyfélátvilágítási és monitoring folyamataiba.
> 
> Vannak azonban esetek, amikor a lekérdezés kötelező, ezeket az eseteket a Pmt. szabályozza. Ilyen például:
> 
> * összetett, bonyolult tulajdonosi struktúra esetén
> * ha kétség merül fel a tényleges tulajdonos személyével kapcsolatban
> * ha a szolgáltató a tényleges tulajdonos adatait a képviselő nyilatkoztatásának mellőzésével rögzíti
> 
> Bár a felsorolásban nem szerepel, de **magas kockázatú ügyfél esetén szintén javasoljuk** az ellenőrzést a központi tényleges tulajdonosi nyilvántartásban.

Ennek való megfelelésként vezettük be a TTNY ellenőrzés nevű mezőt, melyet 3 különböző értékre lehet állítani:
* Nem kell ellenőrizni (a fentebb leírt esetkörök egyikébe sem esik bele az ügyfél)
* Egyező - rögzíteni kell a lekérdezés időpontját
* Eltérő - [TTNYELT nyomtatványt kell beküldeni](https://forum.identigo.hu/t/mi-az-a-ttnyelt-nyomtatvany-mikor-kell-benyujtanom/113/1), rögzíteni a beküldés időpontját

A TTNY ellenőrzés mező kitöltésétől függően az alábbi teendők jelenhetnek meg a főoldalon:

* **ha nincs kitöltve**, teendőként megjelenik ("TTNY ellenőrzés szükséges")
* **ha EGYEZŐ**-re van állítva, eltűnik a teendő
* **ha ELTÉRÉS**-re van állítva, **de nincs dátum megadva**, hogy mikor lett beküldve a TTNYELT adatlap, akkor teendőként megjelenik ("TTNYELT nyomtatványt beküldeni")
* **ha ELTÉRÉS**-re van állítva, és **meg van adva dátum**, akkor teendőként megjelenik ( "TTNYELT beküldve"). Itt szükség lehet további utánkövetésre, hogy az ügyfél rendezte-e a problémát, és az adatok újra szinkronba kerültek-e.


Kapcsolódó: 
[Mi az a TTNYELT nyomtatvány? Mikor kell benyújtanom?](https://forum.identigo.hu/t/mi-az-a-ttnyelt-nyomtatvany-mikor-kell-benyujtanom/113) 
[Hogyan regisztrálhatok a tényleges tulajdonosi / UBO nyilvántartásba?](https://forum.identigo.hu/t/hogyan-regisztralhatok-a-tenyleges-tulajdonosi-ubo-nyilvantartasba/85)
[Mi a teendő, ha egy ügyfelem TT indexe 6 alá esik? ](https://forum.identigo.hu/t/mi-a-teendo-ha-egy-ugyfelem-tt-indexe-6-ala-esik/89)
[Hol találom a TT index alapján megbízhatatlan adatszolgáltatókat?](https://forum.identigo.hu/t/hol-talalom-a-tt-index-alapjan-megbizhatatlan-adatszolgaltatokat/112)