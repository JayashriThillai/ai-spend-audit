export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-2xl">

        <h1 className="text-6xl font-bold mb-6">
          AI Spend Audit
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          Find where your startup is overspending on AI tools.
        </p>

        <a
          href="/audit"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition inline-block"
        >
          Start Audit
        </a>

      </div>
    </main>
  );
}