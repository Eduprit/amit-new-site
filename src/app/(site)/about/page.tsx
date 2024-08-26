import Image from "next/image";

const About = () => {
  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 text-5xl font-bold text-accent md:text-8xl">
        About
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse md:gap-20">
        <div className="max-w-lg text-pretty text-base leading-relaxed md:text-lg">
          <p>
            Hey, I'm Amit Tirpude. I'm a tech enthusiast and lifelong learner with a passion for making education accessible to everyone. My journey in the world of education and technology has been shaped by a simple belief: knowledge has the power to transform lives.
          </p>
          <p className="my-4">
            Growing up in India, I saw firsthand how education could open doors and create opportunities. This inspired me to dive into the world of EdTech, where I've worked on developing innovative learning solutions that can reach people regardless of their background or location.
          </p>
          <p className="my-4">
            When I'm not geeking out over the latest in educational technology, you might find me:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Exploring the intersection of pure mathematics and AI (yes, I find this fun!)</li>
            <li>Dreaming up new ways to make learning more engaging and accessible</li>
            <li>Running long distances or training for my next marathon</li>
            <li>Mentoring young talents and helping them discover their potential</li>
          </ul>
          <p>
            I believe that in today's world, continuous learning is key. Whether it's picking up a new coding language, understanding a complex math concept, or pushing my physical limits in a marathon, I'm always up for a challenge.
          </p>
          <p className="mt-4">
            Through this website, I hope to share my experiences, insights, and the occasional random thought. Feel free to explore and reach out if you'd like to chat about EdTech, mathematics, long-distance running, or just exchange ideas on how we can make learning more awesome for everyone.
          </p>
          <p className="mt-4 font-semibold">
            Let's learn, grow, and make a difference together!
          </p>
        </div>

        <figure className="relative mb-10 h-[500px] w-full lg:h-[600px]">
          <Image
            src="/assets/profile.jpg"
            alt="Profile photo"
            fill
            style={{ objectFit: "cover" }}
          />
        </figure>
      </div>
    </div>
  );
};

export default About;