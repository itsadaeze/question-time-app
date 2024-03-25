import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import SessionProviderPage from "./providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Question Time App",
  description: "Question Time Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderPage>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProviderPage>
      </body>
    </html>
  );
}
