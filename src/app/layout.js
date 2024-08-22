import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/ui/footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Project Hermes",
  description: "Project Hermes is the only key-value store you'll ever need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar></NavBar>
            {children}
            <Toaster/>
          </ThemeProvider></body>
    </html>
  );
}
