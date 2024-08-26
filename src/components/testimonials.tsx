'use client';

import React from 'react';

interface Testimonial {
  text: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This product has revolutionized our workflow. It's intuitive, powerful, and a joy to use every day.",
    name: "Alex Johnson",
    designation: "CTO, TechCorp"
  },
  {
    text: "The customer support is unparalleled. They go above and beyond to ensure our success.",
    name: "Samantha Lee",
    designation: "Operations Manager, StartUp Inc."
  },
  {
    text: "I've never seen a tool so well-designed for its purpose. It's clear the team really understands our needs.",
    name: "Michael Brown",
    designation: "Lead Developer, CodeCraft"
  }
];

const TestimonialGrid: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300"
          >
            <blockquote>
              <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.text}"
              </p>
              <cite className="block not-italic">
                <span className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</span>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {testimonial.designation}
                </span>
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;