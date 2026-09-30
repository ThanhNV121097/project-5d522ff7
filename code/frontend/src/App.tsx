import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Service from "./components/Service";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Products />
        <Service />
      </main>
      <Footer />
    </div>
  );
}
