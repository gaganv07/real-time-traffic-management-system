import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart City Traffic Command",
  description: "Real-time traffic management dashboard"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

