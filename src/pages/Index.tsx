import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { FeaturedCauses } from "@/components/FeaturedCauses";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <FeaturedCauses />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
