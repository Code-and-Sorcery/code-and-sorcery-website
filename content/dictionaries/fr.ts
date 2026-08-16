import type { Dictionary } from "./en";
import type { LegalDocument, LegalIndexGroup } from "./types";

const primzPrivacy: LegalDocument = {
  eyebrow: "Primz",
  title: "Politique de confidentialité",
  updated: "1er juin 2026",
  lead: "Comment l’application mobile Primz traite les informations — et pourquoi la plupart ne quittent jamais votre appareil.",
  translationNote:
    "Version française de ce document. La [version anglaise](/primz/privacy) est également disponible.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          p: "La présente politique de confidentialité décrit la manière dont l’application mobile **Primz** (« l’Application ») traite les informations lorsque vous l’utilisez. Primz est développée par **Code and Sorcery** (« nous »).",
        },
        {
          p: "Primz est un journal privé, sur votre téléphone, dédié aux enfants qui vous sont proches : premières fois, moments du quotidien, photos, notes courtes et contenus associés. L’Application est conçue pour conserver vos données principales sur votre appareil, et non sur nos serveurs.",
        },
      ],
    },
    {
      id: "local-first",
      heading: "Le local d’abord, par conception",
      blocks: [
        {
          p: "Primz stocke vos contenus **sur votre appareil**, dans l’espace de stockage privé de l’Application. Selon votre usage, cela peut comprendre :",
        },
        {
          ul: [
            "**Profils** — nom, date de naissance facultative, photo de profil ;",
            "**Premières fois** — entrées de jalons, dates, notes et médias liés ;",
            "**Souvenirs** — moments que vous choisissez de conserver, avec titres, catégories, dates et médias ;",
            "**Perles** — brefs temps forts avec un titre, une description facultative, une date et des médias ;",
            "**Réglages de l’application** — langue, thème, options d’accessibilité, préférences de notification et verrouillage de l’application.",
          ],
        },
        {
          p: "Nous n’exploitons pas de système de compte utilisateur dans l’Application permettant de synchroniser vos contenus personnels vers nos serveurs, et l’Application n’est pas conçue pour transférer l’ensemble de vos données à Code and Sorcery aux fins de stockage ou de traitement.",
        },
        {
          p: "Vos données principales restant sur l’appareil, vous les maîtrisez via l’Application et les réglages de votre appareil — par exemple en modifiant ou supprimant des entrées, en exportant des médias, en utilisant les options de nettoyage ou en désinstallant l’Application.",
        },
      ],
    },
    {
      id: "permissions",
      heading: "Autorisations",
      blocks: [
        {
          p: "Selon votre usage, l’Application peut demander l’accès aux éléments suivants :",
        },
        {
          ul: [
            "**Photos et bibliothèque de médias** — pour choisir des images et des vidéos (photo de profil, médias liés à une entrée). Vous pouvez refuser l’accès ; certaines fonctionnalités seront alors indisponibles.",
            "**Appareil photo** — pour prendre des photos ou filmer directement dans l’Application. Vous pouvez refuser l’accès ; les fonctions de capture seront alors indisponibles.",
            "**Microphone** — pour enregistrer du son lorsque vous filmez ou ajoutez un média audio. Vous pouvez refuser l’accès ; les fonctions concernées seront alors indisponibles.",
            "**Notifications** — pour afficher les rappels locaux que vous activez dans l’Application (par exemple des rappels mensuels de jalons). Vous pouvez les refuser ou les désactiver dans l’Application ou dans les réglages du système.",
            "**Authentification biométrique** (là où elle est prise en charge) — uniquement pour déverrouiller l’Application sur votre appareil, via les API sécurisées de la plateforme. Nous ne recevons pas vos données biométriques.",
          ],
        },
        {
          p: "Lorsque l’Application propose de **copier** un média dans son propre dossier, cette copie est conservée localement afin de rester disponible hors ligne ; vos originaux dans la galerie restent sous votre contrôle.",
        },
      ],
    },
    {
      id: "notifications",
      heading: "Notifications",
      blocks: [
        {
          p: "Si vous activez les notifications, Primz planifie des **rappels locaux sur votre appareil** — par exemple des rappels mensuels de jalons calculés à partir de la date de naissance d’un profil. Ces notifications sont générées et délivrées sur votre appareil ; nous n’envoyons pas de notifications push depuis nos serveurs et nous ne recevons pas le contenu de votre journal par le biais des notifications.",
        },
      ],
    },
    {
      id: "no-advertising",
      heading: "Ni publicité ni pistage",
      blocks: [
        {
          p: "Primz **n’intègre pas** de publicité tierce, ne vend pas vos données personnelles et n’utilise pas de pistage inter-applications à des fins marketing. L’usage courant de l’Application n’exige pas de créer un compte auprès de Code and Sorcery ni de nous transmettre votre journal ou vos médias.",
        },
      ],
    },
    {
      id: "data-you-send",
      heading: "Données que vous pourriez nous transmettre",
      blocks: [
        {
          p: "L’Application est construite de sorte que son usage quotidien **n’exige pas** de nous envoyer vos contenus. Si vous nous contactez (par courriel, par exemple) pour une question, un retour ou une demande d’assistance, nous traiterons les informations que vous choisissez d’inclure dans ce message — comme votre adresse électronique et le contenu de votre demande — afin d’y répondre et, le cas échéant, d’améliorer nos services.",
        },
      ],
    },
    {
      id: "app-stores",
      heading: "Magasins d’applications et services système",
      blocks: [
        {
          p: "Lorsque vous téléchargez ou mettez à jour l’Application depuis l’App Store d’Apple ou Google Play, ces sociétés traitent certaines informations conformément à leurs propres politiques (par exemple des métadonnées d’appareil et de téléchargement). Votre usage de l’Application est également soumis aux conditions de la plateforme applicables à votre appareil.",
        },
      ],
    },
    {
      id: "children",
      heading: "Enfants et familles",
      blocks: [
        {
          p: "Primz vise à aider les familles à documenter des jalons. Si vous ajoutez des informations relatives à un enfant, vous ne devez le faire qu’en qualité de parent ou de représentant légal, ou avec le consentement approprié, et dans le respect des lois qui vous sont applicables. Nous ne sollicitons pas sciemment d’informations personnelles auprès d’enfants à des fins de profilage ou de marketing via l’Application.",
        },
      ],
    },
    {
      id: "retention",
      heading: "Export, conservation et suppression",
      blocks: [
        {
          p: "Les données enregistrées dans l’Application restent sur votre appareil jusqu’à ce que vous les supprimiez (par exemple en modifiant ou supprimant des entrées ou des profils, en utilisant les fonctions de nettoyage ou de réinitialisation, ou en désinstallant l’Application).",
        },
        {
          p: "L’Application peut proposer des options d’export — par exemple l’export des médias copiés sous forme de fichier que vous pouvez enregistrer ou partager depuis votre appareil. L’export est déclenché par vous ; une fois partagée hors de l’Application, cette copie est sous votre contrôle.",
        },
        {
          p: "La désinstallation peut supprimer les données locales de l’Application selon les règles de votre plateforme. Utilisez les options d’export ou de sauvegarde avant toute suppression si vous souhaitez conserver une copie.",
        },
      ],
    },
    {
      id: "security",
      heading: "Sécurité",
      blocks: [
        {
          p: "Nous concevons l’Application pour que vos données restent dans son bac à sable privé sur l’appareil. Les préférences sensibles (comme les réglages de verrouillage de l’application) peuvent être stockées via les API de stockage sécurisé de la plateforme.",
        },
        {
          p: "Aucune méthode de stockage ou de transmission n’est sûre à 100 %. Il vous appartient de protéger votre appareil par un code, la biométrie et les mises à jour du système, et d’éviter de prêter un appareil déverrouillé à des personnes de confiance incertaine.",
        },
      ],
    },
    {
      id: "international",
      heading: "Utilisateurs à l’étranger",
      blocks: [
        {
          p: "L’Application est distribuée via des places de marché mondiales. Si vous nous contactez depuis un autre pays, votre message sera traité conformément à la présente politique et au droit applicable. Les lois locales relatives à la vie privée peuvent vous conférer des droits supplémentaires.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Modifications de la présente politique",
      blocks: [
        {
          p: "Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. La date de dernière mise à jour indiquée en tête de page sera alors modifiée. Nous vous invitons à consulter cette page périodiquement. La poursuite de l’utilisation de l’Application après une modification vaut acceptation de la politique mise à jour, dans la limite permise par la loi.",
        },
      ],
    },
    {
      id: "terms",
      heading: "Conditions d’utilisation",
      blocks: [
        {
          p: "Votre usage de l’Application est également régi par nos [conditions d’utilisation](/fr/primz/terms). En cas de contradiction entre la présente politique et les conditions d’utilisation sur des questions de données personnelles, la présente politique prévaut sur ces questions.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          p: "Pour toute question relative à la présente politique ou à Primz, vous pouvez écrire à Code and Sorcery : [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
        },
      ],
    },
  ],
};

const primzTerms: LegalDocument = {
  eyebrow: "Primz",
  title: "Conditions d’utilisation",
  updated: "1er juin 2026",
  lead: "La licence, les responsabilités et les règles juridiques qui accompagnent l’usage de Primz.",
  translationNote:
    "Version française de ce document. La [version anglaise](/primz/terms) est également disponible.",
  sections: [
    {
      id: "acceptance",
      heading: "Introduction et acceptation",
      blocks: [
        {
          p: "Les présentes conditions d’utilisation (« Conditions ») régissent votre accès à l’application mobile **Primz** (« l’Application »), éditée par **Code and Sorcery** (« nous »), et son utilisation.",
        },
        {
          p: "En téléchargeant, installant ou utilisant l’Application, vous acceptez d’être lié par les présentes Conditions. Si vous ne les acceptez pas, vous ne devez pas utiliser l’Application.",
        },
      ],
    },
    {
      id: "service",
      heading: "Description du service",
      blocks: [
        {
          p: "Primz est une application mobile permettant de documenter et d’organiser des moments qui comptent — premières fois, souvenirs, photos, notes et contenus associés — au sujet d’enfants ou de personnes que vous suivez.",
        },
        {
          p: "L’Application est conçue selon une approche **locale d’abord** : vos contenus sont principalement stockés **sur votre appareil**, dans l’espace privé de l’Application. Primz n’est pas conçue pour synchroniser l’ensemble de vos données vers des serveurs de Code and Sorcery, ni pour offrir un compte en ligne de sauvegarde.",
        },
        { p: "Les fonctionnalités peuvent notamment inclure :" },
        {
          ul: [
            "la création et la gestion de profils ;",
            "l’enregistrement de premières fois, de souvenirs et de perles sur une frise chronologique ;",
            "l’ajout de médias (photos, vidéos, audio) ;",
            "des options d’export et de gestion des données ;",
            "le verrouillage de l’application par biométrie ou code de l’appareil ;",
            "des notifications locales, selon vos réglages.",
          ],
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Éligibilité et autorisations",
      blocks: [
        {
          p: "L’Application est destinée aux **personnes majeures** capables de conclure un contrat contraignant au regard du droit applicable. Si vous utilisez Primz pour le compte d’un mineur ou pour documenter des informations concernant un enfant, vous déclarez être parent, représentant légal, ou autrement autorisé à le faire.",
        },
        {
          p: "Primz est disponible sur **iOS** et **Android**. Il vous appartient d’utiliser un appareil compatible et de maintenir votre système d’exploitation raisonnablement à jour.",
        },
        {
          p: "Certaines fonctionnalités requièrent des autorisations système (photos, appareil photo, microphone, notifications, authentification biométrique, entre autres). Vous pouvez refuser ces autorisations ; les fonctionnalités concernées peuvent alors être indisponibles ou limitées.",
        },
      ],
    },
    {
      id: "license",
      heading: "Licence d’utilisation",
      blocks: [
        {
          p: "Sous réserve des présentes Conditions et des règles du magasin d’applications concerné, nous vous accordons une licence **personnelle, non exclusive, non transférable, révocable et limitée** d’utilisation de l’Application à des fins **privées et non commerciales**.",
        },
        { p: "Sans notre autorisation écrite préalable, vous ne pouvez pas :" },
        {
          ul: [
            "copier, modifier, adapter, traduire, désassembler, décompiler ou tenter d’extraire le code source de l’Application, sauf dans les cas permis par la loi ;",
            "vendre, louer, sous-licencier ou distribuer l’Application ;",
            "utiliser l’Application à des fins illicites, frauduleuses ou contrefaisantes ;",
            "contourner les mesures de sécurité ou de contrôle d’accès de l’Application ;",
            "utiliser l’Application pour développer un produit ou service concurrent de manière déloyale.",
          ],
        },
      ],
    },
    {
      id: "your-content",
      heading: "Vos contenus et votre responsabilité",
      blocks: [
        {
          p: "Vous conservez l’ensemble des droits sur les contenus que vous saisissez, importez ou créez dans l’Application (textes, dates, médias, profils et éléments similaires) (« Vos Contenus »).",
        },
        {
          p: "Vous êtes seul responsable de Vos Contenus et de la détention des droits nécessaires pour les enregistrer, les reproduire et les conserver, y compris lorsqu’ils concernent des tiers ou des enfants.",
        },
        {
          p: "Vous ne devez pas utiliser Primz pour stocker ou partager des contenus illicites, diffamatoires, injurieux, haineux, violents, pornographiques, ou portant atteinte à la vie privée, au droit à l’image ou à la propriété intellectuelle.",
        },
        {
          p: "Vos Contenus restant sur votre appareil, Code and Sorcery n’examine pas de façon routinière ce que vous stockez dans l’Application et n’est pas responsable des contenus que vous y ajoutez.",
        },
      ],
    },
    {
      id: "children",
      heading: "Enfants et familles",
      blocks: [
        {
          p: "Primz est conçue pour aider les familles à documenter des jalons. Si vous enregistrez des informations concernant un enfant, vous devez le faire dans le respect du droit applicable et avec les consentements requis. L’Application n’est pas destinée à un usage par des enfants sans surveillance.",
        },
      ],
    },
    {
      id: "local-storage",
      heading: "Stockage local, sauvegarde et perte de données",
      blocks: [
        {
          p: "Vos contenus sont principalement conservés **sur votre appareil**. Vous reconnaissez que la perte, le vol, la panne ou le remplacement de l’appareil, ou la désinstallation de l’Application, peuvent entraîner une **perte définitive** de vos données si vous ne les avez pas exportées ou sauvegardées.",
        },
        {
          p: "Les fonctions d’export (par exemple l’export de médias) sont fournies pour vous aider à conserver une copie, mais elles **ne constituent pas** une sauvegarde automatique. Code and Sorcery n’est pas responsable des pertes de données résultant d’une absence de sauvegarde, d’un problème d’appareil ou de vos propres actions (suppression, réinitialisation et actions similaires).",
        },
      ],
    },
    {
      id: "export",
      heading: "Export, partage et suppression",
      blocks: [
        {
          p: "L’Application peut vous permettre d’exporter ou de partager des contenus via les fonctions système de votre appareil. Une fois exporté ou partagé, ce contenu se trouve hors de l’Application et sous votre contrôle.",
        },
        {
          p: "Vous pouvez supprimer Vos Contenus, réinitialiser certains réglages ou désinstaller l’Application à tout moment. La suppression peut être irréversible.",
        },
      ],
    },
    {
      id: "security",
      heading: "Verrouillage, notifications et sécurité",
      blocks: [
        {
          p: "Si vous activez le verrouillage de l’application (Face ID, Touch ID, empreinte digitale ou équivalent), celui-ci repose sur les API sécurisées de votre appareil. Nous ne recevons pas vos données biométriques.",
        },
        {
          p: "L’Application peut envoyer des **notifications locales** selon vos réglages. Vous pouvez les activer ou les désactiver dans l’Application et/ou dans les réglages de l’appareil.",
        },
        {
          p: "La protection de vos contenus dépend aussi de la sécurisation de votre appareil (code d’accès, mises à jour, et le fait de ne pas confier un appareil déverrouillé à des personnes non autorisées). Aucune méthode de stockage n’est totalement sûre.",
        },
      ],
    },
    {
      id: "support",
      heading: "Assistance et retours",
      blocks: [
        {
          p: "Vous pouvez nous contacter pour toute question sur l’Application ou les présentes Conditions (voir [Contact](#contact)). Si vous envoyez un signalement, une demande d’assistance ou un retour, évitez d’y inclure des informations personnelles sensibles qui ne sont pas nécessaires au traitement de votre demande, sauf si vous choisissez de le faire.",
        },
      ],
    },
    {
      id: "ip",
      heading: "Propriété intellectuelle",
      blocks: [
        {
          p: "L’Application, son nom, son logo, son interface, son design, son code, sa documentation et tous les éléments associés (à l’exclusion de Vos Contenus) appartiennent à Code and Sorcery ou à ses concédants et sont protégés par les lois applicables en matière de propriété intellectuelle.",
        },
        {
          p: "Aucune stipulation des présentes Conditions ne vous confère de droit de propriété sur l’Application ou sur nos marques.",
        },
      ],
    },
    {
      id: "third-parties",
      heading: "Magasins d’applications et services tiers",
      blocks: [
        {
          p: "L’Application est distribuée via l’App Store d’Apple et/ou Google Play. Votre usage est également soumis aux conditions et politiques du magasin et de la plateforme concernés.",
        },
        {
          p: "Certaines fonctionnalités reposent sur des services tiers ou système (système d’exploitation, partage, stockage local, entre autres). Nous ne sommes pas responsables des services tiers ni de leurs conditions.",
        },
      ],
    },
    {
      id: "updates",
      heading: "Mises à jour et évolutions du service",
      blocks: [
        {
          p: "Nous pouvons mettre à jour, modifier, suspendre ou interrompre tout ou partie de l’Application pour des raisons de maintenance, de sécurité, de conformité ou d’amélioration. Des mises à jour peuvent être nécessaires pour continuer à utiliser certaines fonctionnalités.",
        },
      ],
    },
    {
      id: "warranties",
      heading: "Exclusion de garanties",
      blocks: [
        {
          p: "Dans la limite maximale permise par le droit applicable, l’Application est fournie **« en l’état »** et **« selon disponibilité »**, sans garantie expresse ou implicite de performance, d’adéquation à un usage particulier, de fonctionnement sans erreur ou de disponibilité ininterrompue.",
        },
        {
          p: "Les règles impératives de protection des consommateurs demeurent applicables lorsque la loi ne permet pas d’y renoncer.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Limitation de responsabilité",
      blocks: [
        {
          p: "Dans la limite maximale permise par le droit applicable, Code and Sorcery ainsi que ses dirigeants, salariés et partenaires ne sauraient être tenus responsables des dommages indirects, accessoires, spéciaux ou consécutifs, des pertes de données, des pertes de profits, ni des préjudices résultant de Vos Contenus, de votre usage de l’Application ou de son usage par un tiers sur votre appareil.",
        },
        {
          p: "Dans la limite permise par la loi, notre responsabilité totale au titre de toute réclamation liée à l’Application ou aux présentes Conditions est limitée au montant que vous avez payé pour l’Application au cours des douze (12) mois précédant le fait générateur, ou à zéro si l’Application est gratuite.",
        },
      ],
    },
    {
      id: "termination",
      heading: "Résiliation",
      blocks: [
        {
          p: "Vous pouvez cesser d’utiliser l’Application à tout moment en la désinstallant. Nous pouvons suspendre ou retirer l’accès en cas de manquement aux présentes Conditions ou si la loi l’exige.",
        },
        {
          p: "Les clauses qui, par nature, doivent survivre (propriété intellectuelle, exclusions de garanties, limitations de responsabilité, droit applicable et clauses similaires) continuent de s’appliquer après que vous avez cessé d’utiliser l’Application.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Modifications des présentes Conditions",
      blocks: [
        {
          p: "Nous pouvons mettre à jour les présentes Conditions de temps à autre. La date de dernière mise à jour indiquée en tête de page sera alors modifiée. La poursuite de l’utilisation de l’Application après l’entrée en vigueur des modifications vaut acceptation des Conditions mises à jour, dans la limite permise par la loi.",
        },
      ],
    },
    {
      id: "law",
      heading: "Droit applicable et litiges",
      blocks: [
        {
          p: "Les présentes Conditions sont régies par le **droit français**, sous réserve des règles impératives de protection des consommateurs de votre pays de résidence.",
        },
        {
          p: "À défaut de résolution amiable, les tribunaux français sont compétents, sous réserve des règles impératives de compétence en matière de consommation.",
        },
      ],
    },
    {
      id: "privacy",
      heading: "Politique de confidentialité",
      blocks: [
        {
          p: "Le traitement des informations en lien avec l’Application est décrit dans notre [politique de confidentialité](/fr/primz/privacy). En cas de contradiction entre les présentes Conditions et la politique de confidentialité sur des questions de données personnelles, la politique de confidentialité prévaut sur ces questions.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          p: "Pour toute question relative aux présentes Conditions ou à Primz, écrivez à Code and Sorcery : [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
        },
      ],
    },
  ],
};

const legalIndexGroups: LegalIndexGroup[] = [
      {
        slug: "primz",
        name: "Primz",
        note: "iOS & Android · en développement",
        entries: [
          {
            title: "Politique de confidentialité",
            body: "Ce que Primz stocke, ce pour quoi elle demande l’autorisation, et pourquoi presque rien ne nous parvient.",
            path: "/primz/privacy",
          },
          {
            title: "Conditions d’utilisation",
            body: "Licence, responsabilités, limitation de responsabilité et droit applicable.",
            path: "/primz/terms",
          },
        ],
      },
      {
        slug: "env-checker",
        name: "Env Checker",
        note: "VS Code · MIT",
        entries: [
          {
            title: "Pas de politique distincte",
            body: "L’extension fonctionne entièrement dans votre éditeur, sans compte, sans télémétrie et sans appel réseau. Une politique de confidentialité n’aurait rien à décrire, et il n’y a pas de conditions à accepter au-delà de la licence.",
          },
          {
            title: "Licence MIT",
            body: "Le code source est public et le texte de la licence se trouve dans le dépôt.",
            href: "https://github.com/Code-and-Sorcery/vscode-env-checker/blob/main/LICENSE",
          },
        ],
      },
      {
        name: "Code and Sorcery",
        note: "SASU · France",
        entries: [
          {
            title: "Éditeur",
            body: "Code and Sorcery, SASU immatriculée en France, édite les applications listées ci-dessus. Demandes écrites et notifications légales : [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
          },
        ],
      },
    ];

export const fr: Dictionary = {
  htmlLang: "fr",
  localeName: "Français",
  switchTo: "English",
  switchAria: "Lire cette page en anglais",

  nav: {
    apps: "Apps",
    studio: "Studio",
    legal: "Mentions",
    home: "Accueil",
    skipToContent: "Aller au contenu",
    menu: "Menu",
    close: "Fermer",
  },

  common: {
    updated: "Dernière mise à jour",
    onThisPage: "Sur cette page",
    copy: "Copier",
    copied: "Copié",
    copyAria: "Copier dans le presse-papiers",
    open: "Ouvrir",
    readMore: "En savoir plus",
    contact: "Contact",
    backHome: "Retour à l’entrée",
    backToApps: "Retour aux applications",
    license: "Licence",
    status: "Statut",
    platform: "Plateforme",
    stack: "Stack",
    external: "nouvel onglet",
  },

  status: {
    live: "Publiée",
    building: "En développement",
  },

  splash: {
    tagline: "Studio de développement indépendant",
    subtitle: "Applications, outils, onchain, avec un peu de magie.",
    enter: "Voir les applications",
    contact: "Me contacter",
  },

  studio: {
    eyebrow: "Le studio",
    title: "Conjurer le sort, et livrer",
    titleParts: ["Conjurer le sort,", "et livrer"],
    lead: "Code and Sorcery est un studio de développement à une personne, immatriculé en France sous forme de SASU. Je conçois, construis et livre des produits de bout en bout — et je publie mes propres applications sous le même nom.",
    facts: [
      { label: "Structure", value: "SASU · France" },
      { label: "Terrain", value: "Web · Mobile · Onchain" },
      { label: "Langues", value: "Français · Anglais" },
    ],
    workTitle: "Ce que je construis",
    work: [
      {
        title: "Ingénierie produit",
        body: "TypeScript de bout en bout : front Next.js, services Node, Postgres ou Mongo en dessous, GraphQL ou REST entre les deux.",
      },
      {
        title: "Applications mobiles",
        body: "React Native et Expo pour iOS et Android, hors ligne d’abord quand le produit le mérite — comme Primz, qui n’a jamais besoin de serveur.",
      },
      {
        title: "Travail onchain",
        body: "Contrats Solidity et les dapps autour, du prototype à quelque chose que l’on confie à un auditeur.",
      },
      {
        title: "La qualité comme fonctionnalité",
        body: "Frontières typées, suites Vitest et Playwright, Storybook pour ce que les gens manipulent, CI qui bloque au lieu de râler.",
      },
    ],
    stackTitle: "Composants du sort",
    stackNote: "Ceux vers lesquels je vais le plus souvent.",
    elsewhereTitle: "Ailleurs",
    elsewhere: [
      { label: "GitHub", value: "Varadiell", key: "github" },
      { label: "LinkedIn", value: "williamsimonvezo", key: "linkedin" },
      { label: "CV", value: "Curriculum vitae", key: "resume" },
    ],
    ctaTitle: "Quelque chose à construire ?",
    ctaBody:
      "Travail produit, projet à partir de zéro, audit, ou base de code qui a grandi plus vite que ses fondations — dites-moi ce que vous avez en face de vous.",
    ctaAction: "M’écrire",
  },

  apps: {
    eyebrow: "Catalogue",
    title: "Les applications forgées",
    lead: "Tout ce que Code and Sorcery a publié ou s’apprête à publier. Les documents légaux de chacune se trouvent dans la section Mentions.",
    entries: {
      "env-checker": {
        tagline: "Lire, documenter et comparer les fichiers .env dans VS Code.",
        summary:
          "Un éditeur personnalisé qui transforme un fichier dotenv en tableau : les commentaires deviennent de la documentation, et un second fichier montre exactement quelles clés manquent ou sont en trop.",
      },
      primz: {
        tagline: "Gardez la trace de toutes les premières fois.",
        summary:
          "Un journal privé pour les enfants qui vous sont proches — premières fois, souvenirs, photos, audio et notes courtes, gardés sur le téléphone et nulle part ailleurs.",
      },
    },
    forgeTitle: "Encore sur l’enclume",
    forgeBody:
      "D’autres projets sont en cours de martelage et ne sont pas encore publics. Ils arriveront ici quand ils seront prêts, pas avant.",
  },

  envChecker: {
    eyebrow: "Extension VS Code",
    lead: "Ouvrez un fichier .env dans une vue structurée. Les commentaires deviennent la documentation de chaque clé, et la comparaison de deux variantes montre d’un coup d’œil ce qui manque ou ce qui traîne.",
    screenshotCaption:
      ".env comparé à .env.example — clés identiques, une clé en trop, une clé manquante.",
    installTitle: "Installation",
    installNote:
      "Ou cherchez « Env Checker » dans la vue Extensions de votre éditeur.",
    requirements: "VS Code 1.85.0 ou plus récent",
    featuresTitle: "Ce qu’elle fait",
    features: [
      {
        title: "Éditeur personnalisé",
        body: "L’ouverture d’un fichier .env ou .env.* passe par la vue Env Checker. Une commande ramène à l’éditeur de texte classique quand vous le souhaitez.",
      },
      {
        title: "Tableau formaté",
        body: "Clés, valeurs et documentation fusionnée depuis les lignes # au-dessus de la clé et le commentaire en ligne facultatif après la valeur.",
      },
      {
        title: "Comparaison côte à côte",
        body: "Choisissez un fichier de base et un fichier de comparaison dans le même dossier. Quand les deux existent, .env face à .env.example est le défaut.",
      },
      {
        title: "Mise à jour en direct",
        body: "Modifier un fichier env du dossier rafraîchit la vue, et le contenu non enregistré est utilisé quand le fichier est ouvert dans un onglet.",
      },
      {
        title: "Langage dotenv",
        body: "Un identifiant de langage dotenv est enregistré pour les motifs de noms habituels : l’édition en texte brut se comporte correctement aussi.",
      },
    ],
    commandsTitle: "Commandes",
    commandsNote:
      "Également accessibles depuis le menu contextuel de l’explorateur et la barre de titre de l’éditeur quand le fichier est un fichier env.",
    commands: [
      {
        name: "Env Checker: Open formatted view",
        body: "Ouvre le panneau de comparaison pour le fichier env actif.",
      },
      {
        name: "Env Checker: Compare with .env.example (and related)",
        body: "Le même panneau, centré sur vos fichiers d’exemple et apparentés.",
      },
      {
        name: "Env Checker: Compare env files…",
        body: "Choisissez les fichiers dans une boîte de dialogue ; la première sélection fixe le dossier de contexte.",
      },
      {
        name: "Env Checker: Reopen as text editor",
        body: "Ouvre le même fichier dans l’éditeur de texte par défaut.",
      },
    ],
    settingsTitle: "Réglages",
    settings: [
      {
        name: "envChecker.relatedFileNames",
        body: "Noms de fichiers du même dossier que le fichier actif à considérer comme fichiers env apparentés, en plus des motifs .env et .env.*.",
      },
    ],
    parserTitle: "Notes sur l’analyseur",
    parser: [
      "Un `export` facultatif avant `KEY=value` est pris en charge.",
      "Les lignes de commentaire juste au-dessus d’une clé s’y rattachent comme documentation ; deux lignes vides consécutives ou plus rompent ce lien, une seule reste acceptée.",
      "Les valeurs entre guillemets gèrent l’échappement comme les implémentations dotenv courantes.",
    ],
    privacyTitle: "Rien ne quitte l’éditeur",
    privacyBody:
      "Env Checker lit les fichiers que vous ouvrez, et rien d’autre. Aucun compte, aucune télémétrie, aucun appel réseau : c’est pourquoi elle n’a pas de politique de confidentialité distincte. Le code source est public, sous licence MIT.",
  },

  primz: {
    eyebrow: "iOS & Android",
    lead: "Un journal privé pour les enfants qui vous sont proches. Premières fois, souvenirs, photos, audio et notes courtes — gardés sur le téléphone, sans compte et sans serveur au milieu.",
    statusTitle: "Pas encore sur les stores",
    statusBody:
      "Primz est encore en développement. Ses conditions et sa politique de confidentialité sont déjà publiées ici pour que l’application pointe vers une adresse stable dès le premier jour.",
    pillarsTitle: "L’idée",
    pillars: [
      {
        title: "Le local d’abord, pas le cloud",
        body: "Aucun compte à créer, aucune synchro à qui faire confiance. Votre frise vit dans le stockage privé de l’application sur votre appareil, et l’application n’est pas faite pour l’envoyer ailleurs.",
      },
      {
        title: "Chaque première fois, gardée",
        body: "Premières fois, souvenirs et perles sur une seule frise, avec photos, vidéo, audio et dates — et un profil par enfant.",
      },
      {
        title: "À vous de les sortir",
        body: "Exportez ce que vous voulez, partagez avec un téléphone à proximité en Bluetooth sans serveur, ou transformez un souvenir en objet imprimé.",
      },
    ],
    featuresTitle: "Dans l’application",
    features: [
      { title: "Frise", body: "Chaque entrée dans l’ordre, par profil." },
      { title: "Premières fois", body: "Jalons avec dates, notes et médias." },
      { title: "Souvenirs", body: "Les moments à garder, par catégorie." },
      { title: "Perles", body: "Temps forts courts, une ligne et une image." },
      { title: "Album", body: "Tout le visuel, au même endroit." },
      { title: "Notes audio", body: "La voix, pas seulement les mots." },
      { title: "Calendrier", body: "Revenir par date plutôt que par liste." },
      { title: "Accomplissements", body: "De quoi garder le journal vivant." },
      { title: "Cartes & tirages", body: "Transformer un souvenir en papier." },
      { title: "Partage à proximité", body: "Passage en Bluetooth, sans serveur." },
      { title: "Verrouillage", body: "Face ID, Touch ID ou empreinte." },
      { title: "Rappels", body: "Notifications locales, planifiées sur l’appareil." },
    ],
    legalTitle: "Mentions légales",
    legalBody:
      "Les deux documents sont publiés à des adresses stables, référencées depuis l’application et les stores.",
  },

  legalIndex: {
    eyebrow: "Mentions",
    title: "Documents des applications",
    lead: "Conditions d’utilisation, politiques de confidentialité et licences de tout ce que publie Code and Sorcery.",
    groups: legalIndexGroups,
  },

  legal: {
    primzPrivacy,
    primzTerms,
  },

  notFound: {
    eyebrow: "404",
    title: "Rien à ce sceau",
    lead: "La page demandée n’est pas ici. Elle a peut-être été renommée, ou n’a jamais existé.",
  },

  footer: {
    tagline: "Studio de développement indépendant. Applications, outils et onchain.",
    siteTitle: "Site",
    appsTitle: "Applications",
    elsewhereTitle: "Ailleurs",
    legalTitle: "Mentions",
    rights: "Code and Sorcery · SASU immatriculée en France",
  },
};
