import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Game Archive",
  description: "Trendy Game Archive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
      </head>
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}