import type { Metadata } from "next";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accrete Concierge",
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
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
