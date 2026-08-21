"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/animation/Reveal";
import { Stagger, StaggerItem } from "@/components/animation/Stagger";

const stats = [
  { value: "7,000+", label: "Lands & Houses Sold" },
  { value: "20+", label: "Completed Projects" },
  { value: "500+", label: "Staff Members" },
  { value: "6", label: "Member Companies" },
];

const socials = ["Instagram", "LinkedIn", "X"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] w-full flex-col justify-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
          alt="Contemporary luxury residence at dusk, placeholder image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="absolute right-6 top-24 z-10 hidden items-center gap-3 text-white/60 lg:right-12 lg:flex">
        <span className="text-[11px] tracking-[0.25em] uppercase">Follow Us</span>
        <span className="h-px w-8 bg-white/30" />
        {socials.map((s) => (
          <a
            key={s}
            href="#"
            aria-label={s}
            className="text-[11px] tracking-wide transition-colors hover:text-gold"
          >
            {s}
          </a>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40 lg:px-12">
        <p className="mb-4 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
          Africa&rsquo;s Premier Luxury Real Estate Brand
        </p>
        <h1 className="font-display max-w-3xl text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Redefining Luxury Real Estate in Africa and Beyond
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Palton Morgan Holdings crafts residences that bring considered
            design and lasting quality to Africa&rsquo;s most desirable
            addresses.
          </p>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="rounded-sm bg-gold px-8 py-3.5 text-[13px] font-medium tracking-wide text-ink transition-colors hover:bg-gold-bright"
          >
            Explore Projects
          </Link>
          <Link
            href="/about-us"
            className="rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
          >
            About Us
          </Link>
        </motion.div>
      </div>

      <Stagger className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-8 border-t border-white/10 px-6 py-10 lg:grid-cols-4 lg:px-12">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <p className="font-display text-3xl font-light text-white lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] tracking-widest text-white/50 uppercase">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
