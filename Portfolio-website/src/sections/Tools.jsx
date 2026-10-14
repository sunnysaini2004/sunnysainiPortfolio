
import { skillCategories } from "../data/skills";

function Tools() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="scroll-mt-20 bg-(--color-obsidian) px-6 py-24 text-(--color-warm-ivory) sm:px-10 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduce the section using our shared editorial style. */}
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-(--color-silver-sage)">
          <span className="h-px w-8 bg-(--color-moss-grey)" />
          My developer toolkit
        </p>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2
            id="tools-heading"
            className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-7xl"
          >
            My Skill Set
            <span className="text-(--color-moss-grey)">.</span>
          </h2>

          <p className="max-w-md text-base leading-7 text-(--color-warm-ivory)/65">
            The technologies I use to build projects, solve problems, and keep
            growing as a developer.
          </p>
        </div>

        {/* A responsive grid keeps each technology category easy to scan. */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <article
              key={category.number}
              className="group flex flex-col rounded-2xl border border-(--color-silver-sage)/15 bg-(--color-deep-forest)/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-moss-grey) hover:bg-(--color-deep-forest) sm:p-7"
            >
              {/* Category numbers add a subtle editorial detail. */}
              <span className="text-xs font-semibold tracking-[0.2em] text-(--color-silver-sage)">
                {category.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold tracking-tight transition-colors group-hover:text-(--color-silver-sage)">
                {category.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-(--color-warm-ivory)/65">
                {category.description}
              </p>

              {/* Skill pills make the technologies easy to scan. */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-(--color-silver-sage)/20 bg-(--color-obsidian)/70 px-3 py-2 text-xs font-medium text-(--color-warm-ivory)/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* A restrained divider responds to the card's hover state. */}
              <div className="mt-auto pt-8">
                <div className="h-px w-full bg-(--color-silver-sage)/15 transition-colors group-hover:bg-(--color-moss-grey)" />
              </div>
            </article>
          ))}
        </div>

        {/* Close with a reminder that the toolkit keeps evolving. */}
        <div className="mt-12 flex flex-col gap-3 border-t border-(--color-silver-sage)/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-(--color-warm-ivory)/60">
            Always exploring new tools and improving the fundamentals.
          </p>

          <span className="text-xs font-medium tracking-[0.2em] text-(--color-silver-sage)">
            LEARN · BUILD · REPEAT
          </span>
        </div>
      </div>
    </section>
  );
}

export default Tools;
