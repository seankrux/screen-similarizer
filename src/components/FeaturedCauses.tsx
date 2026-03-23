import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const programs = [
  {
    title: "Education Access",
    description:
      "Providing scholarships and after-school programs for underprivileged youth. We partner with 42 schools across 15 regions to ensure every child has the resources to thrive academically.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&w=600&q=80",
    tag: "Education",
    metric: "3,200 students enrolled",
  },
  {
    title: "Community Health",
    description:
      "Free health clinics and wellness programs in underserved neighborhoods. Our mobile clinics deliver preventive care, vaccinations, and mental health support to families who need it most.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&w=600&q=80",
    tag: "Healthcare",
    metric: "8,500 patients served annually",
  },
  {
    title: "Economic Empowerment",
    description:
      "Skills training, microloans, and job placement support for adults re-entering the workforce. Over 78% of our program graduates secure stable employment within six months.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&w=600&q=80",
    tag: "Economic Development",
    metric: "1,400 jobs placed",
  },
];

export const FeaturedCauses = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="py-24 bg-foundation-surface">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Our Programs
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Three core initiatives driving measurable change in the communities we serve.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-stone-200/60 hover:border-amber-200/60 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-stone-700">
                    {program.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Stats row */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="font-semibold text-sm text-amber-600">
                    {program.metric}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-stone-400 hover:text-amber-600 hover:bg-amber-50 p-2 h-auto group/btn"
                  >
                    <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
