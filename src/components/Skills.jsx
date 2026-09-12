import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "MVC",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB",
      "Database Design",
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            A collection of technologies and tools I use to design,
            develop, and maintain web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
              >

                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Skills;