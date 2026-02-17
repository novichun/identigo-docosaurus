---
slug: swagger-hasznalata
title: "Swagger használata"
authors: [buzag]
tags: []
date: 2024-09-26T15:04:10.194Z
---

Kösse össze más, akár saját fejlesztésű rendszerekkel az identiGO-t API segítségével!

Az identiGO API egy szabványos REST API, amit az https://api.identigo.hu felületen érhet el.

> **A fejlesztés idejére** a https://sandbox-api.identigo.hu használata ajánlott.

> Regisztráljon be a https://sandbox.identigo.hu oldalon és küldje el nekünk a regisztrációhoz tartozó e-mail címet az info@identigo.hu címre, ha magasabb vagy alacsonyabb előfizetési csomagot szeretne váltani (ingyenesen) a fejlesztés idejére. Ne feledje: a sandbox-on található adatokért nem vállalunk felelősséget. A nagyobb rendszerfrissítések alatt azok elveszhetnek!

#### Hogyan használjuk a SWAGGER-t?

A swagger egy szabványos API leíró. Bővebb információ: https://swagger.io/

Az alábbiakban bemutatunk egy példa lekérdezést authentikációval.

# 1. Token létrehozása
A tokent-t jelszó helyett használja az API. Így azonosít a rendszer, hogy ki mihez férhet hozzá.

> Javasoljuk, hogy **először a Sandbox-on dolgozzon**!
> Regisztáljon itt: https://sandbox.identigo.hu
> Használja a Sandbox-hoz tartozó API-t itt: https://sandbox-api.identigo.hu

Kattintson az API menü: Új token létrehozása gombra! 

![|690x434](upload://8Kib6W884jJXN3HVpqj9tMk4aqa.jpeg)

A felületen az *Új token sikeresen létrehozva* szöveg alatt megjelenik a token. Ez csak most, egyszer jelenik. Ha elveszíti a tokent, újat kell generálnia. Az alatta lévő listában csak egy uniqe név látszik, **NEM az a token**.

Helyezze a *token másolása* gombbal a vágólapra a tokent!

# 2. Swagger bejelentkezés
A swagger az API-t szimulálja, hogy ki lehessen próbálni a funkciókat fejlesztés előtt.

> Éles: https://api.identigo.hu
> Sandbox: https://sandbox-api.identigo.hu

A Swaggerben az *Authorize* gombra kattintva másolja be az újonnan létrehozott token-t, majd kattintson újra az *Authorize* gombra. Ekkorra a Swagger elmenti a tokent (csak az adott munkamenetben, *refresh* (frissítés) után elvész).

![|690x434](upload://8t9rQdYDkZ1u2jC51V2VW78OMup.jpeg)
![|690x434](upload://4hY0QXxH6Tm2qMhL0gAvkIbjOMt.jpeg)

Ez olyan, mintha bejeletkezett volna. Mostantól tudja a rendszer, hogy mihez férhet hozzá.


# 3. Példa lekérdezés

Az ügyfelek alatt a **GET /partners** szekcióban jobb oldalon katintson a **TRY OUT**-ra!

![Screenshot 2024-09-30 at 09.04.28|690x328](upload://g1scA1nqp9FcoRReojB1VKO2RRH.png)

..majd alul az **EXECUTE** gombra!

![Screenshot 2024-09-30 at 09.05.15|690x431](upload://rXJXRKoNrNtm43e9skKL0tWWn9S.png)



Minden lekérdezésnél látható a konkrét URL a kiválasztott API végpont lekérésére, valamint az arra érkező válasz is. (pl. /partners /partners/changes esetén).
![|690x434](upload://db2A0K78vKyd0bbOvH4mgmCZP4J.jpeg)

# 4. SoapUI, Postman, VSCode
Ha SoapUI-al (vagy Postman, vagy VsCode) hozzá kell adni egy headert a kéréshez, akkor a header paraméter neve: *Authorization*, az értéke pedig: *Bearer* {token}

Felül adja meg a helyes végpontot és jobb oldalt meg is jelenik a válasz.
![|690x434](upload://kQkFrIsu7zSCY4MXPvjfXV0ZfQh.png)

Bármi nem egyértelmű, visszajelzése vagy kérdése van, írjon kommentet a cikk alá vagy indítson bátran új beszélgetést itt a fórum-on!