"use client";

import { Fragment } from "react";
import { Section } from "./components/Section";
import { RocketLaunchIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  {
    title: "Vision renforcée",
    description:
      "Positionner Expomer comme la plateforme nationale de l'innovation côtière et des solutions bleues durables.",
    icon: RocketLaunchIcon
  },
  {
    title: "Approche expérientielle",
    description:
      "Mettre en scène des parcours immersifs pour les visiteurs, de l'idéation aux démonstrations terrain.",
    icon: SparklesIcon
  },
  {
    title: "Impact mesurable",
    description:
      "Aligner les exposants et partenaires autour d'indicateurs ESG et d'engagement communautaire.",
    icon: UsersIcon
  }
];

const thematicUniverses = [
  {
    name: "Territoires Côtiers Résilients",
    focus:
      "Ingénierie côtière, infrastructures vertes, prévention des risques climatiques, restauration des mangroves.",
    formats: ["Forum d'experts", "Atelier de cartographie 3D", "Démo VR"],
    partners: ["Ministère de l'Environnement", "Collectivités littorales", "Bureaux d'études"],
    outcomes:
      "Feuille de route commune pour un programme pilote de résilience côtière dans 3 communes prioritaires."
  },
  {
    name: "Économie Bleue Circulaire",
    focus:
      "Valorisation des ressources marines, déchets plastiques, bioéconomie, logistique portuaire décarbonée.",
    formats: ["Pitch Arena", "Laboratoire circulaire", "Matchmaking investisseurs"],
    partners: ["Start-up bleues", "Banques de développement", "Industriels agroalimentaires"],
    outcomes:
      "Création d'un fonds d'amorçage Expomer x ECOGiC dédié aux projets circulaires à impact local."
  },
  {
    name: "Culture & Innovation Communautaire",
    focus:
      "Transmission des savoirs maritimes, tourisme durable, inclusion des jeunes, art & science.",
    formats: ["Parcours nocturne", "Masterclass", "FabLab itinérant"],
    partners: ["Associations de pêcheurs", "Collectifs artistiques", "Écoles d'ingénieurs"],
    outcomes:
      "Programme ambassadeurs Expomer pour former 50 jeunes à la médiation scientifique et à l'entrepreneuriat bleu."
  }
];

const roadmap = [
  {
    phase: "Pré-lancement",
    timeframe: "Mai - Juin",
    keyActions: [
      "Campagne de storytelling #ExpomerStories valorisant les lauréats de la première édition",
      "Consultations territoriales avec 6 collectivités pour définir les attentes 2025",
      "Signature des partenariats stratégiques avec bailleurs et sponsors principaux"
    ]
  },
  {
    phase: "Activation",
    timeframe: "Juillet - Septembre",
    keyActions: [
      "Programme d'incubation Expomer Lab pour 12 projets bleus accompagnés par ECOGiC",
      "Tournée roadshow dans 4 villes côtières avec démonstrations mobiles",
      "Campagne média (podcast, presse, influenceurs) sur le thème 'Collectivement, soignons la mer'"
    ]
  },
  {
    phase: "Expérience Expomer",
    timeframe: "Octobre",
    keyActions: [
      "3 jours d'événement hybride (présentiel + live streaming) structurés autour des univers thématiques",
      "Cérémonie Impact Awards avec jury pluridisciplinaire",
      "Clôture avec la publication du Livre Blanc des solutions bleues par ECOGiC"
    ]
  },
  {
    phase: "Légacy & Suivi",
    timeframe: "Novembre - Décembre",
    keyActions: [
      "Programme d'accompagnement post-événement et mentorat",
      "Table ronde bilan avec les partenaires institutionnels",
      "Publication d'indicateurs d'impact et plan d'action 2026"
    ]
  }
];

