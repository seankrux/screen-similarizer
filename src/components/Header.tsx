import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foundation-primary cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Nonprofit Template
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo("stats")} className="text-foundation-text hover:text-foundation-primary transition-colors">
              Impact
            </button>
            <button onClick={() => scrollTo("causes")} className="text-foundation-text hover:text-foundation-primary transition-colors">
              Causes
            </button>
            <button onClick={() => scrollTo("contact")} className="text-foundation-text hover:text-foundation-primary transition-colors">
              Contact
            </button>
            <Button className="bg-foundation-primary hover:bg-foundation-secondary text-white">
              Donate
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
