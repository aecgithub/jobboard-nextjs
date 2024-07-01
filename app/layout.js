import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Java | Drupal | Angular | DevOps | Big Data | Mobile | .NET Staffing Solutions Worldwide | All European Careers",
    template: "%s"
  },
  description: "Top-tier Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA specialised in Java, Drupal, Angular, DevOps, Big Data, Mobile and .NET technologies.. Complete tech staff augmentation services from All European Careers",
  keywords: ['Java jobs', 'Staffing Solutions Worldwide'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NY7474EFRK"></Script>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NY7474EFRK', {
            page_path: window.location.pathname,
            });
            `,
          }}
        />
        <script src="https://cdn.pagesense.io/js/alleuropeancareers/1ec7c5bd40b9421d9aa2de28926ae05b.js" async></script>
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58ML8KD"
          height="0" width="0"></iframe></noscript>
        <Header/>
          <div className="container">
            {children}
          </div>
        <Footer/>
        </body>
    </html>
  );
}
