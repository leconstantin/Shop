import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <p>Hello</p>
      </div>
      <Footer />
    </div>
  );
}
