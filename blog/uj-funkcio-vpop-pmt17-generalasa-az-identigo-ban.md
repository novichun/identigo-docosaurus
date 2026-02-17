---
slug: uj-funkcio-vpop-pmt17-generalasa-az-identigo-ban
title: "Új funkció - VPOP_PMT17 generálása az identiGO-ban"
authors: [Judit]
tags: []
date: 2025-12-08T15:32:05.588Z
---

Mostantól az identiGO nemcsak a TTNYELT bejelentést tudja előállítani, hanem a pénzmosási gyanú bejelentésére szolgáló VPOP_PMT17 nyomtatványt.

A funkció célja egyszerű:
**hogy az identiGO automatikusan kitöltse a nyomtatvány közel 90%-át**, Önnek pedig csak át kell néznie a mezőket, megadni a bejelentés indokát, majd letölteni a NAV által elfogadott XML-t.

Ez különösen fontos, mert a Pmt. szerint a pénzmosási gyanú esetén a bejelentés határozottan kötelező, elmulasztása pedig 1.000.000 Ft-tól induló bírságot vonhat maga után.

# 📍 Hol találom a VPOP_PMT17 nyomtatvány generálása funkciót?

> :backhand_index_pointing_right: **Bal oldali menü --> Nyomtatványkitöltő**

A Nyomtatványok menüpont alatt egy helyen érhetők el a Pmt.-vel kapcsolatos összes űrlap:

* **VPOP_KSZ17** – kijelölt személy bejelentése
* **AFADREG** – TTNY regisztráció
* **TTNYELT** – TTNY eltérésjelzés
* **VPOP_PMT17** – pénzmosási gyanú bejelentése *(új)*

# ⚠️ Fontos feltétel a VPOP_PMT17 generálásához

Ahogyan a többi Pmt.-s nyomtatvány esetében is:

:backhand_index_pointing_right: **legalább egy Szolgáltató rögzítése kötelező.**

A NAV számára minden bejelentésnél fel kell tüntetni:

* a Szolgáltató adatait,
* és a bejelentés megtételére jogosult személyt.

Ha nincs rögzítve Szolgáltató, a funkciót nem tudja használni.

# VPOP_PMT17 nyomtatvány kitöltése az identiGO-ban

> ## <a href="https://forum.identigo.hu/t/vpop-pmt17-nyomtatvany-kitoltesi-utmutato-gyakorlati-segedlet/454" target="_blank">Részeltes kitöltési útmutató VPOP_PMT17 >></a>

### :one: Ügyfél kiválasztása --> automatikus adatbetöltés :white_check_mark: 

Amint kiválasztja az ügyfelet, az identiGO automatikusan kitölti:

* a cégnév
* adószám
* cégforma
* főtevékenység
* székhely
* képviselő(k) identiGO-ban tárolt adatai
* tényleges tulajdonos(ok) identiGO-ban tárolt adatai
* kézbesítési megbízott (ha van)

Ez a nyomtatvány mezőinek nagy részét lefedi.
A felhasználónak már csak a kifejezetten gyanúra vonatkozó mezőket kell megadnia.

### :two: Szolgáltató kiválasztása --> automatikus adatbetöltés :white_check_mark: 

Válassza ki, mely Szolgáltató nevében kívánja benyújtani a bejelentést.
A rendszer ez alapján tölti fel:

* a Szolgáltató nevét,
* székhelyét,
* adószámát,
* szolgáltató típusát,
* és a **kijelölt személy nevét**

### :three: Hiányzó adatok megadása

Ha az identiGO-ban alaposan vezetve vannak az adatok, Önnek már csak néhány adatot kell kézzel megadnia:

* pénzmosásra utaló gyanús tények, körülmények
* kinek a nevében jár el az ügyfél
* milyen dokumentumok alapján azonosította
* pénzeszköz forrásáról szóló nyilatkozat, ha rendelkezésre áll. 
### :four: XML generálása → mentés

ÁNYK-ban: Szerviz → Egyedi importálás