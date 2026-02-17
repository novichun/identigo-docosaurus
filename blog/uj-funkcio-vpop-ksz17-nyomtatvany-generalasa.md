---
slug: uj-funkcio-vpop-ksz17-nyomtatvany-generalasa
title: "Új funkció - VPOP_KSZ17 nyomtatvány generálása"
authors: [Judit]
tags: []
date: 2025-12-08T12:31:09.594Z
---

Mostantól az identiGO-val pár kattintással generálható a Pmt.-hez kapcsolódó valamennyi nyomtatvány!
Minden nyomtatvány egyetlen célra optimalizált: hogy az identiGO a már rögzített adatokkal automatikusan kitöltse őket, így Önnek csak ellenőriznie és letöltenie kell az ÁNYK-hoz megfelelő XML állományt.

# Hol találom a VPOP_KSZ17 nyomtatvány generálása funkciót? ##

> :backhand_index_pointing_right: **Bal oldali menü --> Nyomtatvány-kitöltő**

Innen készíthető el többek között:
* VPOP_KSZ17 (kijelölt személy bejelentése)
* AFADREG (regisztráció a Központi Tényleges Tulajdonosi Nyilvántartásba)
* VPOP_PMT17 (pénzmosással kapcsolatos gyanú bejelentése)
* TTNYELT (TTNY eltérésjelzés)

# Fontos feltétel VPOP_KSZ17 generáláshoz

> **:backhand_index_pointing_right: Bal oldali menü --> Szolgáltatók menüpont**

Ahhoz, hogy bármely Pmt.-nyomtatvány generálható legyen, **legalább egy Szolgáltató rögzítése kötelező**.
Ennek oka, hogy a NAV-hoz beküldendő dokumentumokon **mindig fel kell tüntetni a szolgáltató adatait**.

A Szolgáltató kezelése az identiGO bal oldali menüjében található *Szolgáltatók* menüpont alatt érhető el. Enélkül a nyomtatványok *nem aktiválódnak*, hiszen a rendszer nem tudná kitölteni a kötelező mezőket.

# VPOP_KSZ17 kitöltése az identiGO-ban

> ##  <a href="https://forum.identigo.hu/t/vpop-ksz17-mikor-es-hogyan-kell-benyujtanom/217" target="_blank">Részletes kitöltési útmutató VPOP_KSZ17 >> </a>

### **1️⃣ Szolgáltató kiválasztása**

Válassza ki, **mely Szolgáltató nevében** szeretné benyújtani a VPOP_KSZ17 nyomtatványt.

---

### **2️⃣ A Szolgáltató adatainak automatikus kitöltése**

Az identiGO a rögzített adatok alapján automatikusan betölti:

* cégnév
* székhely
* szolgáltató típusa

A kitöltés azonnali, Önnek csak ellenőriznie kell.

---

### **3️⃣ Tájékoztatás célja**

Jogszabályi kötelezettség: **Mindkettő (ajánlott)**
Bejelentés típusa választható:

* Új szolgáltató
* Új kijelölt személy
* Módosítás
* Törlés

---

### **4️⃣ Kijelölt személy adatai**

* Ha a Szolgáltatónál már szerepel kijelölt személy → **kiválasztja, és minden adat automatikusan betöltődik**.
* Ha még nincs rögzítve → **töltse ki az adatokat**, majd **Mentéskor automatikusan eltároljuk** a Szolgáltatóhoz.

📨 *Elérhetőségből több is megadható (pl. több email cím).*

---

### **5️⃣ Munkahely címe**

Amennyiben a kijelölt személy munkahelyi címe **nem egyezik meg** a Szolgáltató székhelyével:
➡️ vegye ki a pipát, és adja meg az eltérő címet.

---

### **6️⃣ Megjegyzés**

Lehetőség van **egyéni megjegyzést** fűzni a nyomtatványhoz.
Ez később is visszakereshető és segít a dokumentáció átláthatóságában. 

---

### **7️⃣ XML generálása és importálása ÁNYK-ba**

Miután minden adatot ellenőrzött, az **XML generálása** gombra kattintva létrehozhatja a VPOP_KSZ17 nyomtatvány **ÁNYK-kompatibilis** verzióját.

A letöltött `.xml` állományt az ÁNYK programban így tudja beolvasni:

> **👉 ÁNYK → Szerviz → Egyedi import**
> (Válassza ki a létrehozott XML fájlt, majd importálja.)

A nyomtatvány ezt követően az ÁNYK-ban megnyitható, ellenőrizhető, kiegészíthető és beküldhető.
<br/>


## Miért érdemes a VPOP_KSZ17-et identiGO-val generálni?

Az identiGO nem csupán elkészíti a nyomtatványt — **leveszi Önről a hibalehetőségeket és a manuális kitöltés terhét**.
A rendszer a már rögzített adatokat **automatikusan beemeli**, így nem kell újra begépelnie a Szolgáltató, a kijelölt személy vagy az egyéb Pmt.-adatok mezőit.

### 🧠 Automatikus kitöltés = kevesebb hiba

Az identiGO a bevált és NAV által elvárt alapbeállításokat **előre kiválasztja**, így elkerülhetők a leggyakoribb hibák:

* **Jogszabályi megfelelés célja: „Mindkettő”**
– ezt a szolgáltatók többsége gyakran rosszul jelöli ⇒ nálunk automatikus.
* **Munkahely címe: automatikusan a Szolgáltató székhelye**
– csak akkor kell módosítani, ha eltérés van.
* **Kijelölt személy adatainak automatikus betöltése**
– nem kell újra felvinni, nem fordulhat elő elírás.

### ⚡ Gyorsabb, pontosabb, kevesebb adminisztráció

Az identiGO-val egy VPOP_KSZ17 kitöltése tipikusan:

* **1–2 perc**
* nincs elírási kockázat
* nincs téves beállítás miatti NAV-visszadobás
* az XML **minden alkalommal ÁNYK-kompatibilis**

Ez azért fontos, mert a NAV által kért mezők közül több **szigorúan kötött formátumú** — az identiGO viszont garantálja, hogy ezek helyesen kerülnek az XML-be.