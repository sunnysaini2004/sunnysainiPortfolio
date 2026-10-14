import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactDetails = [
  {
    label: "Address",
    value: "Hapur, Uttar Pradesh, India",
    href: "https://www.google.com/maps/search/?api=1&query=Hapur%2C%20Uttar%20Pradesh%2C%20India",
    type: "location",
  },
  {
    label: "Phone",
    value: "+91-9520003363",
    href: "tel:+919520003363",
    type: "phone",
  },
  {
    label: "Email",
    value: "sainisunny2004a@gmail.com",
    href: "mailto:sainisunny2004a@gmail.com",
    type: "email",
  },
];

function ContactIcon({ type }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "location") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
        {...commonProps}
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
        {...commonProps}
      >
        <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-5-3 14 14 0 0 1-3-5l3-2-2-5Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
      {...commonProps}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Automatically hide success and error messages after one minute.
  useEffect(() => {
    if (!status.message) return undefined;

    const timeoutId = window.setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 60_000);

    // Clear the timer if the status changes or the component unmounts.
    return () => window.clearTimeout(timeoutId);
  }, [status.message]);

  async function handleSubmit(event) {
    event.preventDefault();

    // Keep a reference to the form while the email request is running.
    const form = event.currentTarget;

    // Check that the EmailJS environment variables are configured first.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "The contact form is not configured yet. Please try emailing me directly.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Send the submitted details through EmailJS.
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });

      // Clear the fields only after EmailJS confirms successful submission.
      form.reset();

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. Thank you!",
      });
    } catch (error) {
      // Keep the entered details so the visitor can retry if sending fails.
      console.error("EmailJS contact form submission failed:", error);

      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-(--color-obsidian) px-5 py-16 text-(--color-warm-ivory) sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Keep the introduction short and consistent with the portfolio style. */}
        <p className="mb-5 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-silver-sage) sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
          <span className="h-px w-7 bg-(--color-moss-grey)" />
          Get in touch
        </p>

        <h2
          id="contact-heading"
          className="text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.055em]"
        >
          Let's talk<span className="text-(--color-moss-grey)">.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-(--color-warm-ivory)/65 sm:mt-5 sm:text-base">
          Have a question, an idea, or an opportunity? I'd love to hear from you.
        </p>

        {/* Stack contact information and the form on mobile; use columns on desktop. */}
        <div className="mt-8 grid min-w-0 overflow-hidden rounded-2xl border border-(--color-silver-sage)/15 bg-(--color-deep-forest)/30 md:mt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0 border-b border-(--color-silver-sage)/15 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
            <h3 className="text-lg font-semibold sm:text-xl">
              Contact information
              <span className="text-(--color-moss-grey)">.</span>
            </h3>

            <p className="mt-2 text-sm leading-6 text-(--color-warm-ivory)/55">
              Choose whichever way works best for you.
            </p>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              {contactDetails.map((detail) => (
                <a
                  key={detail.type}
                  href={detail.href}
                  target={detail.type === "location" ? "_blank" : undefined}
                  rel={detail.type === "location" ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--color-silver-sage)/20 bg-(--color-obsidian)/60 text-(--color-silver-sage) transition-colors group-hover:border-(--color-moss-grey) group-hover:text-(--color-warm-ivory)">
                    <ContactIcon type={detail.type} />
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span className="block text-sm font-semibold">
                      {detail.label}
                    </span>

                    <span className="mt-1 block wrap-break-word text-sm leading-6 text-(--color-warm-ivory)/60 transition-colors group-hover:text-(--color-silver-sage)">
                      {detail.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0 p-5 sm:p-7 lg:p-8">
            <h3 className="text-lg font-semibold sm:text-xl">
              Send a message
              <span className="text-(--color-moss-grey)">.</span>
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-(--color-warm-ivory)/80"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full min-w-0 rounded-lg border border-(--color-silver-sage)/20 bg-(--color-obsidian)/60 px-3.5 py-3 text-sm text-(--color-warm-ivory) outline-none transition placeholder:text-(--color-silver-sage)/45 focus:border-(--color-moss-grey) focus:ring-2 focus:ring-(--color-moss-grey)/20"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-(--color-warm-ivory)/80"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="w-full min-w-0 rounded-lg border border-(--color-silver-sage)/20 bg-(--color-obsidian)/60 px-3.5 py-3 text-sm text-(--color-warm-ivory) outline-none transition placeholder:text-(--color-silver-sage)/45 focus:border-(--color-moss-grey) focus:ring-2 focus:ring-(--color-moss-grey)/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-(--color-warm-ivory)/80"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  className="w-full rounded-lg border border-(--color-silver-sage)/20 bg-(--color-obsidian)/60 px-3.5 py-3 text-sm text-(--color-warm-ivory) outline-none transition placeholder:text-(--color-silver-sage)/45 focus:border-(--color-moss-grey) focus:ring-2 focus:ring-(--color-moss-grey)/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-(--color-warm-ivory)/80"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-lg border border-(--color-silver-sage)/20 bg-(--color-obsidian)/60 px-3.5 py-3 text-sm leading-6 text-(--color-warm-ivory) outline-none transition placeholder:text-(--color-silver-sage)/45 focus:border-(--color-moss-grey) focus:ring-2 focus:ring-(--color-moss-grey)/20"
                />
              </div>

              <div className="flex flex-col items-start gap-3 pt-1">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center gap-3 rounded-full bg-(--color-warm-ivory) px-5 py-3 text-sm font-semibold text-(--color-obsidian) transition-colors hover:bg-(--color-silver-sage) disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send message"}
                  {!isSending && <span aria-hidden="true">↗</span>}
                </button>

                {/* Show delivery feedback and automatically hide it after one minute. */}
                {status.message && (
                  <p
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`text-sm leading-6 ${
                      status.type === "success"
                        ? "text-(--color-silver-sage)"
                        : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
