export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tededmunds.com";

// Replace these in one place before publishing if Ted's public profiles change.
export const SITE_LINKS = {
  email: "Edward.Edmunds@gmail.com",
  linkedin: "https://www.linkedin.com/in/tededmunds",
  github: "https://github.com/edwardedmunds-cmd",
  portfolioRepo: "https://github.com/edwardedmunds-cmd/portfolio",
  resume: "/resume/ted-edmunds-resume.pdf"
} as const;
