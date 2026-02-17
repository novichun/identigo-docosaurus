---
title: 'Milyen adatokat tölt ki az identiGO automatikusan?'
tags: [sugo]
question: 'Milyen adatokat tölt ki az identiGO automatikusan?'
slug: /automatikus-adatkitoltes/milyen-adatokat-tolt-ki-az-identigo-automatikusan
---

# Milyen adatokat tölt ki az identiGO automatikusan?

Az identiGO egyik legfontosabb előnye, hogy adószám alapján automatikusan kitölti az ügyfél Pmt.-szempontból releváns adatait. Ez jelentősen csökkenti a kézi adminisztrációt, és segíti a Pénzmosási törvény előírásainak való megfelelést.

## 🔎 Hol érhető el a funkció?

A funkció az Új ügyfél gombra kattintva mind az Új ügyfél hozzáadása, mind a Tömeges Ügyfélfeltöltés adószám alapján opciókat választva elérhető. Az adószám megadása után az identiGO kitölti a nyilvánosan elérhető adatokat, akár egyesével, akár tömegesen tölti fel az ügyfeleit.

## 🧾 1\. Automatikusan kitöltött cégadatok

Az identiGO a nyilvános céginformációk és az Opten adatbázis alapján a következő, a Pmt. megfelelés szempontjából releváns ügyfél-adatokat tölti ki:  
🏢 Cégadatok

* Cégnév  
* Cégjegyzékszám  
* Adószám státusza (érvényes vagy törölt)  
* Székhely \- amennyiben a cég székhely szolgáltatást vesz igénybe, az identiGO monitorozza és jelzi az exportban (a NAV gyakran kérdezi)  
* Főtevékenység (TEÁOR) \- Ha a főtevékenység bizalmi vagyonkezelő (BVK), az identiGO külön jelzi az exportokban

## 👤 2\. Automatikusan betöltött személyes adatok

Az identiGO a céghez tartozó összes nyilvános szereplő adatait kitölti az alábbiak szerint:  
👔 **Képviselők**

* név  
* anyja neve  
* születési idő  
* lakcím (amennyiben nyilvánosan elérhető)

👥 **Tulajdonosok**

* név  
* anyja neve  
* születési idő  
* lakcím

🧩 **Tényleges tulajdonos**   
Ha van Tényleges Tulajdonosi modul előfizetés,  illetve egyszemélyes cég ügyfél esetén az identiGO az Opten adatok alapján  automatikusan kitölti a következőket:

* név  
* lakcím  
* anyja neve  
* tulajdoni hányad

Mikor működik a tényleges tulajdonosi adatok kitöltése?

* Többszintű magyar tulajdonosi lánc esetén  
* Ha a végső tulajdonos természetes személy  
* Több tulajdonos esetén az identiGO mindegyiket külön rögzíti  
* Egyéni vállalkozó és egyszemélyes cég esetén a funkció automatikus azaz a Tényleges tulajdonosi modul nélkül is elérhető


Mikor nem működik?

* külföldi céges tulajdonos  
* Zrt., alapítvány, egyesület  
* nem nyilvános tulajdonosi struktúra

Ilyenkor a tényleges tulajdonosok adatait manuálisan kell felvinni

## 🎯 Összefoglaló – széleskörűen kitöltött adatbázis egy kattintással

Az identiGO a nyilvánosan elérhető céginformációk alapján az adószám megadásával automatikusan kitölti a következő adatokat:

* cégnév  
* cégjegyzékszám  
* székhely \+ székhelyszolgáltatás ténye  
* főtevékenység \+ BVK jelölés  
* képviselők adatai  
* tulajdonosok adatai  
* tényleges tulajdonos személyes adatai (ha nyilvános)
