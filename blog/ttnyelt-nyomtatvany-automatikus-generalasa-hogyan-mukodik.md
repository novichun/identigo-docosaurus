---
slug: ttnyelt-nyomtatvany-automatikus-generalasa-hogyan-mukodik
title: "TTNYELT nyomtatvány automatikus generálása - hogyan működik?"
authors: [Judit]
tags: []
date: 2024-01-19T10:22:15.003Z
---

Az identiGO a tárolt adatok alapján automatikusan generálja a TTNYELT nyomtatványt.

> ### FIGYELEM! A nyomtatványkitöltés nagyrészt automatikus, de bizonyos teendőket kézzel kell elvégezni!

[1. ÚJ bejelentés](https://forum.identigo.hu/t/ttnyelt-nyomtatvany-automatikus-generalasa-hogyan-mukodik/193#j-bejelents-1)
[2. MÓDOSÍTÓ bejelentés](https://forum.identigo.hu/t/ttnyelt-nyomtatvany-automatikus-generalasa-hogyan-mukodik/193#mdost-bejelents-2)
[3. Hogyan nyitom meg a letöltött file-t ÁNYK-ban?](https://forum.identigo.hu/t/ttnyelt-nyomtatvany-automatikus-generalasa-hogyan-mukodik/193#hogyan-nyitom-meg-a-letlttt-file-t-nyk-ban-3)

## ÚJ bejelentés
**Mikor kell ezt használnom?**

* ha a cég egyáltalán ***NEM szerepel*** a tényleges tulajdonosi nyilvántartásban
* ha a cégnek olyan tényleges tulajdonosa van, aki ***NEM szerepel*** a Központi Tényleges Tulajdonosi Nyilvántartásban

**Mit kell kézzel átírnom, kiegészítenem?**

1. **a lakcím mezőt** kell kézzel több részre bontani: város, közterület neve, közterület jellege, házszám
2. **több tényleges tulajdonos** esetén mindegyiknek külön oldalt generálunk - csak azt az oldalt kell beküldeni, amelyik tényleges tulajdonos NEM szerepel a rendszerben - a többi lap törölhető
3. **a tulajdoni érdekeltség jellegét**


## Módosító bejelentés
**Mikor kell ezt használnom?**

* ha a cég tényleges tulajdonosa szerepel a Központi Tényleges Tulajdonosi Nyilvántartásban, de ***valamelyik személyes adatában eltérés*** tapasztalható.

**Mit kell kézzel átírnom, kiegészítenem?**

1. **a lakcím mezőt** kell kézzel több részre bontani: város, közterület neve, közterület jellege, házszám
2. **több tényleges tulajdonos** esetén mindegyiknek külön oldalt generálunk - csak azt az oldalt kell beküldeni, amelyik tényleges tulajdonos adatában eltérés van
3. **a tulajdoni érdekeltség jellegét**
4. az eltéréssel érintett adatot a 3. blokkban kell feltüntetni (tehát pl. születési dátum eltérése esetén a 3. blokk "születési dátum" mezőjét kell kitölteni a TTNY-ben szereplő adattal)

## Hogyan nyitom meg a letöltött file-t ÁNYK-ban?
Az identiGO .xml formátumban generálja a nyomtatványt, melyet a következőképp tud beimportálni:

> **ÁNYK --> Szerviz --> Egyedi importálás (Fájltípus: XML állományok)**

**Kapcsolódó cikkek**:
[Mi az a TTNYELT nyomtatvány? Mikor kell benyújtanom?](https://forum.identigo.hu/t/mi-az-a-ttnyelt-nyomtatvany-mikor-kell-benyujtanom/113/3)
[TTNY lekérdezés - mikor szükséges? NAV állásfoglalás](https://forum.identigo.hu/t/ttny-lekerdezes-mikor-szukseges-nav-allasfoglalas/133)
[TTNY lekérdezés - nem találom ügyfelemet a tényleges tulajdonosi nyilvántartásban](https://forum.identigo.hu/t/ttny-lekerdezes-nem-talalom-ugyfelemet-a-tenyleges-tulajdonosi-nyilvantartasban/150)