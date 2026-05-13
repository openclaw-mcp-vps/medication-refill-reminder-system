export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Never miss prescription refills again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          MedRefill tracks your prescriptions, sends timely email &amp; SMS reminders, and helps you find the cheapest pharmacy prices — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
          {[
            { icon: "💊", title: "Prescription Tracking", desc: "Add all your medications and dosage schedules in seconds." },
            { icon: "🔔", title: "Smart Reminders", desc: "Get email and SMS alerts before you run out of refills." },
            { icon: "💰", title: "Price Comparison", desc: "Find the lowest pharmacy prices near you automatically." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff]">Pro Plan</span>
          <div className="mt-4 mb-1">
            <span className="text-5xl font-extrabold text-white">$8</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay on top of your health.</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited medications",
              "Email & SMS reminders",
              "Pharmacy price comparison",
              "Caregiver sharing",
              "Refill history & reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does MedRefill send reminders?",
              a: "We send automated email and SMS notifications based on your prescription schedule. You choose how many days before a refill is due to be reminded."
            },
            {
              q: "Can I manage medications for a family member?",
              a: "Yes. The caregiver sharing feature lets you manage prescriptions for a loved one from your own account."
            },
            {
              q: "How does pharmacy price comparison work?",
              a: "We integrate with pharmacy pricing APIs to show you real-time prices at pharmacies near you, so you always pay the lowest price."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} MedRefill. All rights reserved.
      </footer>
    </main>
  );
}
