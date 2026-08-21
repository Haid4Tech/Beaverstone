"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, isNavGroup } from "@/data/navigation";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 top-20 z-40 overflow-y-auto bg-ink lg:hidden"
        >
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
            {navigation.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/10"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 py-4 text-lg font-display text-white"
                  >
                    {item.label}
                  </Link>
                  {isNavGroup(item) && (
                    <button
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded((v) => (v === item.label ? null : item.label))
                      }
                      className="flex h-10 w-10 items-center justify-center text-white/70"
                    >
                      <motion.span
                        animate={{ rotate: expanded === item.label ? 45 : 0 }}
                        className="text-2xl leading-none"
                      >
                        +
                      </motion.span>
                    </button>
                  )}
                </div>
                {isNavGroup(item) && (
                  <AnimatePresence initial={false}>
                    {expanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-4 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="py-2 text-sm text-white/60 transition-colors hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
