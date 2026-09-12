import { ArrowDown, Mail } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero Content */}
          <div>
            {/* Availability */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Software Engineering Student
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building modern{" "}
              <span className="block text-zinc-400">
                full-stack applications.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I'm Asif Rahman, a Software Engineering student and Full-Stack
              Developer focused on building modern web applications with React,
              Node.js, Express.js, and databases.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                View Projects
                <ArrowDown size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/asifrahman-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/asifdawar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:asifdawar321@gmail.com"
                className="text-zinc-500 transition hover:text-white"
              >
                <Mail size={21} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative rounded-full border border-zinc-800 bg-zinc-900 p-2">
                <img
                  src="/profile.jpeg"
                  alt="Asif Rahman"
                  className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;