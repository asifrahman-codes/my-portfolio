function Education() {
  return (
    <section id="education" className="section">
      <div className="container">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My academic journey.
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            My academic background in computer science and software
            engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Bachelor's */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm font-medium text-indigo-400">
                  2024 — 2028
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  BS Software Engineering
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  COMSATS University Islamabad
                </p>

                <p className="text-sm text-zinc-500">
                  Attock Campus
                </p>
              </div>

              <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-400">
                Bachelor's
              </span>

            </div>
          </div>

          {/* ICS */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm font-medium text-indigo-400">
                  2021 — 2023
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  ICS — Intermediate Computer Science
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  The Crescent School and College
                </p>

                <p className="text-sm text-zinc-500">
                  Mir Ali, North Waziristan
                </p>
              </div>

              <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-400">
                ICS
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;