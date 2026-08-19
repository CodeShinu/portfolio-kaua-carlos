import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans=Geist({variable:"--font-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-mono",subsets:["latin"]});
const personData={"@context":"https://schema.org","@type":"Person",name:"Kauã Carlos",address:{"@type":"PostalAddress",addressLocality:"São Caetano do Sul",addressRegion:"SP",addressCountry:"BR"},alumniOf:{"@type":"CollegeOrUniversity",name:"Universidade Municipal de São Caetano do Sul"},sameAs:["https://github.com/CodeShinu","https://www.linkedin.com/in/devkaua06/"],knowsAbout:["Python","Flask","REST APIs","SQL","JSON","Git"]};

export const metadata:Metadata={
  title:"Kauã Carlos — Software & Computer Science",
  description:"Portfólio de Kauã Carlos, estudante de Ciência da Computação com foco em Python, backend e dados.",
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
  openGraph:{title:"Kauã Carlos — Software & Computer Science",description:"Python, backend, dados e projetos em construção.",type:"website",locale:"pt_BR"},
  twitter:{card:"summary_large_image",title:"Kauã Carlos — Software & Computer Science",description:"Python, backend, dados e projetos em construção."},
  themeColor:"#111411",
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personData)}}/>{children}</body></html>}
