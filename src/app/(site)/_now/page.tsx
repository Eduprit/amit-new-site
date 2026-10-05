import type { Metadata } from "next";
import Link from "next/link";
import nowData from "@/data/now.json";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm focused on at the moment.",
};

const formatUpdated = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const NowPage = () => {
  const { updated, currently, interests, media } = nowData;

  return (
    <div className="px-5 xl:px-0">
      <header className="mb-12">
        <h1 className="my-4 text-5xl font-bold leading-none text-accent md:text-8xl">
          Now
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed md:text-lg">
          What I&apos;m focused on at the moment &mdash; work, curiosities, and
          whatever I&apos;m reading or watching. Last updated{" "}
          <time dateTime={updated}>{formatUpdated(updated)}</time>.
        </p>
      </header>

      <section className="my-16">
        <h2 className="mb-6 text-3xl leading-none text-accent md:text-5xl">
          These days I&apos;m
        </h2>
        <ul className="max-w-2xl list-none p-0">
          {currently.map(({ text, url }) => (
            <li
              key={text}
              className="my-3 border-l-2 border-accent pl-4 text-base leading-relaxed md:text-lg"
            >
              {url ? <Link href={url} className="hover:underline">{text}</Link> : text}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-16">
        <h2 className="mb-6 text-3xl leading-none text-accent md:text-5xl">
          Thinking about
        </h2>
        <ul className="max-w-2xl list-none p-0">
          {interests.map((interest) => (
            <li
              key={interest}
              className="my-3 border-l-2 border-accent pl-4 text-base leading-relaxed md:text-lg"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-16">
        <h2 className="mb-6 text-3xl leading-none text-accent md:text-5xl">
          Reading &amp; watching
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="border-b-2 border-accent">
                <th className="py-3 pr-4 font-bold"></th>
                <th className="py-3 pr-4 font-bold">Favourite</th>
                <th className="py-3 pr-4 font-bold">Last</th>
                <th className="py-3 font-bold">Current / next</th>
              </tr>
            </thead>
            <tbody>
              {media.map(({ category, favourite, last, next }) => (
                <tr
                  key={category}
                  className="border-b border-neutral-200 dark:border-neutral-700"
                >
                  <td className="py-3 pr-4 font-bold text-accent">{category}</td>
                  <td className="py-3 pr-4">{favourite || "—"}</td>
                  <td className="py-3 pr-4">{last || "—"}</td>
                  <td className="py-3">{next || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="my-16 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
        This is a{" "}
        <a
          href="https://nownownow.com/about"
          className="underline hover:text-accent"
        >
          now page
        </a>
        . If you have one too, I&apos;d like to read it.
      </p>
    </div>
  );
};

export default NowPage;
