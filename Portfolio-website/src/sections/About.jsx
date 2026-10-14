
const principles = [
  {
    number: "01",
    title: "Understand the why",
    description:
      "Ask the right questions before reaching for a solution.",
  },
  {
    number: "02",
    title: "Keep it considered",
    description:
      "Thoughtful details, accessible interfaces, and clear code all matter.",
  },
  {
    number: "03",
    title: "Improve through iteration",
    description:
      "Build, review, refine, and make the next version better.",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-(--color-deep-forest) px-5 py-16 text-(--color-warm-ivory) sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Small section label establishes the visual hierarchy. */}
        <p className="mb-5 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--color-silver-sage) sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
          <span className="h-px w-7 shrink-0 bg-(--color-moss-grey)" />
          What guides my work
        </p>

        <h2
          id="about-heading"
          className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.055em]"
        >
          Good work starts
          <br />
          <span className="text-(--color-silver-sage)">
            with good questions.
          </span>
        </h2>

        {/* Stack the content on mobile and use balanced columns on desktop. */}
        <div className="mt-8 grid gap-9 border-t border-(--color-silver-sage)/20 pt-6 sm:mt-10 sm:gap-11 sm:pt-8 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-9">
          <div className="min-w-0">
            <p className="max-w-2xl text-lg leading-7 text-(--color-warm-ivory)/90 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9">
              I believe the best solutions start with curiosity and grow
              through thoughtful execution.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-warm-ivory)/65 sm:mt-5 sm:text-base sm:leading-8">
              I enjoy breaking problems down, exploring different approaches,
              and turning ideas into experiences that feel simple and natural
              to use.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-warm-ivory)/65 sm:text-base sm:leading-8">
              For me, progress isn't about getting everything right the first
              time. It's about paying attention, learning from each iteration,
              and making the next version better.
            </p>

            {/* Both links remain easy to tap without making the section bulky. */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-(--color-warm-ivory) px-4.5 py-3 text-xs font-semibold text-(--color-obsidian) transition-colors hover:bg-(--color-silver-sage) sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-(--color-silver-sage)/35 px-4.5 py-3 text-xs font-medium text-(--color-warm-ivory) transition-colors hover:border-(--color-silver-sage) hover:bg-(--color-forest-green) sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Let's connect
              </a>
            </div>
          </div>

          {/* The principles remain compact but have enough room to breathe. */}
          <div className="min-w-0 divide-y divide-(--color-silver-sage)/20 border-y border-(--color-silver-sage)/20">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group grid grid-cols-[28px_minmax(0,1fr)] gap-3 py-5 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-4 sm:py-6"
              >
                <span className="pt-1 text-xs tracking-widest text-(--color-silver-sage)">
                  {principle.number}
                </span>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-(--color-silver-sage) sm:text-lg lg:text-xl">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-warm-ivory)/60 sm:mt-2.5 sm:leading-7">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Finish with a restrained line rather than another oversized block. */}
        <div className="mt-9 flex flex-col gap-2.5 border-t border-(--color-silver-sage)/20 pt-5 sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="text-xs leading-6 text-(--color-warm-ivory)/55 sm:text-sm">
            Thoughtful work. Small details. Constant improvement.
          </p>

          <span className="text-[10px] tracking-[0.18em] text-(--color-silver-sage) sm:text-xs sm:tracking-[0.2em]">
            ALWAYS ITERATING →
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
