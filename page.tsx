export default function Home() {
  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center">
        Ray’s Pressure Wash 🖤✨💛
      </h1>


      {/* About Us */}
      <section className="max-w-3xl bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">🚀 About Us</h2>
        <p className="text-gray-200 leading-relaxed">
          Ray’s Pressure Wash is a one-man business built with hustle, faith, and dedication.
          I started this business because jobs weren’t calling back. Instead of giving up,
          I trusted God’s plan, prayed, and decided to build something for myself.
        </p>
      </section>

      {/* Why Choose */}
      <section className="max-w-3xl bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">💡 Why Choose Me?</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>One-on-One Service: Work directly with the owner — every job is personal.</li>
          <li>Faith Over Fear: This business was built by trusting in God’s timing.</li>
          <li>Passion Over Payroll: I care about every detail because this isn’t just a job — it’s my calling.</li>
          <li>Local & Reliable: Surprise & Peoria, AZ based — supporting your community.</li>
          <li>Affordable & Honest Pricing: No hidden fees, no gimmicks. Just clean results.</li>
        </ul>
      </section>

      {/* Faith */}
      <section className="max-w-3xl bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">🙏 Faith Statement</h2>
        <p className="text-gray-200 leading-relaxed">
          This company exists because God is good all the time.
          Every opportunity, every client, every blessing comes from Him.
          I couldn’t do this without His guidance — and I pray that everyone I work with stays blessed too.
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">📞 Contact</h2>
        <p className="text-gray-200">📍 Based in Surprise / Peoria, AZ</p>
        <p className="text-gray-200">📧 Email: <a href="mailto:PressurebyRay@gmail.com" className="underline text-yellow-400">PressurebyRay@gmail.com</a></p>
        <p className="text-gray-200">🌐 Website: <a href="https://rayspressurewash.vercel.app" className="underline text-yellow-400">rayspressurewash.vercel.app</a></p>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 text-sm mt-8">
        © 2025 Ray’s Pressure Wash — Stay Blessed 🙌
      </footer>
    </main>
  );
}
