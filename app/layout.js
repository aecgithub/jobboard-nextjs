import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

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
      <body className={inter.className}>
        <Header/>
          <div className="container">
            {children}
          </div>
        <Footer/>
        </body>
    </html>
  );
}
