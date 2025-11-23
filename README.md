# Concept Expomer 2ème Édition

Ce dépôt contient une proposition de concept stratégique pour la deuxième édition d'Expomer, élaborée pour le bureau d'ingénierie ECOGiC. Le livrable est présenté sous forme d'application Next.js prête à être déployée sur Vercel et accessible publiquement.

## 📦 Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) & [Framer Motion](https://www.framer.com/motion/) pour les animations légères

## 🚀 Scripts

```bash
npm install     # Installe les dépendances
npm run dev     # Lance le serveur de développement (http://localhost:3000)
npm run build   # Compile la version de production
npm start       # Démarre le serveur en production locale
```

## 🗂️ Structure

```
app/
  layout.tsx      # Layout et métadonnées globales
  page.tsx        # Page principale avec tout le concept
  globals.css     # Styles globaux & thème
app/components/
  Section.tsx     # Composant d'encapsulation des sections
```

## 🌐 Déploiement

L'application est déployée sur Vercel : [https://agentic-4df07901.vercel.app](https://agentic-4df07901.vercel.app)

Pour déclencher un nouveau déploiement :

```bash
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```

## ✨ Contenu

La page présente :
- Le positionnement stratégique de l'édition 2025
- Trois univers thématiques interconnectés
- L'expérience visiteurs et les temps forts
- La feuille de route opérationnelle
- Les indicateurs d'impact et le kit de lancement

Cette base peut être enrichie avec de nouveaux contenus, des traductions ou des modules interactifs supplémentaires selon les besoins de la direction.
