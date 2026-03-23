import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Building Stronger Communities</h1>
        <p className="text-xl mb-8">
          We are committed to supporting the causes that matter most — empowering families, funding education, and creating lasting change.
        </p>
        <Button className="bg-foundation-primary hover:bg-foundation-secondary text-white text-lg px-8 py-3">
          Learn More
        </Button>
      </div>
    </div>
  );
};
