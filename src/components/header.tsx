import React from 'react';
import { User, ScrollText, TentTree, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/site.config";

const Header = () => {
  const navItems = [
    { href: "/blog", title: "Blog", Icon: ScrollText },
    { href: "/hobbies", title: "Hobbies", Icon: TentTree },
    { href: "/now", title: "Now", Icon: Sparkles },
    { href: "/about", title: "About", Icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-5 py-5 transition-all dark:bg-neutral-900 md:mt-5 xl:px-0">
      <a
        className="flex items-center gap-1 text-xl font-bold uppercase text-accent transition-all md:hover:scale-125"
        href="/"
      >
        {siteConfig.header.logoName}
      </a>
      <nav className="ml-auto flex gap-2 md:gap-4">
        {navItems.map(({ href, title, Icon }) => (
          <a
            key={href}
            href={href}
            className="flex items-center justify-end gap-2 rounded-lg p-2 transition-colors hover:bg-accent hover:text-white"
          >
            <span className="hidden md:inline">
              <Icon size={20} />
            </span>
            <span className="text-sm">{title}</span>
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export { Header };