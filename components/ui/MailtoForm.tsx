'use client';

import type { FormEvent, ReactNode } from 'react';
import { contactDetails } from '@/data/contact';

export default function MailtoForm({
  subject,
  subjectField,
  className,
  children,
}: {
  subject: string;
  subjectField?: string;
  className?: string;
  children: ReactNode;
}) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const lines: string[] = [];
    let fullSubject = subject;

    for (const el of Array.from(form.elements)) {
      if (
        !(el instanceof HTMLInputElement) &&
        !(el instanceof HTMLSelectElement) &&
        !(el instanceof HTMLTextAreaElement)
      )
        continue;
      if (!el.name || !el.value.trim()) continue;
      if (el.name === subjectField) fullSubject += ` – ${el.value}`;
      const label = el.labels?.[0]?.textContent?.trim() || el.name;
      lines.push(`${label}: ${el.value.trim()}`);
    }

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      fullSubject
    )}&body=${encodeURIComponent(lines.join('\n\n'))}`;
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
