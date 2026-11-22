import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/the-french-apple-wiki/',
  lang: 'fr-FR',
  title: 'The French Apple Wiki',
  description: "L'encyclopédie francophone dédiée à l'univers Apple — appareils, logiciels, histoire, jailbreak et internals.",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'The French Apple Wiki',

    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Appareils', link: '/appareils/' },
      { text: 'Logiciels & OS', link: '/logiciels/' },
      { text: 'Jailbreak & Internals', link: '/jailbreak/' },
      { text: 'Histoire & Tech', link: '/histoire-tech/' },
      { text: 'Galerie', link: '/galerie' },
      { text: 'Roadmap', link: '/roadmap' },
    ],

    sidebar: [
      {
        text: 'Portails',
        items: [
          { text: 'Accueil', link: '/' },
          { text: 'Appareils Apple', link: '/appareils/' },
          { text: 'Logiciels & OS', link: '/logiciels/' },
          { text: 'Jailbreak & Internals', link: '/jailbreak/' },
          { text: 'Histoire & Technologies', link: '/histoire-tech/' },
          { text: 'Galerie des images', link: '/galerie' },
          { text: 'Roadmap', link: '/roadmap' },
        ],
      },
      
  {
    "text": "Mac & Ordinateurs",
    "collapsed": false,
    "items": [
      {
        "text": "Macintosh",
        "link": "/appareils/mac/macintosh"
      },
      {
        "text": "iMac",
        "link": "/appareils/mac/imac"
      },
      {
        "text": "iMac G3 (1998)",
        "link": "/appareils/mac/imac-g3-1998"
      },
      {
        "text": "iMac G4 (2002)",
        "link": "/appareils/mac/imac-g4-2002"
      },
      {
        "text": "eMac",
        "link": "/appareils/mac/emac"
      },
      {
        "text": "Power Mac G4 Cube",
        "link": "/appareils/mac/power-mac-g4-cube"
      },
      {
        "text": "Mac mini",
        "link": "/appareils/mac/mac-mini"
      },
      {
        "text": "Mac Studio",
        "link": "/appareils/mac/mac-studio"
      },
      {
        "text": "iBook",
        "link": "/appareils/mac/ibook"
      },
      {
        "text": "MacBook",
        "link": "/appareils/mac/macbook"
      },
      {
        "text": "MacBook Air",
        "link": "/appareils/mac/macbook-air"
      },
      {
        "text": "Apple Pipp!n",
        "link": "/appareils/mac/apple-pippin"
      }
    ]
  },
  {
    "text": "iPhone",
    "collapsed": true,
    "items": [
      {
        "text": "iPhone",
        "link": "/appareils/iphone/iphone"
      },
      {
        "text": "iPhone 3G",
        "link": "/appareils/iphone/iphone-3g"
      },
      {
        "text": "iPhone 3GS",
        "link": "/appareils/iphone/iphone-3gs"
      },
      {
        "text": "iPhone 4",
        "link": "/appareils/iphone/iphone-4"
      },
      {
        "text": "iPhone 4S",
        "link": "/appareils/iphone/iphone-4s"
      },
      {
        "text": "iPhone 5",
        "link": "/appareils/iphone/iphone-5"
      },
      {
        "text": "iPhone 5s",
        "link": "/appareils/iphone/iphone-5s"
      },
      {
        "text": "iPhone 6S",
        "link": "/appareils/iphone/iphone-6s"
      },
      {
        "text": "iPhone 7",
        "link": "/appareils/iphone/iphone-7"
      },
      {
        "text": "iPhone 8",
        "link": "/appareils/iphone/iphone-8"
      },
      {
        "text": "iPhone X",
        "link": "/appareils/iphone/iphone-x"
      },
      {
        "text": "Liste des iPhones X's",
        "link": "/appareils/iphone/liste-iphones-x"
      }
    ]
  },
  {
    "text": "iPad",
    "collapsed": true,
    "items": [
      {
        "text": "iPad",
        "link": "/appareils/ipad/ipad"
      },
      {
        "text": "iPad (1re génération)",
        "link": "/appareils/ipad/ipad-1"
      },
      {
        "text": "iPad (2e génération)",
        "link": "/appareils/ipad/ipad-2"
      },
      {
        "text": "iPad (3e génération)",
        "link": "/appareils/ipad/ipad-3"
      },
      {
        "text": "iPad (4e génération)",
        "link": "/appareils/ipad/ipad-4"
      },
      {
        "text": "iPad (5e génération)",
        "link": "/appareils/ipad/ipad-5"
      },
      {
        "text": "iPad (6e génération)",
        "link": "/appareils/ipad/ipad-6"
      },
      {
        "text": "iPad (7e génération)",
        "link": "/appareils/ipad/ipad-7"
      },
      {
        "text": "iPad (8e génération)",
        "link": "/appareils/ipad/ipad-8"
      },
      {
        "text": "iPad (9e génération)",
        "link": "/appareils/ipad/ipad-9"
      },
      {
        "text": "iPad (10e génération)",
        "link": "/appareils/ipad/ipad-10"
      }
    ]
  },
  {
    "text": "iPod",
    "collapsed": true,
    "items": [
      {
        "text": "iPod",
        "link": "/appareils/ipod/ipod"
      },
      {
        "text": "iPod classic",
        "link": "/appareils/ipod/ipod-classic"
      },
      {
        "text": "iPod mini",
        "link": "/appareils/ipod/ipod-mini"
      },
      {
        "text": "iPod nano",
        "link": "/appareils/ipod/ipod-nano"
      },
      {
        "text": "iPod shuffle",
        "link": "/appareils/ipod/ipod-shuffle"
      },
      {
        "text": "iPod touch",
        "link": "/appareils/ipod/ipod-touch"
      }
    ]
  },
  {
    "text": "Apple Watch",
    "collapsed": true,
    "items": [
      {
        "text": "Apple Watch",
        "link": "/appareils/apple-watch/apple-watch"
      },
      {
        "text": "Apple Watch (1re génération)",
        "link": "/appareils/apple-watch/apple-watch-1ere-gen"
      },
      {
        "text": "Apple Watch Series 1",
        "link": "/appareils/apple-watch/series-1"
      },
      {
        "text": "Apple Watch Series 2",
        "link": "/appareils/apple-watch/series-2"
      },
      {
        "text": "Apple Watch Series 3",
        "link": "/appareils/apple-watch/series-3"
      },
      {
        "text": "Apple Watch Series 4",
        "link": "/appareils/apple-watch/series-4"
      },
      {
        "text": "Apple Watch Series 5",
        "link": "/appareils/apple-watch/series-5"
      },
      {
        "text": "Apple Watch Series 6",
        "link": "/appareils/apple-watch/series-6"
      },
      {
        "text": "Apple Watch Series 7",
        "link": "/appareils/apple-watch/series-7"
      },
      {
        "text": "Apple Watch Series 8",
        "link": "/appareils/apple-watch/series-8"
      },
      {
        "text": "Apple Watch Series 9",
        "link": "/appareils/apple-watch/series-9"
      },
      {
        "text": "Apple Watch Series 10",
        "link": "/appareils/apple-watch/series-10"
      },
      {
        "text": "Apple Watch SE",
        "link": "/appareils/apple-watch/apple-watch-se"
      },
      {
        "text": "Apple Watch Ultra",
        "link": "/appareils/apple-watch/apple-watch-ultra"
      },
      {
        "text": "Apple Watch Ultra 2",
        "link": "/appareils/apple-watch/apple-watch-ultra-2"
      }
    ]
  },
  {
    "text": "Audio, Accessoires & Listes",
    "collapsed": true,
    "items": [
      {
        "text": "Apple Vision Pro",
        "link": "/appareils/autres/apple-vision-pro"
      },
      {
        "text": "EarPods",
        "link": "/appareils/autres/earpods"
      },
      {
        "text": "AirPods (1re génération)",
        "link": "/appareils/autres/airpods-1"
      },
      {
        "text": "AirPods (4e génération)",
        "link": "/appareils/autres/airpods-4"
      },
      {
        "text": "AirPort",
        "link": "/appareils/autres/airport"
      },
      {
        "text": "Liste des Apple TVs",
        "link": "/appareils/autres/liste-apple-tv"
      },
      {
        "text": "Liste des HomePods",
        "link": "/appareils/autres/liste-homepods"
      }
    ]
  },
  {
    "text": "Systèmes, Logiciels & Services",
    "collapsed": true,
    "items": [
      {
        "text": "Mac OS / macOS",
        "link": "/logiciels/mac-os"
      },
      {
        "text": "iOS",
        "link": "/logiciels/ios"
      },
      {
        "text": "watchOS",
        "link": "/logiciels/watchos"
      },
      {
        "text": "iTunes",
        "link": "/logiciels/itunes"
      },
      {
        "text": "Finder",
        "link": "/logiciels/finder"
      },
      {
        "text": "Spotlight",
        "link": "/logiciels/spotlight"
      },
      {
        "text": "App Store",
        "link": "/logiciels/app-store"
      },
      {
        "text": "iCloud",
        "link": "/logiciels/icloud"
      },
      {
        "text": "Apple One",
        "link": "/logiciels/apple-one"
      },
      {
        "text": "Apple Intelligence",
        "link": "/logiciels/apple-intelligence"
      },
      {
        "text": "AirDrop",
        "link": "/logiciels/airdrop"
      },
      {
        "text": "AirPlay",
        "link": "/logiciels/airplay"
      },
      {
        "text": "iPhone Mirroring",
        "link": "/logiciels/iphone-mirroring"
      },
      {
        "text": "Animoji",
        "link": "/logiciels/animoji"
      },
      {
        "text": "Audio Lossless",
        "link": "/logiciels/lossless"
      }
    ]
  },
  {
    "text": "Jailbreak, Internals & Prototypes",
    "collapsed": true,
    "items": [
      {
        "text": "Jailbreak",
        "link": "/jailbreak/jailbreak"
      },
      {
        "text": "Jailbreak / 26.x",
        "link": "/jailbreak/jailbreak-26-x"
      },
      {
        "text": "InternalUI",
        "link": "/jailbreak/internalui"
      },
      {
        "text": "NonUI",
        "link": "/jailbreak/nonui"
      },
      {
        "text": "DemoLoop",
        "link": "/jailbreak/demoloop"
      },
      {
        "text": "SkankPhone",
        "link": "/jailbreak/skankphone"
      },
      {
        "text": "BootROM",
        "link": "/jailbreak/bootrom"
      },
      {
        "text": "iBoot",
        "link": "/jailbreak/iboot"
      },
      {
        "text": "KernelCache",
        "link": "/jailbreak/kernelcache"
      },
      {
        "text": "SEP (Secure Enclave Processor)",
        "link": "/jailbreak/sep"
      },
      {
        "text": "ASR (Apple Software Restore)",
        "link": "/jailbreak/asr"
      },
      {
        "text": "Mode Recovery",
        "link": "/jailbreak/recovery"
      },
      {
        "text": "RestoreRamdisk",
        "link": "/jailbreak/restoreramdisk"
      },
      {
        "text": "FileSystem : /dev",
        "link": "/jailbreak/filesystem-dev"
      },
      {
        "text": "checkm8",
        "link": "/jailbreak/checkm8"
      },
      {
        "text": "checkra1n",
        "link": "/jailbreak/checkra1n"
      },
      {
        "text": "blackbird",
        "link": "/jailbreak/blackbird"
      },
      {
        "text": "Cydia",
        "link": "/jailbreak/cydia"
      },
      {
        "text": "Cydia Impactor",
        "link": "/jailbreak/cydia-impactor"
      },
      {
        "text": "CoolBooter",
        "link": "/jailbreak/coolbooter"
      },
      {
        "text": "Dopamine-roothide",
        "link": "/jailbreak/dopamine-roothide"
      },
      {
        "text": "GreenPois0n",
        "link": "/jailbreak/greenpois0n"
      },
      {
        "text": "Hacktivation",
        "link": "/jailbreak/hacktivation"
      },
      {
        "text": "Haywire",
        "link": "/jailbreak/haywire"
      },
      {
        "text": "Legacy iOS Kit",
        "link": "/jailbreak/legacy-ios-kit"
      },
      {
        "text": "QEMU-iOS",
        "link": "/jailbreak/qemu-ios"
      },
      {
        "text": "turdus m3rula",
        "link": "/jailbreak/turdus-m3rula"
      }
    ]
  },
  {
    "text": "Histoire, Personnalités & Tech",
    "collapsed": true,
    "items": [
      {
        "text": "Apple Inc.",
        "link": "/histoire-tech/apple-inc"
      },
      {
        "text": "Steve Jobs",
        "link": "/histoire-tech/steve-jobs"
      },
      {
        "text": "Tim Cook",
        "link": "/histoire-tech/tim-cook"
      },
      {
        "text": "NeXT",
        "link": "/histoire-tech/next"
      },
      {
        "text": "WWDC",
        "link": "/histoire-tech/wwdc"
      },
      {
        "text": "Apple Park",
        "link": "/histoire-tech/apple-park"
      },
      {
        "text": "Logo Apple",
        "link": "/histoire-tech/logo-apple"
      },
      {
        "text": "(PRODUCT)RED",
        "link": "/histoire-tech/product-red"
      },
      {
        "text": "Intel",
        "link": "/histoire-tech/intel"
      },
      {
        "text": "PowerPC",
        "link": "/histoire-tech/powerpc"
      },
      {
        "text": "PowerPC G4",
        "link": "/histoire-tech/powerpc-g4"
      },
      {
        "text": "Puces Apple Silicon",
        "link": "/histoire-tech/puces-apple-silicon"
      },
      {
        "text": "Apple A11 Bionic",
        "link": "/histoire-tech/apple-a11-bionic"
      },
      {
        "text": "Puce Apple C1",
        "link": "/histoire-tech/c1"
      },
      {
        "text": "Écran Retina",
        "link": "/histoire-tech/ecran-retina"
      },
      {
        "text": "Face ID",
        "link": "/histoire-tech/face-id"
      },
      {
        "text": "Touch ID",
        "link": "/histoire-tech/touch-id"
      },
      {
        "text": "Caméra TrueDepth",
        "link": "/histoire-tech/truedepth"
      },
      {
        "text": "FireWire",
        "link": "/histoire-tech/firewire"
      }
    ]
  }

    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher dans le wiki',
          },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Effacer la recherche',
            footer: {
              selectText: 'ouvrir',
              navigateText: 'naviguer',
              closeText: 'fermer',
            },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/nat649/the-french-apple-wiki/edit/main/docs/:path',
      text: 'Modifier cette page sur GitHub',
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    outline: {
      label: 'Sur cette page',
    },

    lastUpdated: {
      text: 'Dernière mise à jour',
    },

    returnToTopLabel: 'Haut de page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer en thème clair',
    darkModeSwitchTitle: 'Passer en thème sombre',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nat649/the-french-apple-wiki' },
    ],

    footer: {
      message: 'The French Apple Wiki — Wiki communautaire francophone sur Apple.',
      copyright: 'Hébergé sur GitHub Pages avec VitePress',
    },
  },
})
