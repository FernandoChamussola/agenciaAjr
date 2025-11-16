"use client";
import React, { useState, useEffect, useRef } from 'react';

type SectionTitleProps = {
  title: string;
  paragraph: string;
  center?: boolean;
  mb?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  paragraph,
  center = false,
  mb = 'mb-16',
}) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`${center ? 'text-center' : ''} ${mb} transition-all duration-1000 ${
        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title.split('serviços da mais alta qualidade').map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i === 0 && (
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                serviços da mais alta qualidade
              </span>
            )}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-slate-400 text-lg max-w-3xl mx-auto">
        {paragraph}
      </p>
      
      {/* Decorative line */}
      <div className="flex items-center justify-center mt-8">
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
    </div>
  );
};

export default SectionTitle;
