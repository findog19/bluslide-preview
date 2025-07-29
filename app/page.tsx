export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black px-6 py-12">
      <div className="max-w-3xl w-full space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">BluSlide Cognitive Framework</h1>
          <p className="text-lg">
            Scoped cognition. Kernel management. Forget what you don't need. Remember what matters.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="text-center text-gray-500">
          <p>Additional modules coming soon…</p>
          <p className="italic">Under Construction</p>
        </section>
      </div>
    </main>
  );
}
