import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { FeaturedCauses } from "@/components/FeaturedCauses";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Stats />
        <FeaturedCauses />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
