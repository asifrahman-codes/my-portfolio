import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Featured Projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Things I've built.
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              A selection of applications that demonstrate my
              experience with frontend development, backend
              architecture, databases, authentication, and
              real-world business logic.
            </p>

          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            View GitHub →
          </a>

        </div>

        {/* Project Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;