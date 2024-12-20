import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/ac8a33f8-fc5c-4c5f-94f1-6aa532816b3e.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">THE TMT FOUNDATION WAY.</h1>
        <p className="text-xl mb-8">
          THE TMT FOUNDATION HAS ALWAYS BEEN COMMITTED TO SUPPORTING A CAUSE THAT WE ARE PASSIONATE ABOUT.
        </p>
        <Button className="bg-foundation-primary hover:bg-foundation-secondary text-white text-lg px-8 py-3">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};