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
      <head>
        <meta name="google-site-verification=T1asU1mEC7qJ-pMR9HhFDZfRHRavHjwLtQUnBC60wkc"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
