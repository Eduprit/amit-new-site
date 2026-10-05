import Image from "next/image";
import { ArrowUpRight, LinkedinIcon, MailboxIcon } from "lucide-react";
import { lsUrl, siteConfig } from "@/site.config";

const Intro = () => {
  const desc = siteConfig.description.split("/n");
  return (
    <section className="mb-24 flex flex-col-reverse items-end justify-between px-5 md:flex-row xl:px-0">
      <div>
        <h1 className="relative z-10 -mt-16  max-w-lg text-right text-7xl leading-none text-accent [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:py-5   md:pt-[50px] md:text-left md:text-[150px]">
          <span className="block before:absolute before:right-0 before:-z-10 before:h-1/2 before:w-[10rem]  before:bg-white dark:before:bg-neutral-900">
            {siteConfig.firstName}
          </span>
          <span className="block">{siteConfig.lastName}</span>
        </h1>
        <div className="mt-10 max-w-lg px-5 xl:px-0 xl:pe-10">
          {desc.map((d, idx) => (
            <p
              className="mb-5  text-lg md:text-xl"
              key={idx}
              dangerouslySetInnerHTML={{ __html: d }}
            />
          ))}

          <a
            href={lsUrl("/", "home")}
            className="mt-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-6 py-3 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-neutral-800 dark:bg-neutral-800 dark:hover:text-neutral-200"
          >
            Try Luminary Steps <ArrowUpRight />
          </a>

          <ul className="mt-10 grid list-none  grid-cols-2 gap-4 p-0">
            <li>
              <a
                className="text-md flex items-center gap-2 leading-none"
                href={siteConfig.socialLinks.linkedIn}
              >
                <span>
                  <LinkedinIcon />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="text-md flex items-center gap-2 leading-none"
                href={siteConfig.socialLinks.email}
              >
                <span>
                  <MailboxIcon />
                </span>
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <figure className="relative m-0 h-[400px] w-full lg:h-[800px]">
        <Image
          src="/assets/profile.jpg"
          alt={`${siteConfig.firstName} Profile picture`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 100vw"
        />
      </figure>
    </section>
  );
};

export { Intro };
