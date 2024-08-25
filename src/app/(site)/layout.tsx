import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const playFairDisplayFont = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s  | ${siteConfig.siteTitle}`,
    default: siteConfig.siteTitle,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playFairDisplayFont.className}`}>
        <ThemeProvider attribute="class">
          <main className="mx-auto min-h-screen max-w-screen-lg">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
