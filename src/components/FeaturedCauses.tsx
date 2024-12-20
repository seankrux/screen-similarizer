import { Button } from "@/components/ui/button";

const causes = [
  {
    title: "CHENG VILLAGE",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
    stats: { likes: 120, shares: 45 },
  },
  {
    title: "PEOPLE IN DAKLAK",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3",
    stats: { likes: 89, shares: 32 },
  },
  {
    title: "THE ETHNIC STUDENTS",
    image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3",
    stats: { likes: 156, shares: 67 },
  },
];

export const FeaturedCauses = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FEATURED CAUSES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{cause.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>❤ {cause.stats.likes}</span>
                    <span>↗ {cause.stats.shares}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    LEARN MORE
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