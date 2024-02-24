import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScoreCards Online",
  description: "ScoreCards Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="md:m-auto md:h-screen md:aspect-mobile">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
