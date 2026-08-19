import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans=Geist({variable:"--font-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-mono",subsets:["latin"]});

export const metadata:Metadata={
  title:"Kauã Carlos — Software & Computer Science",
  description:"Portfólio de Kauã Carlos, estudante de Ciência da Computação com foco em Python, backend e dados.",
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
  openGraph:{title:"Kauã Carlos — Software & Computer Science",description:"Python, backend, dados e projetos em construção.",type:"website",locale:"pt_BR"},
  twitter:{card:"summary_large_image",title:"Kauã Carlos — Software & Computer Science",description:"Python, backend, dados e projetos em construção."},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
