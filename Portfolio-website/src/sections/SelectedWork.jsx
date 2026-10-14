
import { projects } from "../data/projects";


const projectImages = {
  movies: `${import.meta.env.BASE_URL}images/projects/cinescope.png`,
  notes: `${import.meta.env.BASE_URL}images/projects/noteswebapp.png`,
  weather: `${import.meta.env.BASE_URL}images/projects/weather-app.png`,
};

function ProjectPreview({ project }) {
  const imageSrc = projectImages[project.type];
  const isNotesPreview = project.type === "notes";

  return (
    <div className="group/preview relative aspect-video overflow-hidden rounded-xl border border-(--color-silver-sage)/15 bg-(--color-obsidian)">
      <img
        src={imageSrc}
        alt={`${project.title} application preview`}
        loading="lazy"
        decoding="async"
        className={`h-full w-full transition-transform duration-500 ${
          isNotesPreview
            ? "object-contain"
            : "object-cover object-top group-hover/preview:scale-[1.03]"
        }`}
      />

      {/* Keep the category label off the Notes screenshot so its content stays visible. */}
      {!isNotesPreview && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-(--color-obsidian)/80 to-transparent px-3 pb-3 pt-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-(--color-warm-ivory)/90">
            {project.category}
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectLinks({ liveUrl, githubUrl }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-(--color-warm-ivory) px-4 py-2.5 text-xs font-semibold text-(--color-obsidian) transition-colors hover:bg-(--color-silver-sage) sm:text-sm"
      >
        Live website
        <span aria-hidden="true">↗</span>
      </a>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-(--color-silver-sage)/30 px-4 py-2.5 text-xs font-medium text-(--color-warm-ivory) transition-colors hover:border-(--color-silver-sage) hover:bg-(--color-forest-green) sm:text-sm"
      >
        GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function SelectedWork() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 bg-(--color-obsidian) px-5 py-20 text-(--color-warm-ivory) sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Keep the introduction compact but visually distinct. */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-silver-sage) sm:text-xs">
            <span className="h-px w-7 bg-(--color-moss-grey)" />
            A few things I've built
          </p>

          <h2
            id="work-heading"
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl"
          >
            Projects I've built
            <span className="text-(--color-moss-grey)">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-(--color-warm-ivory)/65 sm:text-base sm:leading-7">
            A collection of projects where I've turned ideas into working
            applications while improving my frontend development skills.
          </p>
        </div>

        {/* The featured project stays prominent without excessive padding. */}
        {featuredProject && (
          <article className="mb-5 grid gap-5 rounded-2xl border border-(--color-silver-sage)/15 bg-(--color-deep-forest)/35 p-3.5 sm:p-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8 lg:p-6">
            <div className="px-1 py-3 sm:px-2 sm:py-5">
              <p className="text-[10px] font-medium tracking-[0.16em] text-(--color-silver-sage) sm:text-xs">
                {featuredProject.number} / {featuredProject.category}
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {featuredProject.title}
                <span className="text-(--color-moss-grey)">.</span>
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-(--color-warm-ivory)/65">
                {featuredProject.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--color-silver-sage)/20 px-2.5 py-1.5 text-[11px] text-(--color-warm-ivory)/80 sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <ProjectLinks
                liveUrl={featuredProject.liveUrl}
                githubUrl={featuredProject.githubUrl}
              />
            </div>

            <ProjectPreview project={featuredProject} />
          </article>
        )}

        {/* Keep the remaining project cards consistent and lightweight. */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.number}
              className="rounded-2xl border border-(--color-silver-sage)/15 bg-(--color-deep-forest)/25 p-3.5 transition-colors duration-300 hover:border-(--color-moss-grey)/70 sm:p-5"
            >
              <ProjectPreview project={project} />

              <div className="px-1 pb-1 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--color-silver-sage) sm:text-xs">
                  {project.number} / {project.category}
                </p>

                <h3 className="mt-2.5 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.title}
                  <span className="text-(--color-moss-grey)">.</span>
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-(--color-warm-ivory)/65">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-(--color-silver-sage)/20 px-2.5 py-1.5 text-[11px] text-(--color-warm-ivory)/80 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <ProjectLinks
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
