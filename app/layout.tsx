import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accrete Concierge - People as a service",
  description: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
