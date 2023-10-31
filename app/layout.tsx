import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "3legant",
  description: "An electronic appliances store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " relative"}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
