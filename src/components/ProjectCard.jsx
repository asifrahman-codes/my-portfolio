import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900">

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-zinc-950/0 transition duration-300 group-hover:bg-zinc-950/20" />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
          />
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            <Github size={17} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            Live Demo
            <ArrowUpRight size={17} />
          </a>

        </div>
      </div>
    </article>
  );
}

export default ProjectCard;