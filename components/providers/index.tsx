import Footer from "../layout/footer";
import { Navbar } from "../layout/navbar";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <div className="relative z-10 flex min-h-svh flex-col bg-background">
        <Navbar />
        <main className="relative flex min-h-svh flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
