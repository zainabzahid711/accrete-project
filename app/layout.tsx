import type { Metadata } from "next";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
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
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d850.9414662157785!2d74.3228475!3d31.4481121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907228696df45%3A0x8fb12d94137d4ef6!2sSybrid%20Private%20Limited!5e0!3m2!1sen!2s!4v1729251465827!5m2!1sen!2s"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </html>
  );
}
