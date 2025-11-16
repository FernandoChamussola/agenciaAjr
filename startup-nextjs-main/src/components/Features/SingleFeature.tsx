"use client";
import { useState, useEffect, useRef } from "react";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 blur-xl transition-all duration-700 ${
          isHovered ? 'opacity-30 blur-2xl' : ''
        }`}
      />
      
      {/* Main card */}
      <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-700 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />
        
        {/* Particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                transform: isHovered ? `translate(${i * 20}px, ${i * 30}px)` : 'translate(0, 0)',
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* Icon container */}
        <div className="relative mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-6 shadow-lg shadow-blue-500/50' : 'scale-100 rotate-0'
            }`}
          >
            <div
              className={`transition-transform duration-700 ${
                isHovered ? 'scale-110 rotate-12' : 'scale-100'
              }`}
            >
              {feature.icon}
            </div>
          </div>
          
          {/* Icon glow */}
          <div
            className={`absolute inset-0 w-16 h-16 rounded-xl bg-blue-500 blur-xl opacity-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-30' : ''
            }`}
          />
        </div>

        {/* Content */}
        <div className="relative">
          <h3
            className={`text-xl font-bold text-white mb-3 transition-all duration-500 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            {feature.title}
          </h3>
          
          <p
            className={`text-slate-300 leading-relaxed transition-all duration-500 ${
              isHovered ? 'text-slate-200' : ''
            }`}
          >
            {feature.paragraph}
          </p>

          {/* Hover indicator */}
          <div
            className={`mt-6 flex items-center text-blue-400 font-medium transition-all duration-500 ${
              isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
            }`}
          >
            <span className="text-sm">Saiba mais</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-700 ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </div>
  );
};

export default SingleFeature;
