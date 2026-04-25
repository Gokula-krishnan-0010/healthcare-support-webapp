import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareSupport NGO",
  description: "Mini Healthcare Support Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Chatbot />
          <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-6 transition-colors">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} CareSupport NGO. Community Healthcare Initiative.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
