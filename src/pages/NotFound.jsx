import React from "react";

export default function NotFound() {
     const newLocal = "relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-slate-100";
  return (
    <main className={newLocal}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
      />

      <section className="relative z-10 mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Error 404
        </p>

        <h1 className="mt-4 bg-gradient-to-br from-white via-indigo-200 to-fuchsia-300 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
          Page not found
        </h2>

        <p className="mt-3 text-base text-slate-400 sm:text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, deleted, or never existed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
          >
            Back to home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
          >
            Go back
          </button>
        </div>
      </section>
    </main>
  );
}

/*
  Usage with React Router (v6):

    import NotFound from "./NotFound";

    <Routes>
      <Route path="/" element={<Home />} />
      {/* ...other routes... *\/}
      <Route path="*" element={<NotFound />} />
    </Routes>

  Tip: swap the <a href="/"> for <Link to="/"> from react-router-dom
  to avoid a full page reload.
*/