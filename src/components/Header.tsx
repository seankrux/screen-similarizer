import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Impact", id: "stats" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-stone-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-warm flex items-center justify-center shadow-lg shadow-amber-500/25">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-stone-900" : "text-white"
              }`}
            >
              Community
              <span className="text-gradient"> Foundation</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                  scrolled
                    ? "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-warm rounded-full transition-all duration-300 group-hover:w-6" />
              </button>
            ))}
            <Button className="ml-4 bg-gradient-warm hover:opacity-90 text-white border-0 shadow-lg shadow-amber-500/25 font-semibold px-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02]">
              Donate
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={scrolled ? "text-stone-900" : "text-white"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-stone-900" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 animate-fade-up">
            <div className="glass rounded-2xl p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-100/80 rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-warm hover:opacity-90 text-white border-0 shadow-lg shadow-amber-500/25 font-semibold">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