const metrics = [
  {
    label: "Solutions incubées",
    target: "12 projets",
    detail: "Sélection via Expomer Lab, accompagnement complet par ECOGiC"
  },
  {
    label: "Partenariats institutionnels",
    target: "15 accords",
    detail: "Engagements de collectivités, ministères et agences internationales"
  },
  {
    label: "Investissements mobilisés",
    target: "5 M€",
    detail: "Fonds, subventions et engagements privés sécurisés pendant l'événement"
  },
  {
    label: "Engagement citoyen",
    target: "10 000 participants",
    detail: "Présentiel, digital et communauté Expomer Stories"
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 py-16 sm:px-8">
      <header className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 px-8 py-14 text-white shadow-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">Expomer 2ème édition</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Cap sur « Océan Vibrant, Territoires Vivants »
        </h1>
        <p className="mt-6 max-w-2xl text-base/relaxed sm:text-lg">
          Concept directeur proposé par ECOGiC pour faire d&apos;Expomer la plateforme de référence des innovations et
          des alliances en faveur d&apos;une économie bleue inclusive. Cette édition articule vision stratégique,
          expériences immersives et impact mesurable sur les territoires côtiers.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
          {highlights.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex min-w-[12rem] flex-1 items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
            >
              <Icon className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1 text-white/80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      <Section
        id="positionnement"
        eyebrow="Positionnement"
        title="Une deuxième édition comme plateforme stratégique d'alliances"
        description="Expomer 2025 consolide la posture d'ECOGiC comme orchestrateur d'innovations pour les zones côtières, en réunissant acteurs publics, privés et communautés pour générer des solutions concrètes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/80 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-emerald-900">Objectif majeur</h3>
            <p className="mt-3 text-sm text-slate-700">
              Installer Expomer comme un rendez-vous annuel indispensable aux décideurs bleus durable, générant des
              feuilles de route opérationnelles et des financements dédiés.
            </p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-emerald-600">Publics clés</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>Collectivités littorales et agences publiques</li>
              <li>Investisseurs, bailleurs, acteurs financiers</li>
              <li>Start-ups, entreprises bleues, coopératives</li>
              <li>Société civile, jeunes talents, réseaux académiques</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-emerald-900/90 p-6 text-white shadow-md">
            <h3 className="text-lg font-semibold">Promesse de marque</h3>
            <p className="mt-3 text-sm text-white/80">
              « Vivez l&apos;océan du futur » : chaque espace révèle des solutions tangibles, chaque rencontre débouche sur une
              collaboration, chaque histoire inspire un engagement durable.
            </p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/70">Signature éditoriale</h4>
            <p className="mt-2 text-sm text-white/80">
              Trois temps narratifs : Observer (diagnostic territorial), Imaginer (solutions et alliances), Transformer
              (engagements et feuille de route).
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="univers"
        eyebrow="Architecture programmatique"
        title="Trois univers thématiques interconnectés"
        description="Chaque univers est conçu comme un écosystème immersif combinant contenus, démonstrations et co-création."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {thematicUniverses.map((universe, index) => (
            <motion.article
              key={universe.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex h-full flex-col gap-4 rounded-3xl bg-white/85 p-6 shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">{universe.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{universe.focus}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Formats phares</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {universe.formats.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Partenaires pressentis</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {universe.partners.map((partner) => (
                    <li key={partner}>{partner}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-auto rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-900">
                {universe.outcomes}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Parcours visiteurs"
        title="Une expérience immersive du diagnostic à l'engagement"
        description="Le design de l'expérience favorise la compréhension, l'implication et la conversion en actions concrètes."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/85 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-emerald-900">Highlights expérience</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <strong>Pavillon Impact Data</strong> : tableaux de bord interactifs sur l&apos;état des zones côtières, alimentés par les
                études ECOGiC.
              </li>
              <li>
                <strong>Agora Citoyenne</strong> : micro-conférences participatives, ateliers intergénérationnels, pitch des projets
                incubés.
              </li>
              <li>
                <strong>Expomer Live</strong> : plateau TV pour couvrir l&apos;ensemble des contenus, streaming et capsules vidéos.
              </li>
              <li>
                <strong>Parcours nocturne « Ondes Lumineuses »</strong> : performances artistiques, mapping et témoignages inspirants.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {["Accueil & orientation thématique", "Explorer les univers", "Participer aux labs & démonstrations", "Conclure avec des engagements mesurables"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="rounded-3xl bg-emerald-900/90 p-4 text-white shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Étape {index + 1}</p>
                <p className="mt-1 text-base text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="roadmap"
        eyebrow="Feuille de route"
        title="Planning opérationnel"
        description="Quatre phases pour structurer l'exécution et sécuriser les livrables de la deuxième édition."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {roadmap.map((stage) => (
            <article key={stage.phase} className="rounded-3xl bg-white/85 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">{stage.timeframe}</p>
              <h3 className="mt-2 text-lg font-semibold text-emerald-900">{stage.phase}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {stage.keyActions.map((action) => (
                  <li key={action} className="flex gap-2">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        eyebrow="Mesure d'impact"
        title="Indicateurs de succès"
        description="Établir des KPIs partagés pour piloter l'édition 2025 et valoriser le rôle d'ECOGiC."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-emerald-900/90 p-6 text-white shadow-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold">{metric.target}</p>
              <p className="mt-3 text-sm text-white/80">{metric.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="kit"
        eyebrow="Kit de lancement"
        title="Livrables opérationnels à produire"
        description="ECOGiC coordonne la production d'un kit complet pour sécuriser le déploiement."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/90 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-emerald-900">1. Argumentaire & identité</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Dossier de présentation Expomer 2025</li>
              <li>Charte graphique événementielle et déclinaisons digitales</li>
              <li>Kit média (photos, capsules, templates réseaux sociaux)</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/90 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-emerald-900">2. Offre exposants & partenaires</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Catalogue des espaces et expériences</li>
              <li>Grille de sponsoring orientée impact et RSE</li>
              <li>Processus de sélection & onboarding projets</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/90 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-emerald-900">3. Dispositif communication & legacy</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Plan média 360° et calendrier éditorial</li>
              <li>Système de suivi des engagements post-événement</li>
              <li>Livre blanc & campagne de diffusion internationale</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="mb-8 rounded-3xl bg-emerald-950 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Prochaine étape</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/80">
          Constituer un comité de pilotage Expomer 2025 avec ECOGiC, valider le budget prévisionnel et lancer les travaux
          de conception détaillée avec les partenaires identifiés. Ce concept pose les fondations pour une édition à la
          fois inspirante, opérationnelle et génératrice d&apos;impact mesurable.
        </p>
        <div className="mt-6 text-sm text-white/70">
          <p>Contact référent ECOGiC : cellule stratégie & innovation.</p>
          <p className="mt-1">Document vivant à enrichir au fil des validations partenaires.</p>
        </div>
        <div className="mt-8">
          <Link
            href="#positionnement"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-md transition hover:bg-emerald-50"
          >
            Explorer le concept
          </Link>
        </div>
      </footer>
    </main>
  );
}
