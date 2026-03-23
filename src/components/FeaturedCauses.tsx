import { Button } from "@/components/ui/button";

const causes = [
  {
    title: "Community Development",
    description: "Providing resources and infrastructure to underserved communities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 120, raised: "$24K" },
  },
  {
    title: "Education Access",
    description: "Funding scholarships and building schools in rural areas.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 89, raised: "$18K" },
  },
  {
    title: "Youth Empowerment",
    description: "Mentoring young people and providing career development programs.",
    image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 156, raised: "$31K" },
  },
];

export const FeaturedCauses = () => {
  return (
    <div id="causes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Causes</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Explore the initiatives we are actively funding and supporting across the globe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cause.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cause.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span>{cause.stats.supporters} supporters</span>
                    <span className="font-semibold text-foundation-primary">{cause.stats.raised}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
