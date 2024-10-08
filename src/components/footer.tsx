import { StravaIcon } from "@/icons/strava";
import { siteConfig } from "@/site.config";
import { InstagramIcon, LinkedinIcon, MailboxIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <p className="relative text-center text-5xl font-bold text-accent after:absolute after:-bottom-[5px] after:left-0 after:h-4 after:w-full after:bg-white dark:after:bg-neutral-900">
        {siteConfig.firstName} {siteConfig.lastName}
      </p>
      <nav className="my-2">
        <ul className="mx-auto my-2  flex  flex-wrap justify-center gap-4 px-4 text-center md:flex-nowrap md:gap-6">
          <li className="basis-1/3  md:basis-0">
            <a
              href={siteConfig.socialLinks.linkedIn}
              className="flex items-center gap-2 text-center text-base"
            >
              <LinkedinIcon /> <span>LinkedIn</span>
            </a>
          </li>
          <li className="basis-1/3  md:basis-0">
            <a
              className="flex items-center gap-2 text-center text-base "
              href={siteConfig.socialLinks.instagram}
            >
              <InstagramIcon /> <span>Instagram</span>
            </a>
          </li>

          <li className="basis-1/3  md:basis-0">
            <a
              className="flex  items-center gap-2 text-center text-base "
              href={siteConfig.socialLinks.email}
            >
              <MailboxIcon /> <span>Email</span>
            </a>
          </li>
          <li className="basis-1/3  md:basis-0">
            <a
              className="flex items-center gap-2 text-center text-base "
              href={siteConfig.socialLinks.strava}
            >
              <StravaIcon />
              <span>Strava</span>
            </a>
          </li>
        </ul>
      </nav>
      <hr className="mt-10 dark:border-neutral-500" />
      <div className="justify-between p-5 text-center text-sm md:flex md:px-4 lg:px-0">
        <p className="my-2">
          © 2024 {siteConfig.firstName} {siteConfig.lastName}
        </p>
        {/* <p className="my-2 ">
          Designed & built by{" "}
          <a className="hover:underline" href="https://ravigopal.com">
            Ravigopal Kesari
          </a>
        </p> */}
      </div>
    </footer>
  );
};

export { Footer };
