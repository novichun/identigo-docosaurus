---
slug: identigo-integracio-a-cashbookban
title: "identiGO integráció a Cashbookban"
authors: [Judit]
tags: []
date: 2025-10-29T12:12:15.954Z
---

Az identiGO mostantól közvetlenül integrálódik a Cashbook könyelői rendszerébe. 
A cél: hogy a pénzmosás elleni adminisztráció a lehető legkevesebb kézi beavatkozást igényelje, és hogy a könyvelők **a számukra leggyakrabban használt rendszerekben** lássák egy helyen az összes releváns információt. 
Így **nem kell több külön felületet figyelniük**, és a Pmt.-feladatokkal is **csak akkor kell foglalkozniuk, amikor valóban van teendő** – minden más automatikusan frissül a háttérben.

## ⚙️ Hogyan történik az összekapcsolás?

Az identiGO pár egyszerű lépésben összeköthető a Cashbook fiókkal: 

1. Ha már van identiGO fiókja, a böngészőben egy új oldalon jelentkezzen be a fiókjába. Ha még nincs identiGO fiók, akkor az "identiGO összekötés" gombra kattintva a regisztrációs űrlapon email címmel és jelszóval regisztrálhatja új fiókját.
2. Az identiGO összekötés gombra kattintva egy új böngésző fülön megnyílik az identiGO fiók, amiben engedélyezni kell a Cashbook összekötést.
3. Az engedélyezés után térjen vissza a Cashbook fiókba. A Cashbook automatikusan is ellenőrzi az összekötés állapotát, de az "Összekötés ellenőrzése" gombra kattintva ellenőrizheti, hogy a kapcsolat létrejött-e a két rendszer között. 
4. Sikeres összekötés után a szolgáltatások beállítás fülön be lehet állítani, hogy a könyvelt ügyfelek automatikusan legyenek szinkronizálva az identiGO fiókba. Ehhez a "Könyvelt ügyfelek automatikus szinkronizálása az identiGO fiókba" jelölőnégyzetet kell megjelölni.
A beállítást követően a Cashbook automatikusan megkezdi a könyvelt ügyfelek feltöltését az identiGO-ba. 

![cashbook-identigo-osszekotes|359x500](upload://eSyIlWD32KlbwO4IbCWw4ZsVeCo.png)
<br/><br/>
## :white_check_mark: Hogyan jelennek meg az identiGO adatai a Cashbook-ban? ###

Az alábbi kártya jelenik meg, ha Aktív az összekötés az identiGO fiókkal: 
![cashbook-aktiv|357x220, 75%](upload://q8IQ6KWewnZ4gDDgVMdQUHf0QZv.png)

Az áttekintő oldalon az alábbi feladatok jelenhetnek meg, ha van ügyfélhez kapcsolódó feladat:

* Hiányzó adatok (pl. képviselő, tényleges tulajdonos)
* Lejáró igazolvány
* Felülvizsgálat szükséges
* Találat az ENSZ/EU/PEP listán
* TTNY ellenőrzés szükséges
* Automatikus magas besorolás
* Törölt adószám

![cashbook-teendok|690x336](upload://8IFIQXss3Rh1fa6az2BRcgEv2ys.png)
<br/>

A **könyvelt cégek kezelése** menüpontban pedig ügyfelenként megjelenik az identiGO-val való kapcsolat állapota. Szürke, ha nincs felvéve/összekapcsolva identiGO-ban, kék, ha megvan a kapcsolat és nincs vele teendő és sárga ha van hozzá teendő:<br/>
![cashbook-ugyfellista|690x242](upload://A5xqoyRw5vAModBXJE5iz71oIxd.png)

Ez a megoldás lehetővé teszi, hogy csak akkor foglalkozzon a feladatokkal, ha **valóban** van teendő. Így hatékonyabbá válik az ügyfelek nyomon követése, gyorsabban reagálhat az esetleges feladatokra, és csökken a hibalehetőség – mindez a Pmt.-szabályozásnak való nagyobb arányú megfeleléssel párosul.

**Amennyiben bárhol elakad vagy részletesebb beállítási útmutatóra lenne szüksége, szívesen segítek.**