import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kajanja Brand Company Limited",
  description:
    "Kajanja Brand Company Limited is an integrated brand, creative and digital agency in Dar es Salaam, Tanzania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}