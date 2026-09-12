import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:bg-zinc-900/70 hover:shadow-2xl hover:shadow-indigo-500/5">

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">

        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-zinc-950/10 transition duration-300 group-hover:bg-zinc-950/30" />

        {/* Project Number */}
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/80 text-xs font-semibold text-zinc-300 backdrop-blur-sm">
          0{index + 1}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute right-4 top-4 rounded-full border border-indigo-400/20 bg-indigo-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Featured
          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-indigo-400">
          {project.category}
        </p>

        {/* Title */}
        <div className="flex items-start justify-between gap-4">

          <h3 className="text-xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
          />

        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-400 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-200"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-zinc-800" />

        {/* Links */}
        <div className="flex items-center gap-5">

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            Live Demo
            <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;