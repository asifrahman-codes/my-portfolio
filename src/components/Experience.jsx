function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where I've gained practical experience.
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            My experience includes working on web development projects
            and gaining practical exposure through internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-zinc-800 pl-8">

          {/* Experience Item 1 */}
          <div className="relative pb-12">

            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-zinc-950 bg-indigo-500" />

            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-white">
                Full-Stack Development Intern
              </h3>

              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                2026
              </span>
            </div>

            <p className="text-sm font-medium text-indigo-400">
              Adivantech (Pvt) Ltd.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              Worked on web development tasks and gained practical
              experience in frontend and backend development while
              working with modern web technologies.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-zinc-950 bg-zinc-700" />

            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-white">
                Web Development Intern
              </h3>

              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                2026
              </span>
            </div>

            <p className="text-sm font-medium text-indigo-400">
              GAO Tek Inc.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              Gained practical experience in web development through
              an internship environment, working with development
              tasks and collaborating through a remote workflow.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Web Development",
                "JavaScript",
                "React",
                "Git",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;