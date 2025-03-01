import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/Layout/Analytics";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BYO Estética Avançada",
    template: "%s | BYO",
  },
  description:
    "Clínica BYO Estética avançada é uma empresa prestadora de serviços que oferece tratamentos rápidos ou terapêuticos que objetivam a reabilitação ou melhora estética e da saúde dos clientes, por meio da aplicação de cosméticos e de terapias diversas",
  metadataBase: new URL("https://byoestetica.com.br/"),
  openGraph: {
    title: "BYO Estética Avançada",
    description:
      "Clínica BYO Estética avançada é uma empresa prestadora de serviços que oferece tratamentos rápidos ou terapêuticos que objetivam a reabilitação ou melhora estética e da saúde dos clientes, por meio da aplicação de cosméticos e de terapias diversas",
    url: "https://byoestetica.com.br",
    siteName: "byoestetica.com.br",
    images: [
      {
        url: "https://byoestetica.com.br/og.png",
        width: 1333,
        height: 1333,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "BYO Estética Avançada",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100svh]`}
      >
        <Navbar />

        <main className="min-h-[200svh]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
