
import heroImage from "../assets/IMG_0274~3.jpg";

const technologies = ["React.js", "Tailwind CSS", "JavaScript"];

// Replace the placeholder social URLs with your actual profiles.
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sunnysaini2004",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    label: "Email",
    href: "mailto:sainisunny2004a@gmail.com",
    icon: "email",
  },
];

function SocialIcon({ name }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.7 10.7 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.59 5.21-5.07 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.25 2.37 4.25 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" {...commonProps} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" {...commonProps} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ProfileCard() {
  return (
    <article className="w-full rounded-2xl border border-(--color-silver-sage)/15 bg-(--color-deep-forest) p-2.5 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-3.5">
      {/* Keep the portrait prominent without making the card too tall on mobile. */}
      <div className="overflow-hidden rounded-xl bg-(--color-obsidian) sm:rounded-2xl">
        <img
          src={heroImage}
          alt="Sunny Saini"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="aspect-[5/4] w-full object-cover object-center"
        />
      </div>

      <div className="px-2 pb-2 pt-4 text-center sm:px-3 sm:pt-5">
        <h2 className="text-2xl font-semibold tracking-tight text-(--color-warm-ivory) sm:text-3xl">
          Sunny Saini
        </h2>

        <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-(--color-silver-sage) sm:mt-2.5 sm:text-sm sm:leading-6">
          MCA student and aspiring full-stack developer building thoughtful
          web experiences.
        </p>

        {/* Compact, touch-friendly social links. */}
        <div className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5 sm:gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              aria-label={social.label}
              title={social.label}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noopener noreferrer"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-silver-sage)/20 text-(--color-silver-sage) transition-colors hover:border-(--color-moss-grey) hover:bg-(--color-forest-green) hover:text-(--color-warm-ivory) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-silver-sage)"
            >
              <SocialIcon name={social.icon} />
            </a>
          ))}
        </div>

        <div className="mt-4 border-t border-(--color-silver-sage)/15 pt-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-(--color-moss-grey) sm:text-[10px]">
            Learn · Build · Improve
          </p>
        </div>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-(--color-obsidian) px-5 pb-12 pt-28 text-(--color-warm-ivory) sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20"
    >
      {/* A restrained green glow adds depth without overpowering the content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-(--color-forest-green) opacity-25 blur-[110px]"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:gap-14">
        {/* The profile appears first on mobile and on the right on desktop. */}
        <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:max-w-none">
          <ProfileCard />
        </div>

        {/* The introduction follows the profile on mobile. */}
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-(--color-silver-sage) sm:mb-6 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-px w-6 shrink-0 bg-(--color-moss-grey)" />
            MCA Student · Aspiring Full-Stack Developer
          </p>

          <h1 className="text-[clamp(2.4rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
            I turn ideas into{" "}
            <span className="text-(--color-silver-sage)">
              digital experiences.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-(--color-warm-ivory)/70 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            Hey, I'm Sunny Saini. I enjoy building clean, responsive web
            experiences and turning what I learn into projects people can use.
            Currently focused on React.js and modern frontend development.
          </p>

          {/* Keep the primary actions easy to use on touch screens. */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-(--color-warm-ivory) px-4.5 py-3 text-xs font-semibold text-(--color-obsidian) transition-colors hover:bg-(--color-silver-sage) sm:px-5 sm:py-3.5 sm:text-sm"
            >
              Explore my work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-(--color-silver-sage)/35 px-4.5 py-3 text-xs font-medium text-(--color-warm-ivory) transition-colors hover:border-(--color-silver-sage) hover:bg-(--color-deep-forest) sm:px-5 sm:py-3.5 sm:text-sm"
            >
              Let's connect <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Technology tags wrap naturally on narrow screens. */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 text-xs text-(--color-silver-sage) sm:mt-9 sm:gap-3">
            <span className="mr-1 uppercase tracking-widest">Building with</span>

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-(--color-silver-sage)/20 px-3 py-1.5 text-[11px] text-(--color-warm-ivory)/90 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
