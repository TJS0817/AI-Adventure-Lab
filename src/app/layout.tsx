import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { AdventureProvider } from "@/components/providers/adventure-provider";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Adventure Lab",
  description:
    "A playful, child-safe learning lab where kids explore what AI is and build creative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <AdventureProvider>{children}</AdventureProvider>
      </body>
    </html>
  );
}
