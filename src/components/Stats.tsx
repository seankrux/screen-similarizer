import { useEffect, useRef, useState } from "react";

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { number: 28, label: "Causes Supported" },
  { number: 10000, label: "Families Helped", suffix: "+" },
  { number: 378, label: "Active Volunteers" },
  { number: 25, label: "Years of Service" },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) {
  const count = useCountUp(stat.number, isVisible);

  return (
    <div className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="text-4xl font-bold mb-2">
        {count.toLocaleString()}{stat.suffix ?? ""}
      </div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </div>
  );
}

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="stats" ref={ref} className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};
