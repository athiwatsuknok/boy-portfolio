import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athiwat Suknok | Fullstack Developer",
  description:
    "Welcome to my personal portfolio. I build interactive, beautiful web experiences using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  generator: "v0.dev",
  keywords: [
    "Athiwat Suknok",
    "Frontend Developer",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "TypeScript",
    "React",
    "Web Development",
  ],
  authors: [{ name: "Athiwat Suknok" }],
  creator: "Athiwat Suknok",
  // metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
