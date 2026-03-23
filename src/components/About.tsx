import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Eye, Target, Users } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={24} />,
    title: "Transparency",
    description:
      "Every dollar is accounted for. We publish annual impact reports and maintain an open-books policy so donors always know where their contributions go.",
  },
  {
    icon: <Target size={24} />,
    title: "Measurable Impact",
    description:
      "We set clear benchmarks for every program and track outcomes rigorously. If something isn't working, we adapt until it does.",
  },
  {
    icon: <Users size={24} />,
    title: "Community First",
    description:
      "Programs are designed with — not for — the communities we serve. Local voices guide every initiative from planning through execution.",
  },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-6">
            Our Mission
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Community Foundation is dedicated to creating lasting change in
            underserved communities. Through strategic partnerships and
            grassroots initiatives, we address the root causes of inequality and
            empower individuals to build better futures.
          </p>
        </div>

        {/* Value pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`relative group text-center p-8 rounded-2xl bg-foundation-surface border border-stone-200/60 hover:border-amber-200/60 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-warm text-white mb-5 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
