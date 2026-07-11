export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-[0.3em]">
          EVO CONCEPTS
        </h1>

        <div className="flex gap-8 text-sm uppercase">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 h-[85vh]">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-widest">
          EVO
        </h2>

        <p className="mt-4 text-zinc-400 max-w-xl text-lg">
          Premium Architecture • Interior Design • Visualization
        </p>

        <button className="mt-10 rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
          View Our Work
        </button>
      </section>
    </main>
  );
}