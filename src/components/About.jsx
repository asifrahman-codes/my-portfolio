import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* Section Heading */}
        <Reveal direction="up">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building software with purpose.
          </h2>

          <p className="mt-4 text-base leading-8 text-zinc-400">
            I'm a Software Engineering student and Full-Stack Developer
            focused on building modern web applications and solving
            real-world problems through software.
          </p>
        </div>
        </Reveal>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* About Card */}
          <Reveal direction="up">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              Who I Am
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              I work mainly with React, Node.js, Express.js, MySQL,
              and MongoDB. I enjoy building complete applications,
              from responsive user interfaces to backend APIs,
              authentication, database design, and business logic.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              My goal is to grow as a Full-Stack Developer and
              continue improving my software architecture,
              problem-solving, and development skills by working
              on real-world projects.
            </p>
          </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="mt-2 text-sm text-zinc-500">
                Full-Stack Projects
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-3xl font-bold text-white">2+</p>
              <p className="mt-2 text-sm text-zinc-500">
                Internship Experiences
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;