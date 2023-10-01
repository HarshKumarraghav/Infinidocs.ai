import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviders from "@/Providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Provider";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "infinidocs.ai",
  description: "infinidocs.ai: Your personal ChatGPT for documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo/logo.png" />
        </head>
        <body suppressHydrationWarning={true}>
          <Providers>
            <ThemeProviders>
              <Navbar />
              <main>{children}</main>
            </ThemeProviders>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
