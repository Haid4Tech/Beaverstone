"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/animation/Reveal";

const testimonials = [
  {
    quote:
      "From reservation to handover, the process was transparent and well communicated. Our home was delivered exactly as shown.",
    name: "A. Bello",
    role: "Homeowner, Kadars Gate",
  },
  {
    quote:
      "The build quality and attention to finishing detail stood out immediately compared to other developments we viewed.",
    name: "C. Okafor",
    role: "Homeowner, The Meadows",
  },
  {
    quote:
      "As an investor, the documentation and title process gave us confidence to commit early in construction.",
    name: "T. Adeyemi",
    role: "Investor, Paramount Twin Towers",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-12">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-12 bg-gold" />
            Testimonials
            <span className="h-px w-12 bg-gold" />
          </p>
        </Reveal>

        <div className="relative mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl font-light leading-relaxed text-ink-warm lg:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium text-ink-warm">
                {active.name}
              </p>
              <p className="text-xs tracking-widest text-gold uppercase">
                {active.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
