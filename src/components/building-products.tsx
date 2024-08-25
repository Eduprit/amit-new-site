import { Skills } from "@/icons/skills";
import {
  ArrowDown01,
  Paintbrush,
  Presentation,
  ScatterChart,
} from "lucide-react";

export const BuildingProducts = () => {
  return (
    <section className="my-24  px-5 xl:px-0">
      <div className="md:flex">
        <div className="max-w-lg">
          <h2 className=" text-5xl leading-none text-accent md:text-7xl">
            Experience in education & academia
          </h2>
          <p className="my-4 md:text-xl lg:mb-4 lg:mt-10">
            I possess a robust foundation in mathematics, teaching
            methodologies, and the art of scaling academic teams.{" "}
          </p>
          <p className="my-4 md:my-0 md:text-xl">
            With my startup background, I bring a lean mindset for building
            products fast.
          </p>
        </div>

        <figure className="m-0 md:grow">
          <Skills />
        </figure>
      </div>
      <ul className="my-10  md:grid md:grid-cols-2 md:gap-x-4">
        <li className="my-4 flex items-center lg:my-10">
          {/* <Presentation size={48} strokeWidth={0.5} /> */}
          <div>
            <h3 className="text-md font-bold lg:text-lg">
              Academic Leadership
            </h3>
            <p className="text-sm lg:text-base">
              Proven expertise in leading and managing academic teams, fostering
              impactful learning journeys
            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          {/* <Paintbrush size={48} strokeWidth={0.5} /> */}
          <div>
            <h3 className="text-md font-bold lg:text-lg">
              Ed-Tech Implementation
            </h3>
            <p className="text-sm lg:text-base">
              Effective integration of innovative educational technologies to
              drive transformative learning experiences
            </p>
          </div>
        </li>

        <li className="my-4 flex items-center">
          {/* <ArrowDown01 size={48} strokeWidth={0.5} /> */}
          <div>
            <h3 className="text-md font-bold lg:text-lg">Curriculum Design</h3>
            <p className="text-sm lg:text-base">
              Demonstrated ability to design and develop comprehensive,
              engaging, and effective educational curricula
            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          {/* <ScatterChart size={48} strokeWidth={0.5} /> */}
          <div>
            <h3 className="text-md font-bold lg:text-lg">Analytics</h3>
            <p className="text-sm lg:text-base">
              Data driven decisions, user metrics, patterns & trends
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
