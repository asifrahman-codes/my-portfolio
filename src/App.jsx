function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="container section">

        <p className="mb-3 text-sm font-medium text-indigo-400">
          FULL-STACK DEVELOPER
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Building modern web applications with clean code.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I build practical web applications using React, Node.js,
          Express.js, and modern databases.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-indigo-500 px-5 py-3 font-medium transition hover:bg-indigo-400">
            View Projects
          </button>

          <button className="rounded-lg border border-zinc-700 px-5 py-3 font-medium transition hover:bg-zinc-900">
            Download Resume
          </button>
        </div>

      </div>
    </main>
  )
}

export default App