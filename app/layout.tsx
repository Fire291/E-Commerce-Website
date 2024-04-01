import type { Metadata } from "next";
import "./globals.css";
import { manrope, morganite } from "@/lib/fonts";
import { Header } from "@/components/globals/Header";
import Container from "@/components/globals/Container";
import Footer from "@/components/globals/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${morganite.className}`}>
        <Header />
        <Container>{children}</Container>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
