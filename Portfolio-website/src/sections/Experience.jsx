
const education = [
  {
    period: "2025 — Present",
    degree: "Master of Computer Applications",
    institution: "G.L. Bajaj Institute of Technology and Management",
    status: "Currently pursuing",
    number: "01",
  },
  {
    period: "2021 — 2024",
    degree: "Bachelor of Computer Applications",
    institution: "Sunder Deep College of Management and Technology",
    status: "Graduated",
    number: "02",
  },
];

const journey = [
  {
    number: "01",
    title: "Frontend foundations",
    description:
      "Built a foundation in HTML, CSS, and JavaScript through responsive layouts and interactive web projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Building with React",
    description:
      "Practised reusable components and interactive interfaces through projects like CineScope and NotesWebApp.",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Growing towards full stack",
    description:
      "Continuing to improve frontend skills while developing knowledge of Java, DSA, and backend technologies.",
    technologies: ["Java", "DSA", "Node.js"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 bg-(--color-deep-forest) px-5 py-16 text-(--color-warm-ivory) sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Keep the section introduction consistent with the rest of the portfolio. */}
        <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-silver-sage) sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
          <span className="h-px w-7 shrink-0 bg-(--color-moss-grey)" />
          Education & development
        </p>

        <h2
          id="experience-heading"
          className="max-w-4xl text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.055em]"
        >
          My Academic
          <br />
          <span className="text-(--color-silver-sage)">Journey.</span>
        </h2>

        {/* Stack the timelines on mobile and align them in columns on desktop. */}
        <div className="mt-9 grid gap-10 border-t border-(--color-silver-sage)/20 pt-7 sm:mt-12 sm:gap-12 sm:pt-9 lg:mt-14 lg:grid-cols-2 lg:gap-14 lg:pt-10">
          {/* Academic qualifications */}
          <div className="min-w-0">
            <h3 className="mb-5 text-lg font-semibold tracking-tight sm:mb-7 sm:text-xl">
              Education
              <span className="text-(--color-moss-grey)">.</span>
            </h3>

            <div className="border-t border-(--color-silver-sage)/20">
              {education.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-(--color-silver-sage)/20 py-5 sm:py-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-[10px] font-medium tracking-[0.15em] text-(--color-silver-sage) sm:text-xs sm:tracking-widest">
                      {item.period}
                    </span>

                    <span className="rounded-full border border-(--color-silver-sage)/25 px-2.5 py-1 text-[10px] text-(--color-warm-ivory)/70 sm:px-3 sm:py-1.5 sm:text-xs">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:mt-4 sm:text-xl lg:text-2xl">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-(--color-warm-ivory)/60 sm:mt-3 sm:leading-7">
                    {item.institution}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Practical learning journey, not employment history. */}
          <div className="min-w-0">
            <h3 className="mb-5 text-lg font-semibold tracking-tight sm:mb-7 sm:text-xl">
              Development Journey
              <span className="text-(--color-moss-grey)">.</span>
            </h3>

            <div className="border-t border-(--color-silver-sage)/20">
              {journey.map((item) => (
                <article
                  key={item.number}
                  className="group grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-(--color-silver-sage)/20 py-5 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-4 sm:py-6"
                >
                  <span className="pt-1 text-xs tracking-widest text-(--color-silver-sage)">
                    {item.number}
                  </span>

                  <div className="min-w-0">
                    <h4 className="text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-(--color-silver-sage) sm:text-lg lg:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-2.5 text-sm leading-6 text-(--color-warm-ivory)/60 sm:mt-3 sm:leading-7">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-(--color-silver-sage)/20 px-2.5 py-1.5 text-[10px] text-(--color-warm-ivory)/75 sm:px-3 sm:text-xs"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* A compact closing line avoids adding unnecessary visual weight. */}
        <div className="mt-9 flex flex-col gap-3 border-t border-(--color-silver-sage)/20 pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="text-xs leading-6 text-(--color-warm-ivory)/55 sm:text-sm">
            Every project is another opportunity to improve.
          </p>

          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 text-xs font-medium text-(--color-warm-ivory)/80 transition-colors hover:text-(--color-silver-sage) sm:text-sm"
          >
            Explore my projects
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
