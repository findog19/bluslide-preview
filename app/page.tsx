export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">BluSlide</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#framework" className="text-gray-600 hover:text-black">Framework</a>
          <a href="#usecases" className="text-gray-600 hover:text-black">Use Cases</a>
          <a href="#protocol" className="text-gray-600 hover:text-black">Protocol</a>
          <a href="#docs" className="text-gray-600 hover:text-black">Docs</a>
        </nav>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">Try BluSlide</a>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          The Cognitive Framework for Scoped Creation
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600 mb-8">
          BluSlide helps AI stay on task — producing focused output across creative and professional domains, using scoped cognition and modular kernel agents.
        </p>
        <a href="#" className="inline-block bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-gray-800">
          Explore the Protocol
        </a>
      </section>

      {/* Framework pillars */}
      <section id="framework" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">Scoped Cognition</h3>
            <p className="text-gray-600">Every session runs with surgical clarity — one task, one role, one scope at a time. Hallucinations drop. Token use shrinks.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">🧰</div>
            <h3 className="text-xl font-semibold mb-2">Modular Kernel Agents</h3>
            <p className="text-gray-600">BluSlide loads the right kernel for the job: publishing agent, startup advisor, legal thinker — all scoped, swappable, and fast.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">♻️</div>
            <h3 className="text-xl font-semibold mb-2">Teardown & Rebuild</h3>
            <p className="text-gray-600">No context bloat. Old tasks get wiped. New scopes spin up with clean cognitive space, daisy-chained by continuity logic.</p>
          </div>
        </div>
      </section>

      {/* Protocol teaser */}
      <section id="protocol" className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">How BluSlide Works</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          At the heart is the DKMS Protocol — a dynamic system for kernel selection, scoped task routing, and teardown-driven memory control. It's how AI stops drifting and starts producing.
        </p>
        <div className="w-full max-w-xl mx-auto h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          DKMS Visual Coming Soon
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What You Can Build with BluSlide</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h4 className="font-semibold text-lg mb-2">📰 Ghostwriter Kernel</h4>
            <p className="text-gray-600">Scoped agent for publishing newsletters, blogs, and thought pieces without voice drift or style bleed.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">💼 Startup Builder</h4>
            <p className="text-gray-600">Spin up a new business idea, pitch deck, or MVP plan using a startup founder kernel with scoped advisory tools.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🎨 Creative Director Mode</h4>
            <p className="text-gray-600">Run scoped ideation for visual, audio, or brand projects with teardown-enabled loops and mirror logic resets.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 text-sm text-gray-500 py-6 px-6 flex justify-between items-center">
        <span>© 2025 BluSlide. All rights reserved.</span>
        <div className="space-x-4">
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
