import { Metadata } from "next";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "./globals.css";

//  -----------------------FOR SEO------------------ USE WHEN SITE IS LIVE

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     metadataBase: new URL("https://example.com"),
//     title:"Name",
//     description: "description",
//     authors: [
//       {
//         name: "Site Name",
//         url: "https://example.com",
//       },
//     ],
//     twitter: {
//       card: "summary_large_image",
//       creator: "@example",
//       images: "some-image",
//     },
//     robots: "index, follow",
//     alternates: {
//       canonical: `https://example.com`,
//       languages: {
//         "en-US": "/",
//       },
//     },
//     openGraph: {
//       type: "website",
//       url: `https://example.com`,
//       title: "name",
//       description: "description",
//       siteName: "Site Name",
//       images: [
//         {
//           url: "some-image",
//         },
//       ],
//     },
//     assets: "some-image",
//     keywords: [
//       "keywords"
//     ],
//   };
// }

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
