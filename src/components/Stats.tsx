import { useEffect, useState } from "react";

const stats = [
  { number: 28, label: "CAUSES" },
  { number: 10000, label: "FAMILIES" },
  { number: 378, label: "VOLUNTEERS" },
  { number: 25, label: "YEARS" },
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className={`animate-counter ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="text-4xl font-bold mb-2">{stat.number.toLocaleString()}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};