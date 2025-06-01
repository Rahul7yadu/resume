import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/code.png",
  title: "Rahul yadu",
  description:
    "Rahul yadu is a software engineer who has experience in Full Stack Web Development (MERN stack) . he has also interest in networking and systems programming",
  openGraph: {
    title: "Rahul yadu Software Engineer",
    description:
      "Rahul yadu is a software engineer who has experience in Full Stack Web Development (MERN stack) . he has also interest in networking and systems programming",
    images: ["/code.png"],
  },
  twitter: {
    title: "Rahul yadu Software Engineer",
    card: "summary",
    description:
      "Rahul yadu is a software engineer who has experience in Full Stack Web Development (MERN stack) . he has also interest in networking and systems programming",
    images: ["/code.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
