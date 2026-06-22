import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Bryce Hilton | Technical Generalist",
    description: "I'm a software engineer, game developer, and 3D technical artist (C#, Unity, React, Web Development) with a passion for the intersection of technology and nature. Though self-taught, I've built a career mastering complex systems from the ground up. I'm driven to learn whatever science is needed to turn environmental challenges into digital tools and simulations that help the Earth thrive.",
    keywords: ["Bryce Hilton", "Software Developer", "Technical Generalist", "Systems Engineer", "AgTech", "Unity", "Next.js"],
    authors: [{ name: "Bryce Hilton" }],
    openGraph: {
        title: "Bryce Hilton | Technical Generalist",
        description: "I'm a software engineer, game developer, and 3D technical artist (C#, Unity, React, Web Development) with a passion for the intersection of technology and nature. Though self-taught, I've built a career mastering complex systems from the ground up. I'm driven to learn whatever science is needed to turn environmental challenges into digital tools and simulations that help the Earth thrive.",
        url: "https://www.bhilton.dev",
        siteName: "Bryce Hilton Portfolio",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
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
