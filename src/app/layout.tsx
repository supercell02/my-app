import type { Metadata } from "next";
import { Rosarivo } from "next/font/google";
import "./globals.css";

const inter = Rosarivo({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Amar Kumar Thakur", 
  description: "Portfolio of Amar Kumar Thakur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
