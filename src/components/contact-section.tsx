import { StravaIcon } from "@/icons/strava";
import { siteConfig } from "@/site.config";
import {
  ArrowUpRightIcon,
  LinkedinIcon,
  MailIcon,
  MailboxIcon,
  TwitterIcon,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="my-32 px-5  md:my-44 md:flex md:justify-between  xl:px-0">
      <div className="">
        <h2 className="mb-8 max-w-lg  text-5xl leading-tight text-accent md:mb-8 md:text-8xl">
          Let&apos;s talk!
        </h2>
        <div className="max-w-lg">
          <h3 className="mb-8 text-lg">
          Always eager to connect with fellow EdTech enthusiasts, product innovators, and lifelong learners. Whether you want to discuss the future of digital education, share marathon training tips, or explore the fascinating world where math meets AI, I'm all ears. Let's exchange ideas on how we can make learning more accessible and enjoyable for everyone!
          </h3>
          <p className="mb-4 text-base">
            Drop in a mail or reach out on LinkedIn
          </p>
          <ul className="items-center gap-4 md:flex md:gap-8">
            <li className="my-6 md:my-0">
              <p className="text-sm font-bold uppercase text-accent">Email</p>
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                className="transition-all hover:text-accent hover:underline"
              >
                {siteConfig.socialLinks.email.replace(/^(mailto?:|)/, "")}
              </a>
            </li>
            <li className="my-6 md:my-0">
              <p className="text-sm font-bold uppercase text-accent">
                LinkedIn
              </p>
              <a
                href={siteConfig.socialLinks.linkedIn}
                className="transition-all hover:text-accent hover:underline"
              >
                {siteConfig.socialLinks.linkedIn.replace(/^(https?:|)\/\//, "")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-4 grid max-w-sm grid-cols-[80px_1fr] place-content-start gap-x-5 p-4 lg:gap-x-10">
        <a
          href={siteConfig.socialLinks.strava}
          className="flex h-16 w-16 items-center justify-center place-self-center rounded-full border-2 text-neutral-300 transition-all hover:scale-110 hover:text-neutral-600 dark:border-neutral-400  dark:hover:border-neutral-200 dark:hover:text-neutral-100 lg:h-24 lg:w-24"
        >
          <StravaIcon className="text-current" />
        </a>
        <a
          href={siteConfig.socialLinks.email}
          className="flex h-48 w-48 flex-col items-center justify-center rounded-full  border-2 border-accent bg-accent text-xl font-bold text-white  transition-all hover:scale-110 hover:bg-transparent hover:text-accent dark:bg-neutral-900 lg:h-64 lg:w-64"
        >
          <span className="flex items-end gap-1">
            Let&apos;s <ArrowUpRightIcon />
          </span>
          <span>collaborate</span>
        </a>
        <a
          href={siteConfig.socialLinks.linkedIn}
          className="  flex h-32 w-32 items-center  justify-center place-self-start rounded-full border-2 text-neutral-300 transition-all hover:scale-110 hover:border-neutral-600  dark:border-neutral-400 dark:hover:border-neutral-200 dark:hover:text-neutral-100"
        >
          <LinkedinIcon className="text-current" size={"40%"} strokeWidth={1} />
        </a>

        <a
          href={siteConfig.socialLinks.email}
          className="flex h-20 w-20 items-center justify-center place-self-center rounded-full border-2 text-neutral-300  transition-all hover:scale-110 hover:border-neutral-600   dark:border-neutral-400 dark:hover:border-neutral-200 dark:hover:text-neutral-100"
        >
          <MailIcon className="text-current" />
        </a>
      </div>
    </section>
  );
};
