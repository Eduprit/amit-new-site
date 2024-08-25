import { Blog } from "@/icons/blog";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ThoughtsOnProducts = async () => {
  const articles = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 2);

  return (
    <section className="my-24  px-5 xl:px-0">
      <div className="md:flex lg:gap-8">
        <div className="max-w-">
          <h2 className="mb-8 text-5xl leading-tight text-accent md:mb-12 md:text-7xl">
            Blog
          </h2>
          {articles.map((article, idx) => (
            <>
              <article
                className="my-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 md:my-5 md:p-3"
                key={article._id}
              >
                <h3 className="my-2 font-bold">{article.title}</h3>
                <p className="text-base">{article.description}</p>
                <Link
                  href={`/blog/${article.slugAsParams}`}
                  className="my-4 inline-flex text-sm font-bold uppercase text-accent hover:cursor-pointer"
                >
                  Read the article
                  <ArrowUpRight className="text-sm" />
                </Link>
              </article>
              {idx == 0 && (
                <hr className="my-4 dark:border-neutral-500 md:my-8" />
              )}
            </>
          ))}
        </div>

        {/* <figure className="my-10 md:my-0 md:grow">
          <Blog />
        </figure> */}
      </div>

      <a
        href="/blog"
        className="dark:te my-4 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-4 py-2 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-neutral-800 dark:bg-neutral-800 dark:hover:text-neutral-200 md:my-10"
      >
        Read All Articles <ArrowUpRight />
      </a>
    </section>
  );
};
