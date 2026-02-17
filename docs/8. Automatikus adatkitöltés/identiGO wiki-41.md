---
title: 'Automatikus adatkitöltés'
tags: [sugo]
question: 'Automatikus adatkitöltés'
slug: /automatikus-adatkitoltes/automatikus-adatkitoltes
---

# Automatikus adatkitöltés

Az automatikus adatkitöltés az identiGO egyik legfontosabb kényelmi funkciója. Célja egyrészt,  hogy gyorsítsa az ügyfelek felvitelét, másrészt hogy minimalizálja a manuális adatbevitelt és a hibázás lehetőségét azáltal, hogy a rendszer a nyilvános céginformációkból húzza  be a Pmt. megfelelés szempontjából releváns adatokat.

## ⚙️ Milyen adatforrásból dolgozik az identiGO?

Az identiGO jelenleg az Opten adatbázisából tölti be a nyilvánosan elérhető cégadatokat, ezáltal biztosítva a gyors, pontos és jogszabályi szempontból naprakész ügyfélfelvitelt.

A rendszer minden, a Pénzmosás elleni törvénynek való megfeleléshez szükséges, nyilvános forrásból elérhető adatot betölt a felvitelkor megadott adószám alapján. Ezek a következők:

* cégnév  
* székhely  
* főtevékenység (TEÁOR)  
* cégjegyzékszám  
* adószám státusza  
* érvényes / törölt / felfüggesztett  
* képviselők adatai:  
* név  
* anyja neve  
* születési dátum  
* lakcím  
* tulajdonosok adatai:  
* név  
* anyja neve  
* születési dátum  
* lakcím

Az adatok egy kattintással betöltődnek mind egyesével, mind tömegesen történő ügyfélfelvitel során 

## 👤 Tényleges tulajdonosok automatikus kitöltése

A tényleges tulajdonosok adatainak kitöltése az előfizetéstől függ:

**1\. Ha rendelkezik TT modullal**

Az identiGO ebben az esetben az Opten adatbázisban elérhető adatok alapján automatikusan betölti  a következő, a  tényleges tulajdonosra vonatkozó adatokat:

* tényleges tulajdonos nevét  
* anyja nevét  
* születési dátumát  
* lakcímét  
* tulajdoni hányadát

**2\. Ha nem rendelkezik TT modullal** 

Amennyiben nem rendelkezik TT modullal az automatikus adatkitöltés csak **egyszemélyes cégek esetében** működik. Ebben az esetben az identiGO felismeri, hogy csak egy tulajdonos van és automatikusan beállítja tényleges tulajdonosként akkor is, ha nincs TT modul előfizetés.  
Ez a funkció az egyéni vállalkozók és egyszemélyes Kft.-k felvitele esetén hasznos.

## 🔍 Miért hasznos az automatikus adatkitöltés?

Az automatikus adatkitöltés előnyei többek között:

* Gyors adatbevitel :  több tucat adat kitöltése történik meg automatikusan.  
* Kevesebb hibalehetőség: a manuális kitöltésből  adódó hibák elkerülhetőek  
* Azonnali Pmt.-s megfelelés: a szükséges alapadatok már első lépésben rendelkezésre állnak.  
* Tömeges feltöltés támogatása: pár másodperc alatt akár 100 cég adatai is betöltődnek.

## 💡 Hiányzó adatok kitöltése – kézzel

Bár az identiGO széleskörű automatikus adatkitöltést biztosít,  bizonyos információk a nyilvános adatbázisokban nem elérhetők . Ezeket érdemes az ügyfél felvitele után manuálisan megadni. Ez egyrészt lehetővé teszi a teljes körű átvilágítást,  másrészt biztosítja, hogy az automatikus jelző-és monitoring funkciók (figyelmeztetések, magas besorolások, TTNY, ENSZ–EU szűrés, stb.) hibátlanul működjenek.

A cél, hogy az ügyfél adatlapján minden olyan adat rendelkezésre álljon,  aminek a Pmt. értelmében szerepelni kell az  ügyfél átvilágítási adatlapon.   
Ennek érdekében a következőket javasolt megadni:

👤 Személyes adatok

* Születési név és hely  
* Állampolgárság

🏠 Tulajdonosi és képviselői adatok

* Tulajdoni hányad (tulajdonosoknál)  
* Tulajdonlás jellege (pl. 25% feletti, vagy képviselő, stb.)

🪪 Okmányadatok

* Személyazonosító okmány típusa  
* Okmány száma  
* Okmány lejárati ideje

## ⭐ Miért fontos ez?

A fentiek közül a következő két adat megadása kiemelten fontos,  mert ezek alapján tudnak lefutni az identiGO Pmt.-megfelelést támogató automatikus szűrő-és jelző funkciói

1. **Állampolgárság** : ez alapján működik az automatikus magas kockázati kategóriába sorolás, amennyiben az ügyfél a Pmt. szerint kiemelt kockázatú országhoz kötődik.A kockázati besorolás befolyásolja többek között a monitoring gyakoriságát illetve a kötelező szűréseket

2. **Személyazonosító okmány adatai :** az identiGO értesítést küld az okmányok közelgő lejárati dátumáról

⭐Összegzés  
Az identiGO automatikus adatkitöltés funkció az Opten nyilvános céginformációs adataiból tölti be a céges és személyes adatokat. A rendszer automatikusan kitölti a képviselőkre, tulajdonosokra és – TT modul esetén – a tényleges tulajdonos (ok) ra vonatkozó adatokat is. Ennek köszönhetően az ügyfelek felvitele gyors, pontos és minimális manuális munkát igényel.
