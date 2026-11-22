---
title: "iOS"
description: "Système d'exploitation mobile d'Apple pour iPhone (et anciennement iPad et iPod touch) : histoire, architecture et sécurité."
---

# iOS

**iOS** (initialement appelé **iPhone OS**) est le système d'exploitation mobile développé par [Apple Inc.](/histoire-tech/apple-inc) pour l'[iPhone](/appareils/iphone/iphone), et anciennement pour l'[iPod touch](/appareils/ipod/ipod-touch) et l'[iPad](/appareils/ipad/ipad) (avant la création d'iPadOS en 2019). Dérivé de [Mac OS X](/logiciels/mac-os), il partage avec lui le noyau Darwin/XNU tout en proposant une interface entièrement pensée pour le tactile multipoint (*Multi-Touch*).

| Fiche technique | Détails |
| :--- | :--- |
| **Développeur** | [Apple Inc.](/histoire-tech/apple-inc) |
| **Première version** | iPhone OS 1.0 (29 juin 2007) |
| **Noyau** | XNU (Darwin) |
| **Appareils** | [iPhone](/appareils/iphone/iphone) (anciennement [iPod touch](/appareils/ipod/ipod-touch) et [iPad](/appareils/ipad/ipad)) |
| **Écosystème & Internals** | [App Store](/logiciels/app-store), [iCloud](/logiciels/icloud), [BootROM](/jailbreak/bootrom), [iBoot](/jailbreak/iboot), [SEP](/jailbreak/sep), [Jailbreak](/jailbreak/jailbreak) |

<div class="wiki-media">
<figure class="wiki-figure">
  <img src="/images/ScreenSaver_de_ios_13.gif" alt="Animation iOS 13" loading="lazy" />
  <figcaption>Animation visuelle issue d'iOS 13</figcaption>
</figure>
</div>

## Évolution des grandes versions

- **iPhone OS 1 (2007) :** lancé avec le premier [iPhone](/appareils/iphone/iphone). Pas encore d'App Store ni de copier-coller, mais un navigateur Safari complet et une interface tactile fluide.
- **iPhone OS 2 (2008) :** arrivée de l'**[App Store](/logiciels/app-store)** et du SDK tiers, déclenchant l'explosion des applications mobiles.
- **iPhone OS 3 (2009) :** copier-coller, MMS, recherche [Spotlight](/logiciels/spotlight) et contrôle vocal sur [iPhone 3GS](/appareils/iphone/iphone-3gs).
- **iOS 4 (2010) :** renommé **iOS** ; ajout du multitâche, des dossiers sur l'écran d'accueil, de FaceTime et du support de l'[Écran Retina](/histoire-tech/ecran-retina).
- **iOS 5 (2011) :** lancement d'**[iCloud](/logiciels/icloud)**, d'iMessage, du Centre de notifications, de Siri (sur [iPhone 4S](/appareils/iphone/iphone-4s)) et fin de l'obligation de passer par [iTunes](/logiciels/itunes) pour activer l'appareil.
- **iOS 7 (2013) :** refonte graphique complète vers le *flat design* dirigée par Jony Ive, arrivée du Centre de contrôle, d'**[AirDrop](/logiciels/airdrop)** et de [Touch ID](/histoire-tech/touch-id) sur [iPhone 5s](/appareils/iphone/iphone-5s).
- **iOS 11 (2017) :** abandon définitif des applications 32 bits, nouvelle gestuelle sans bouton Home introduite avec l'[iPhone X](/appareils/iphone/iphone-x) et [Face ID](/histoire-tech/face-id).
- **iOS 13 (2019) :** mode sombre natif et séparation officielle d'**iPadOS** pour les tablettes.
- **iOS 14 à 17 (2020–2023) :** widgets sur l'écran d'accueil, bibliothèque d'apps, écran verrouillé personnalisable, StandBy.
- **iOS 18 (2024) :** personnalisation libre de l'écran d'accueil, support du RCS, [iPhone Mirroring](/logiciels/iphone-mirroring) et premiers outils d'**[Apple Intelligence](/logiciels/apple-intelligence)**.
- **iOS 26 (2025) :** harmonisation des numéros de version par année sur tout l'écosystème Apple (voir aussi [Jailbreak / 26.x](/jailbreak/jailbreak-26-x)).

## Architecture et chaîne de démarrage

iOS repose sur une chaîne de démarrage sécurisée (*Secure Boot Chain*) où chaque étape vérifie cryptographiquement la suivante :

1. **[BootROM](/jailbreak/bootrom)** : code en lecture seule gravé dans la puce (vulnérable à [checkm8](/jailbreak/checkm8) sur les puces A5 à A11).
2. **[iBoot](/jailbreak/iboot)** (et LLB sur les anciens appareils) : chargeur de démarrage chargé de lancer le système ou le [mode Recovery](/jailbreak/recovery).
3. **[KernelCache](/jailbreak/kernelcache)** : noyau XNU et pilotes système.
4. **[SEP](/jailbreak/sep)** : processeur dédié isolé qui protège les clés de chiffrement, le code d'accès, [Touch ID](/histoire-tech/touch-id) et [Face ID](/histoire-tech/face-id).

En dehors des versions grand public, Apple compile également des variantes internes utilisées en usine et en R&D : **[InternalUI](/jailbreak/internalui)**, **[NonUI](/jailbreak/nonui)** et les images de démonstration en boutique (**[DemoLoop](/jailbreak/demoloop)**).

## Voir aussi

- [iPhone](/appareils/iphone/iphone) · [iPad](/appareils/ipad/ipad) · [iPod touch](/appareils/ipod/ipod-touch)
- [Jailbreak](/jailbreak/jailbreak) · [InternalUI](/jailbreak/internalui) · [NonUI](/jailbreak/nonui)
- [App Store](/logiciels/app-store) · [iCloud](/logiciels/icloud) · [Apple Intelligence](/logiciels/apple-intelligence)
- [Mac OS / macOS](/logiciels/mac-os) · [watchOS](/logiciels/watchos)
