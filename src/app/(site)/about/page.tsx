import Image from "next/image";

const About = () => {
  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
        About
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse  md:gap-20">
        <div className="max-w-lg text-pretty text-base leading-relaxed md:text-lg">
          <p>
            Hey, I am Amit Tripude, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum beatae molestias suscipit facilis labore
            aliquam eos inventore neque expedita dignissimos aut, eum laboriosam
            quam. Dolorem sequi ab illum non nisi.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            et vero dolorem qui facere laudantium reiciendis dignissimos quia
            minima, amet laboriosam natus est tempora veniam repellat veritatis,
            voluptatum magni tenetur?
          </p>
        </div>

        <figure className="relative mb-10 h-[500px] w-full  lg:h-[600px] ">
          <Image
            src="/assets/profile.jpeg"
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
