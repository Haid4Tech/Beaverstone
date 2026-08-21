import Reveal from "@/components/animation/Reveal";

export default function RegisterInterest({
  projectName,
  unitTypes,
}: {
  projectName: string;
  unitTypes: string[];
}) {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[760px] px-6 lg:px-12">
        <Reveal className="text-center">
          <p className="mb-4 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            Register Interest
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink-warm lg:text-4xl">
            Enquire About {projectName}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-body">
            Share a few details and an advisor will get back to you with
            availability, pricing and payment plans.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="ri-name" className="mb-2 block text-[13px] text-body">
                Full Name
              </label>
              <input
                id="ri-name"
                name="name"
                required
                autoComplete="name"
                className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="ri-email" className="mb-2 block text-[13px] text-body">
                Email Address
              </label>
              <input
                id="ri-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="ri-phone" className="mb-2 block text-[13px] text-body">
                Phone Number
              </label>
              <input
                id="ri-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="ri-unit" className="mb-2 block text-[13px] text-body">
                Unit of Interest
              </label>
              <select
                id="ri-unit"
                name="unit"
                className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-gold focus:outline-none"
              >
                {unitTypes.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="ri-message" className="mb-2 block text-[13px] text-body">
                Message
              </label>
              <textarea
                id="ri-message"
                name="message"
                rows={4}
                className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="justify-self-start rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-gold hover:text-ink sm:col-span-2"
            >
              Submit Enquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
