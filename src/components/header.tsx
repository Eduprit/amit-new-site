import { User, ScrollText, TentTree,Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/site.config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white  px-5 py-5 transition-all dark:bg-neutral-900 md:mt-5 xl:px-0">
      <a
        className="flex items-center gap-1 text-xl font-bold uppercase text-accent transition-all md:hover:scale-125"
        href="/"
      >
        {siteConfig.header.logoName}{" "}
        {/* <BadgeCheckIcon
          size={18}
          className="fill-green-600 stroke-white dark:stroke-slate-800"
        /> */}
      </a>
      <div className="ml-auto flex gap-2 md:gap-4">
        <a
          href="/blog"
          className="flex items-end justify-end gap-2 rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
          <ScrollText size={20} />
          {/* <span className="text-sm">Blog</span> */}
        </a>
        <a
          href="/hobbies"
          className="flex items-end justify-end gap-2 rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
         <TentTree size={20} />
          {/* <span className="text-sm">Hobbies</span> */}
        </a>
        <a
          href="/now"
          className="flex items-end justify-end gap-2 rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
         <Sparkles size={20} />
          {/* <span className="text-sm">Now</span>  */}
        </a>
        <a
          href="/about"
          className="flex items-end justify-end gap-2 rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
          <User size={20} />
          <span className="text-sm">About</span>
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
