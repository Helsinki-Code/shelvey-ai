import { Inter } from "next/font/google";
import "./globals.css";
import { LocationSection } from "@/components/location-section";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShelVey - Directory Optimization Experts",
  description: "Expert directory optimization services to maximize your local business presence. Located in Newark, Delaware.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-r from-purple-900/80 via-rose-900/80 to-amber-900/80`}>
        <GoogleAnalytics />
        <Providers>
          <MainNav />
          <main className="relative flex-grow">
            {children}
            <LocationSection />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 