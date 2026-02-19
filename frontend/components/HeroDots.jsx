"use client";

import { useEffect, useState } from "react";

export default function HeroDots() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generatedDots = [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: Math.random() * 5,
    }));

    setDots(generatedDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#3B82F6",
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animation: `slow-drift ${dot.animationDuration}s ease-in-out infinite`,
            animationDelay: `${dot.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}
