import { enquiryTypes } from '@/data/contact';

const inputClass =
  'w-full border-b border-line bg-transparent py-2.5 text-sm text-ink-warm placeholder:text-body/50 focus:border-gold focus:outline-none';

export default function ContactForm() {
  return (
    <form className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-first" className="mb-2 block text-[13px] text-body">
          First Name
        </label>
        <input
          id="cf-first"
          name="firstName"
          required
          autoComplete="given-name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-last" className="mb-2 block text-[13px] text-body">
          Last Name
        </label>
        <input
          id="cf-last"
          name="lastName"
          required
          autoComplete="family-name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-2 block text-[13px] text-body">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-2 block text-[13px] text-body">
          Phone Number
        </label>
        <input
          id="cf-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="cf-subject"
          className="mb-2 block text-[13px] text-body"
        >
          Enquiry Type
        </label>
        <select id="cf-subject" name="subject" className={inputClass}>
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="cf-message"
          className="mb-2 block text-[13px] text-body"
        >
          Your Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="justify-self-start rounded-sm bg-ink px-10 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-gold hover:text-ink sm:col-span-2"
      >
        Submit
      </button>
    </form>
  );
}
