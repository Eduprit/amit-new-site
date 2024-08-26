import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'My Hobbies',
  description: 'Explore my diverse hobbies including running, speed-cubing, flute playing, and photography.',
};

const hobbies = [
  {
    name: 'Running',
    description: "Running is my primary passion, offering a perfect balance of physical challenge and mental rejuvenation. It provides me with regular exercise, mental clarity, and a chance to explore my surroundings.",
    imageUrl: "/assets/hobbies/running.jpg"
  },
  {
    name: 'Speed-Cubing',
    description: "Puzzles, particularly the Rubik's cube, captivate my mind and ignite my problem-solving prowess. Speed-cubing challenges me to think quickly and strategically, constantly pushing me to improve my times and techniques.",
    imageUrl: "/assets/hobbies/speed-cubing.jpg"
  },
  {
    name: 'Flute Playing',
    description: "I find joy in the process of learning new techniques, refining my melody, and mastering challenging pieces of music. Playing the flute brings a sense of harmony to my life and helps me express myself creatively.",
    imageUrl: "/assets/hobbies/flute-playing.jpg"
  },
  {
    name: 'Photography',
    description: "Photography allows me to capture and preserve special moments and scenes. I enjoy experimenting with different angles and perspectives to create unique and stunning images, appreciating the beauty in everyday scenes.",
    imageUrl: "/assets/hobbies/photography.jpg"
  }
];

const HobbiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Hobbies</h1>
      
      <p className="mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
        In my spare time, I'm an avid <span className="font-semibold text-blue-600 dark:text-blue-400">runner</span>, 
        a passionate amateur <span className="font-semibold text-green-600 dark:text-green-400">speed-cuber</span>, 
        a melodious <span className="font-semibold text-purple-600 dark:text-purple-400">flutist</span>, and 
        a keen-eyed <span className="font-semibold text-red-600 dark:text-red-400">photographer</span>. I like to spend my 
        leisure hours engaged in physical, creative, and intellectually stimulating pursuits that allow me to 
        express myself and grow as a person.
      </p>

      <div className="space-y-12">
        {hobbies.map((hobby) => (
          <section key={hobby.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 sm:h-80">
              <Image
                src={hobby.imageUrl}
                alt={hobby.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{hobby.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-gray-600 dark:text-gray-300 leading-relaxed">
        These diverse hobbies complement each other, offering a mix of physical activity, mental challenges, 
        creative expression, and moments of tranquility. They reflect my curiosity, my drive for self-improvement, 
        and my appreciation for both the intricate details and the broader beauty of life.
      </p>
    </div>
  );
};

export default HobbiesPage;