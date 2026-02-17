---
slug: uj-funkcio-kiemelt-kozszereplo-lista-ellenorzese
title: "Új funkció - Kiemelt közszereplő lista ellenőrzése"
authors: [Judit]
tags: []
date: 2025-03-24T11:19:01.876Z
---

![486679439_122154846542371633_4614164726706145768_n|596x500](upload://l33yY5IUkojDzs91NvrH3NHnHXW.jpeg)

2025 január elsejétől a Pénzmosási törvény új kötelezettséget írt elő a szolgáltatók számára: rendelkezniük kell olyan kockázatértékelési rendszerrel, amely alapján képesek annak megállapítására, hogy az ügyfele kiemelt közszereplő-e (vagy annak közeli hozzátartozója, vele közeli kapcsolatban álló személy-e).
Ez a feladat - hasonlóan az ENSZ-EU szűrések futtatásához - kézi erővel szinte kivitelezhetetlen.

**Örömmel jelentjük be, hogy az identiGO ezt a folyamatot is automatizálta - Önnek tehát nem kell sem a lista folyamatos böngészésével bajlónia, sem NAV bírságtól tartania.**

## Hogyan működik? ##
Az identiGO az egyik legnagyobb szolgáltató az adatbázisát használja a szűrések futtatására. Naponta ellenőrizzük a rendszerünkben tárolt tényleges tulajdonosok neveit, és vetjük össze a listában található adatokkal.
Ha egyezést találunk, értesítést küldünk, valamint automatikusan magas kockázatba soroljuk az ügyfelet. 

A szűrés futtatásakor nem csak nevet, hanem (ha rendelkezésre áll) születési dátumot is összevetünk, ezzel csökkentve a fals találatok számát. 

## Találati pontosság ##
A kiemelt közszereplői lista jóval nagyobb terjedelmű, mint az ENSZ / EU szankciós listák, így gyakori neveknél még magyar viszonylatban is több fals találatot eredményez. Ahol tudjuk, kiszűrjük ezeket a találatokat.

A fals találatok számának csökkentése érdekében a 100% egyezést vettük alapul, a néven kívül pedig vizsgáljuk a születési dátum egyezését is.

Lássunk egy példát:

:magnifying_glass_tilted_right: **Listán szereplő név**: Varga Rozália Eszter (szül.: 1977.01.01.)
:white_check_mark: **Találatnak számít**: Eszter Rozália Varga, Varga Eszer Rozália, HA a születési év  1977.
:cross_mark: **NEM számít találatnak**: Varga Eszer, Varga Rozália, Eszter Rozália
:cross_mark: **NEM számít találatnak**: Varga Eszer Rozália, HA a születési dátuma nem egyezik meg a PEP listán található születési dátummal

A nevek sorrendje tehát nem számít, viszont több utónév esetén mindegyiket szükséges rögzíteni ahhoz, hogy találatot eredményezzen.

## Miért van ilyen sok egyezés? ##

Ennek legfőbb oka, hogy a listán nagyon sok gyakori név szerepel - magyar viszonylatban leginkább.

Az identiGO éppen ezért nem csak a nevet, hanem a születési dátumot is összeveti - egyelőre évszám szinten.

Ez az adat azonban sokszor nincs megadva - vagy a kiemelt közszereplői listán, vagy az identiGO-ban.

## Mit tegyek, ha egyezést találok? ## 

Mielőtt felkeresnék az érintett ügyfelet, mindenképpen javasoljuk az alábbi oldalon ellenőrizni a találatot:

https://www.opensanctions.org/datasets/peps/

Itt már szerepelhetnek olyan információk, amiből láthatjuk, hogy a találat nem igazi, csak véletlen névegyezés következménye.

## Hogyan tudom törölni a téves találatokat? ##

Az ügyfél adatlapján a piros sávban az "Ellenőriztem, nem igazi találat" gombra kattintva az értesítés eltűnik, illetve kikerül a magas besorolásból.
<br/>
![](upload://hY4hK0O7oG3dCRn7zusBaYK5iHk.png)
<br/>
## Hogyan csökkenthetik Előfizetőink az egyezések számát? ##

A tényleges tulajdonos születési dátumának megadásával csökkenthetők a téves egyezések.

## Hogyan tud segíteni az identiGO az egyezések számának csökkentésében? ##

Jelenleg csak a születési évszámokat vetjük össze, mert sok esetben csak ez szerpel a PEP listán, a pontos dátum nem. A továbbiakban azonban a pontos dátumokat fogjuk összevetni (ha rendelkezésre áll), ezt a fejlesztést a következő hetekben igyekszünk elvégezni.