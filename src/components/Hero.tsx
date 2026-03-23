import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/80 via-stone-900/60 to-amber-900/40" />

      {/* Animated accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-amber-200 text-sm font-medium mb-8 animate-fade-up">
          <Heart size={14} className="fill-amber-400 text-amber-400" />
          <span>Empowering Communities Since 2019</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Building Stronger
          <br />
          <span className="text-gradient">Communities Together</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up font-light" style={{ animationDelay: "0.3s" }}>
          Since 2019, we've empowered over 10,000 families through education,
          healthcare, and community development programs across 15 regions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button
            onClick={() => scrollTo("programs")}
            className="bg-gradient-warm hover:opacity-90 text-white border-0 text-base px-8 py-6 shadow-2xl shadow-amber-500/25 font-semibold transition-all duration-300 hover:shadow-amber-500/40 hover:scale-[1.02] group"
          >
            Our Programs
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("contact")}
            className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 backdrop-blur-sm font-medium"
          >
            Get Involved
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-white/40 text-sm font-medium animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <span>501(c)(3) Certified</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Platinum Transparency</span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
          <span className="hidden sm:inline">4.9/5 Charity Rating</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
