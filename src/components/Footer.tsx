import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "About Us", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Impact", id: "stats" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: <Facebook size={18} />, label: "Facebook" },
  { icon: <Twitter size={18} />, label: "Twitter" },
  { icon: <Instagram size={18} />, label: "Instagram" },
  { icon: <Linkedin size={18} />, label: "LinkedIn" },
];

export const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center">
                <span className="text-white font-bold text-xs">CF</span>
              </div>
              <span className="text-lg font-semibold text-stone-200">Community Foundation</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Building stronger communities through education, healthcare, and economic empowerment since 2019.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-stone-500 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>hello@communityfoundation.org</li>
              <li>(555) 234-5678</li>
              <li>1200 Main Street, Suite 400</li>
              <li>San Francisco, CA 94102</li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-stone-800/60 flex items-center justify-center text-stone-400 hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-200"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800/60 pt-8 flex flex-col items-center gap-3">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Community Foundation. All rights reserved.
          </p>
          <p className="text-xs text-stone-600 flex items-center gap-1.5">
            Made with
            <Heart size={12} className="fill-amber-500 text-amber-500 inline" />
            by <span className="text-stone-500 font-medium">Sean G</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
