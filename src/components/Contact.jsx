function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12 lg:p-16">

          <div className="relative">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Get In Touch
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's build something meaningful together.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
              I'm open to opportunities, collaborations, and interesting
              projects where I can contribute my skills and continue
              growing as a full-stack developer.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Email Me
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                GitHub
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;