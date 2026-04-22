import { Varela_Round, Khand, Averia_Sans_Libre } from "next/font/google";
import "./globals.css";

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ["latin"],
});

const khand = Khand({
  weight: '400',
  subsets: ["latin"]
})

const averiaSansLibre = Averia_Sans_Libre({
  weight: '700',
  subsets: ["latin"]
})

export const metadata = {
  title: "Matt Gilu Portfolio",
  description: "Matt Gilu Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${varelaRound.className} ${khand.className} ${averiaSansLibre.className}`}>
      <body className="body">
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
