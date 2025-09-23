import { getCart } from "@/lib/shopify";
import { CartProvider } from "../cart/cart-context";
import Footer from "../layout/footer";
import { Navbar } from "../layout/navbar";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const cart = getCart();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <CartProvider cartPromise={cart}>
        <div className="relative z-10 flex min-h-svh flex-col bg-background">
          <Navbar />
          <main className="relative flex min-h-svh flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
