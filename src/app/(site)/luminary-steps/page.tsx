import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Luminary Steps",
  description:
    "Career discovery for Indian students in grades 6–12 — and why I'm building it.",
};

const team = [
  {
    who: "Gen Z builders",
    what: "close enough to the problem to still remember it",
  },
  {
    who: "Fellow IIT Bombay alumni",
    what: "who know what the other side of the decision looks like",
  },
  {
    who: "Psychologists",
    what: "who keep the assessment methodologically honest",
  },
  {
    who: "Engineers",
    what: "from some of the country's best product teams",
  },
  {
    who: "Counsellors",
    what: "who work with teenagers every week",
  },
  {
    who: "Educationists",
    what: "who've spent entire careers inside classrooms",
  },
];

const LuminaryStepsPage = () => {
  return (
    <div className="px-5 xl:px-0">
      <header className="mb-16 md:mb-24">
        <p className="mb-4 inline-block rounded-full border-2 border-accent px-4 py-1 text-sm font-bold uppercase tracking-wide text-accent">
          Coming soon
        </p>
        <h1 className="my-4 text-5xl font-bold leading-none text-accent md:text-8xl">
          Luminary Steps
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed md:text-2xl">
          Career discovery for Indian students in grades 6&ndash;12. An
          assessment that takes a student&apos;s interests, aptitudes and
          personality seriously &mdash; and turns them into something they can
          actually act on.
        </p>
      </header>

      <section className="my-20 md:my-28">
        <h2 className="mb-8 text-4xl leading-none text-accent md:text-6xl">
          Why I&apos;m building it
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-5">
            I&apos;ve spent a lot of time sitting with students who were about
            to choose their subjects for class 11 &mdash; the decision that
            quietly narrows or widens everything that comes after it.
          </p>
          <p className="mb-5">
            What bothered me was how those decisions were getting made. One
            student picks maths because their closest friends are picking
            maths. Another because changing subjects would mean changing
            schools, and they don&apos;t want to leave. Plenty because their
            parents had already decided, and the conversation was over before
            it began.
          </p>
          <p className="mb-5">
            None of these are stupid reasons. They&apos;re human ones. Wanting
            to stay near your friends at sixteen isn&apos;t a character flaw.
            But they&apos;re reasons that have nothing to do with the student
            &mdash; with what they&apos;re good at, what holds their attention,
            or what they&apos;d still want to be doing at thirty.
          </p>
          <p className="mb-5">
            What I almost never met was a student with real clarity about what
            came next. Not certainty &mdash; clarity. Some sense of{" "}
            <em>why this path and not another</em>. That absence is the problem
            I&apos;m building for.
          </p>
        </div>
      </section>

      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />

      <section className="my-20 md:my-28">
        <h2 className="mb-8 text-4xl leading-none text-accent md:text-6xl">
          Starting with the students
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-5">
            Before any of this became a product, it was counselling and
            mentoring &mdash; and a lot of unstructured conversation. Not to
            collect data, but to understand how students actually think. What
            they&apos;re afraid of. Who they listen to. What they believe a
            career even is.
          </p>
          <p className="mb-5">
            Most career guidance in India is built on assumptions about
            teenagers rather than conversations with them. I wanted to start
            from the other end, and keep starting there. Every part of Luminary
            Steps traces back to something a student said.
          </p>
        </div>
      </section>

      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />

      <section className="my-20 md:my-28">
        <h2 className="mb-8 text-4xl leading-none text-accent md:text-6xl">
          Who&apos;s building it
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-8">
            Luminary Steps isn&apos;t a solo project. It&apos;s being built by a
            deliberately mismatched group of people:
          </p>
        </div>
        <ul className="my-10 max-w-4xl list-none p-0 md:grid md:grid-cols-2 md:gap-x-10">
          {team.map(({ who, what }) => (
            <li key={who} className="my-4 border-l-2 border-accent pl-4">
              <h3 className="text-md font-bold lg:text-lg">{who}</h3>
              <p className="text-sm lg:text-base">{what}</p>
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          Career guidance goes wrong when it&apos;s designed by adults who have
          forgotten what sixteen felt like. This team hasn&apos;t.
        </p>
      </section>

      <section className="my-24 md:my-32">
        <h2 className="mb-6 text-4xl leading-none text-accent md:text-6xl">
          Want to know when it launches?
        </h2>
        <p className="mb-8 max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          If you run a school, work with students, or are building something
          adjacent &mdash; I&apos;d like to hear from you. The more
          conversations this thing is built on, the better it gets.
        </p>
        <a
          href={siteConfig.socialLinks.email}
          className="my-4 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-6 py-3 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-neutral-800 dark:bg-neutral-800 dark:hover:text-neutral-200"
        >
          Get in touch <ArrowUpRight />
        </a>
      </section>
    </div>
  );
};

export default LuminaryStepsPage;
