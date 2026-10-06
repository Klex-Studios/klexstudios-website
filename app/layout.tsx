import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klexstudios.com"),
  title: {
    default: "Klex Studios",
    template: "%s | Klex Studios",
  },
  description:
    "Klex Studios builds digital products for real social moments, dating, events, parties, and connection.",
  icons: {
    icon: { url: "/logos/klex-logo.png", type: "image/png" },
    apple: "/logos/klex-logo.png",
  },
  openGraph: {
    title: "Klex Studios",
    description: "Digital products for real social moments.",
    url: "https://klexstudios.com",
    siteName: "Klex Studios",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Klex Studios",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
