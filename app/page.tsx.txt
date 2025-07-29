export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">
        BluSlide
      </h1>
      <p className="text-xl text-center max-w-xl mb-10">
        Decision-grade AI powered by scoped cognition. Welcome to the future of executive reasoning.
      </p>
      <a
        href="https://bluslide.ai"
        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
      >
        Visit Main Site
      </a>
    </main>
  );
}
