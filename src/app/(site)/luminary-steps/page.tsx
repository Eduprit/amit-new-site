import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LuminaryStepsIcon } from "@/icons/luminary-steps";
import { lsUrl, siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Luminary Steps",
  description:
    "Career discovery for Indian students in grades 9 to 12, and why I'm building it.",
};

const team = [
  {
    who: "Builders",
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

const primaryButton =
  "my-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-6 py-3 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-neutral-800 dark:bg-neutral-800 dark:hover:text-neutral-200";
const secondaryButton =
  "my-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-accent px-6 py-3 text-center text-base font-bold tracking-wide text-accent transition-all hover:cursor-pointer hover:bg-accent hover:text-white";

const LuminaryStepsPage = () => {
  return (
    <div className="px-5 xl:px-0">
      <header className="mb-16 md:mb-24">
        <h1 className="my-4 flex items-center gap-3 text-5xl font-bold leading-none text-accent md:gap-5 md:text-8xl">
          <LuminaryStepsIcon className="h-12 w-12 shrink-0 md:h-20 md:w-20" />
          Luminary Steps
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed md:text-2xl">
          Career discovery for students in grades 9 to 12. A student answers 35
          questions about how they think, what they enjoy and how they learn,
          and gets a short list of careers that suit them, along with what it
          would take to get there.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={lsUrl("/", "ls_page")} className={primaryButton}>
            Start the free assessment <ArrowUpRight />
          </a>
          <a href={lsUrl("/", "ls_page")} className={secondaryButton}>
            Go to luminarysteps.com <ArrowUpRight />
          </a>
        </div>
        <figure className="mt-12 max-w-3xl">
          <Image
            src="/assets/luminary-steps/blueprint-top-match.png"
            alt="The top of a Career Blueprint: Game Developer / Graphics Engineer, a 76% match, with the reason it fits"
            width={772}
            height={320}
            className="h-auto w-full rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-700"
          />
          <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            The top of a Career Blueprint: the career that fits best, and why.
          </figcaption>
        </figure>
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
          What it gives you
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-5">
            The first report is free. It covers a student&apos;s personality
            type, their interests, how they learn best, and the one career we
            think fits them most.
          </p>
          <p className="mb-5">
            If they want more, the paid Career Blueprint gives the full plan for
            their top match, plus a second career of their choice. Each one
            comes with salary ranges in India, the entrance exams involved, and
            a plan that runs from class 11 into the first job.
          </p>
          <p className="mb-5">
            Families who&apos;d rather talk it through can book a session with
            one of our certified career counsellors, online or in person in
            Bhopal.
          </p>
        </div>
      </section>

      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />

      <section className="my-20 md:my-28">
        <h2 className="mb-8 text-4xl leading-none text-accent md:text-6xl">
          The Stream Matrix
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-5">
            Most students choose a Class 11 stream before they know what careers
            it leads to, and many pick Science because they&apos;ve been told it
            keeps every door open. That isn&apos;t quite true. Law, Design, CA
            and the Civil Services are open from every stream, and plenty of
            other careers need just one extra subject. The{" "}
            <a
              href={lsUrl("/streams", "ls_page")}
              className="font-bold text-accent underline underline-offset-4"
            >
              Stream Matrix
            </a>{" "}
            shows where PCM, PCB, Commerce and Humanities can each take you.
            It&apos;s free, with no sign-up. A Blueprint adds a personal version
            that lays the student&apos;s own careers against every Class 11
            subject choice.
          </p>
        </div>
        <figure className="mt-8 max-w-3xl">
          <a href={lsUrl("/streams", "ls_page")}>
            <Image
              src="/assets/luminary-steps/stream-matrix.png"
              alt="The Stream Matrix: tabs for PCM, PCB, Commerce and Humanities, with where the PCM stream leads"
              width={772}
              height={464}
              className="h-auto w-full rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-700"
            />
          </a>
          <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            What the PCM stream opens up, from the Stream Matrix.
          </figcaption>
        </figure>
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
          Try it
        </h2>
        <div className="mb-8 max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          <p className="mb-5">
            If your child is in grades 9 to 12, it takes about twenty minutes,
            and the first report doesn&apos;t cost anything.
          </p>
          <p className="mb-5">
            If you run a school or work with students, write to me. Most of
            what&apos;s good in Luminary Steps came out of conversations like
            that.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={lsUrl("/", "ls_page")} className={primaryButton}>
            Start the free assessment <ArrowUpRight />
          </a>
          <a href={siteConfig.socialLinks.email} className={secondaryButton}>
            Email me <ArrowUpRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LuminaryStepsPage;
