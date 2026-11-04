import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100 text-gray-900">
      {/* Hero */}
      <header className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
            alt="Forest canopy"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-green-100/70" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
       
          <h1 className="text-4xl sm:text-6xl font-bold text-green-800">
            Powering  Sustainable Future
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-700">
            We build renewable energy and smart efficiency solutions that cut emissions and costs—without compromising performance.
          </p>
          <div className="mt-8 flex gap-4 flex-col sm:flex-row">
            <a
              href="#services"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="border border-green-700 text-green-800 hover:bg-green-50 font-semibold px-6 py-3 rounded-full transition"
            >
            Our  Get in Touch
            </a>
          </div>
        </div>
      </header>


      {/* Services */}
      <main id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
        GreenTech Solution
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {/* Solar */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
                alt="Solar panels in nature"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="https://www.svgrepo.com/show/469693/solar-energy.svg"
                alt="Solar icon"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-semibold">Solar Energy</h3>
            </div>
            <p className="text-gray-600">
              Design, install, and optimize PV systems with real-time monitoring to maximize ROI and uptime.
            </p>
          </div>

          {/* Wind */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop"
                alt="Wind turbines at sunset"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="https://www.svgrepo.com/show/245840/windmill-wind.svg"
                alt="Wind icon"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-semibold">Wind Power</h3>
            </div>
            <p className="text-gray-600">
              Community-scale and industrial wind projects, from feasibility to predictive maintenance.
            </p>
          </div>

          {/* Smart Tech */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1503595851002-60ebf6a8ef3d?q=80&w=1200&auto=format&fit=crop"
                alt="Smart city energy"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="https://www.svgrepo.com/show/392863/iot.svg"
                alt="IoT icon"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-semibold">Smart Efficiency</h3>
            </div>
            <p className="text-gray-600">
              IoT sensors and analytics to reduce waste, balance loads, and slash energy bills.
            </p>
          </div>
        </div>
      </main>

      {/* Impact */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">Measurable Impact</h2>
            <p className="text-gray-700">
              From kWh saved to CO₂ reduced, we track what matters. Our solutions are transparent, auditable, and
              engineered for long-term performance.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">35%</div>
                <div className="text-xs text-gray-600">Avg. energy savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">-120t</div>
                <div className="text-xs text-gray-600">CO₂ per site yearly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">99.9%</div>
                <div className="text-xs text-gray-600">Uptime delivered</div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542601098-8fc114e3fafe?q=80&w=1200&auto=format&fit=crop"
              alt="Solar field and wind turbines"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-green-50 border-t border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Let’s build something clean</h2>
            <p className="mt-2 text-gray-700">
              Tell us about your site, goals, and timeline. We’ll propose a plan with costs, impact, and delivery.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <Image src="https://www.svgrepo.com/show/508457/mail.svg" alt="Mail" width={20} height={20} />
                <span className="text-gray-700">contact@greentech.example</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="https://www.svgrepo.com/show/510251/phone.svg" alt="Phone" width={20} height={20} />
                <span className="text-gray-700">+92 300 0000000</span>
              </li>
            </ul>
          </div>

          <form className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} GreenTech Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
