export const siteConfig = {
  siteTitle: "Amit Tirpude",
  firstName: "Amit",
  lastName: "Tirpude",
  metaDescription:
    "Amit Tirpude. Educator, IIT Bombay alumnus, and founder of Luminary Steps, which helps Indian students in grades 9 to 12 work out what to study next.",
  description: `👋 Hi, I'm Amit Tirpude./n
  I'm building <a class="font-bold text-accent underline underline-offset-4" href="/luminary-steps"><strong>Luminary Steps</strong></a>, helping students in grades 9 to 12 in India figure out what they're actually built for, before the system picks for them./n
  Before this I spent my career inside education and academia, scaling academic teams and building learning products. This one started with a simpler question: how does a fifteen-year-old decide?`,
  header: {
    logoName: "A",
  },
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/tirpude",
    email: "mailto:amit@luminarysteps.com",
    luminarySteps: "https://www.luminarysteps.com",
  },
};

/** A luminarysteps.com link tagged so its analytics can tell visits from this site apart. */
export const lsUrl = (path: string, campaign: string) =>
  `${siteConfig.socialLinks.luminarySteps}${path}?utm_source=tirpude.net&utm_medium=referral&utm_campaign=${campaign}`;
