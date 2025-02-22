import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Background from "./components/background";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
