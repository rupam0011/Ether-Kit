import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtherKit",
  description: "One stop solution for website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F2F0F5]">
        {/* Grain overlay */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/grain-bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            opacity: 0.6,
          }}
        />

        <main className="relative z-1 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
