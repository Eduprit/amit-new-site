import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: "About",
  description:
    "Educator turned founder, building Luminary Steps — career discovery for Indian students.",
};

const About = () => {
  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 text-5xl font-bold text-accent md:text-8xl">About</h1>
      <div className="flex flex-col-reverse md:flex-row-reverse md:gap-20">
        <div className="max-w-lg text-pretty text-base leading-relaxed md:text-lg">
          <p>
            Hey, I&apos;m Amit. I&apos;m an educator who ended up building
            products, and right now I&apos;m building{" "}
            <Link
              href="/luminary-steps"
              className="font-bold text-accent underline underline-offset-4"
            >
              Luminary Steps
            </Link>{" "}
            &mdash; career discovery for Indian students in grades 6&ndash;12.
          </p>
          <p className="my-4">
            I studied at IIT Bombay, and I&apos;ve spent my career since then
            inside education: teaching, designing curricula, leading academic
            teams, and working out how to make good learning reach further than
            a single classroom. Mathematics is where I started, and it still
            shapes how I think about most problems.
          </p>
          <p className="my-4">
            Somewhere along the way I started spending more time counselling and
            mentoring students than building things for them. That turned out to
            be the useful part. Sitting with a fifteen-year-old who&apos;s about
            to choose their subjects for class 11, and realising how little they
            have to go on, is where Luminary Steps came from.
          </p>
          <p className="my-4">
            Away from work, you&apos;ll usually find me:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>Running long distances, or recovering from having run one</li>
            <li>
              Somewhere at the intersection of pure mathematics and AI, which I
              promise is fun
            </li>
            <li>Solving a Rubik&apos;s cube faster than I did last week</li>
            <li>Working out one more piece on the flute</li>
            <li>Taking photos of things most people walk past</li>
          </ul>
          <p className="my-4">
            I&apos;m always up for a conversation about education, product, or
            why career guidance for teenagers is so much worse than it needs to
            be.{" "}
            <a
              href={siteConfig.socialLinks.email}
              className="font-bold text-accent underline underline-offset-4"
            >
              Say hello
            </a>
            .
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
