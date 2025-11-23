import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concept Expomer 2ème Édition | ECOGiC",
  description:
    "Concept stratégique pour la deuxième édition d'Expomer, élaboré par ECOGiC: axes, programmation, expérience visiteurs et feuille de route opérationnelle.",
  openGraph: {
    title: "Concept Expomer 2ème Édition",
    description:
      "Concept stratégique détaillé pour la deuxième édition d'Expomer proposé par ECOGiC.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className="antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
