---
slug: ketfaktoros-2fa-hitelesites-az-identigo-ban
title: "Kétfaktoros (2FA) hitelesítés az identiGO-ban"
authors: [Judit]
tags: []
date: 2025-12-19T10:34:51.819Z
---

## Miért fontos, és hogyan működik?

Az identiGO-ban kezelt adatok **Pmt. szerinti személyes és érzékeny adatok**:
ügyfelek, tényleges tulajdonosok, képviselők, igazolványok, kockázati besorolások, szankciós és PEP-vizsgálatok eredményei.

👉 Ezért biztosít az identiGO **kétfaktoros hitelesítési (2FA)** lehetőséget, amellyel jelentősen növelhető a fiók biztonsága.

---

## Milyen hitelesítési módok közül választhatok?

Az alábbi kétfaktoros hitelesítési módok érhetők el az identiGO-ban:

* **:locked: QR kódos - egy hitelesítő alkalmazás által generált kód, vagy**
* **:incoming_envelope: emailes -  emailben küldött belépési link**

Ez megakadályozza, hogy illetéktelenek pusztán a jelszó megszerzésével belépjenek a fiókba.


---
## Hol tudom bekapcsolni?

> ### :backhand_index_pointing_right: **Bal oldali menü --> Profil --> Fiók biztonság**

---

## 1. QR kódos hitelesítés (hitelesítő alkalmazással)

Ez a **legbiztonságosabb megoldás**, és elsődlegesen ezt javasoljuk.

### Bekapcsolás menete

A QR kódos hitelesítés bekapcsolásához **először meg kell adnia a jelszavát**.
Ez egy biztonsági lépés: csak a jogosult felhasználó aktiválhatja a kétfaktoros védelmet.

### 1️⃣ QR kód beolvasása

* A rendszer megjelenít egy **QR kódot**, amelyet egy hitelesítő alkalmazással kell beolvasni
(pl. Google Authenticator, Microsoft Authenticator stb.).
* Ha nem tud QR kódot beolvasni, megjelenik egy **helyettesítő kód** is, amely manuálisan megadható az alkalmazásban.

⚠️ **Fontos tudnivalók:**

* A QR kódot és a helyettesítő kódot **csak egyszer mutatjuk meg**.
* Ezeket **érdemes biztonságosan elmenteni**, mert később nem kérhetők le újra.
* Ha **többen használják ugyanazt az identiGO-fiókot**, akkor **minden felhasználónak UGYANEZT a QR kódot kell beolvasnia** a saját telefonján.

### Vészhelyzeti kódok

A rendszer **vészhelyzeti (helyreállítási) kódokat** is generál:

* ezek **egyszer használatos kódok**,
* arra szolgálnak, hogy akkor is be tudjon lépni, ha a telefon nincs kéznél,
* a vészhelyzeti kódokat is **csak egyszer mutatjuk meg**.

👉 Ezeket különösen fontos biztonságos helyen megőrizni.

---

### 2️⃣ Hat számjegyű kód megadása

A hitelesítő alkalmazás a QR kód beolvasása után
**folyamatosan változó, 6 számjegyű kódokat** generál.

A bekapcsolás véglegesítéséhez:

* írja be az alkalmazásban éppen látható 6 számjegyű kódot,
* ezzel igazolja, hogy a hitelesítő alkalmazás megfelelően működik.

---

### 3️⃣ Mi történik ezután?

Ha a QR kódos hitelesítés aktív:

* **minden bejelentkezéskor** szükség lesz:
  * a jelszóra, **és**
  * a hitelesítő alkalmazás által generált kódra
* belépni csak az alábbi módokon lehet:
  * hitelesítő alkalmazással,
  * vészhelyzeti kóddal,
  * vagy – ha bekapcsolja – másodlagosként emailes hitelesítéssel.

---

### Emailes hitelesítés 

Lehetőség van arra, hogy a QR kódos védelem helyett vagy mellett **emailes hitelesítést kapcsoljon be**.

📌 Fontos tudni:

* ez **csökkentett biztonságú megoldás** a QR-es megoldáshoz képest,
* viszont **csökkenti a fiók elvesztésének kockázatát**,
* megkönnyíti a helyzetet, ha a telefon elveszik vagy nem elérhető.

Ez tudatos kompromisszum:
**nagyobb kényelem – kissé alacsonyabb biztonság**.

---

## 2. Emailes hitelesítés

Az emailes hitelesítés önállóan is használható, QR kód nélkül.

### Bekapcsolás

* Az emailes hitelesítés aktiválásához csak **meg kell adnia a jelszavát**.

### Bejelentkezés menete

Emailes hitelesítés esetén:

1. megadja a felhasználónevét és jelszavát,
2. a rendszer **emailt küld egy belépési linkkel**,
3. a linkre kattintva tud belépni a fiókba.

📌 Ez egyszerűbb megoldás, de **kevésbé biztonságos**, mint a hitelesítő alkalmazás használata.

---

## Összefoglalás

* Az identiGO-ban kezelt Pmt.-s adatok védelme kiemelten fontos.
* A kétfaktoros hitelesítés jelentősen csökkenti az illetéktelen hozzáférés kockázatát.
* **QR kódos hitelesítés** = legnagyobb biztonság.
* **Emailes hitelesítés** = egyszerűbb, de gyengébb védelem.
* A QR kódok, helyettesítő kódok és vészhelyzeti kódok
**csak egyszer jelennek meg**, ezeket mindenképpen mentse el.