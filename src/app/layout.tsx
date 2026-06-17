import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Bryce Hilton | Technical Generalist & Systems Thinker",
  description: "I build digital systems, bridge the physical world, and optimize for human utility. Specializing in full-stack dev, simulation, and AgTech.",
  keywords: ["Bryce Hilton", "Software Developer", "Technical Generalist", "Systems Engineer", "AgTech", "Unity", "Next.js"],
  authors: [{ name: "Bryce Hilton" }],
  openGraph: {
    title: "Bryce Hilton | Technical Generalist",
    description: "Building digital systems, bridging the physical world, and optimizing for human utility.",
    url: "https://www.bhilton.dev", // CHANGE THIS TO YOUR ACTUAL URL
    siteName: "Bryce Hilton Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
