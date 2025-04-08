import type { Metadata } from "next";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import './globals.css'

export const metadata: Metadata = {
  title: "Avila Tek",
  description: "Avila Tek - Your Trusted Technology Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="mx-12 p-5"> 
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
