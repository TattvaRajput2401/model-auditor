import type { Metadata } from "next";
import { Space_Grotesk, Inter, Roboto_Mono } from "next/font/google";
import { AuthProvider } from "@/contexts/auth-context";
import ClientLayout from "@/app/client-layout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Model Auditor — AI Supervision Platform",
  description: "Real-time monitoring and auditing of AI model behavior with synthetic verification nodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} bg-[#0e0e0e] text-[#ffffff] font-body antialiased selection:bg-primary selection:text-on-primary`}
      >
        <AuthProvider>
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
          </div>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
