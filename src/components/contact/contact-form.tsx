"use client";

import {useState, type FormEvent} from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";

const services = [
  "Mobile App Development",
  "Web Development",
  "Backend Development",
  "Custom Software Development",
  "Technical Consulting",
  "Other / Not Sure Yet",
];

const budgets = [
  "Not decided yet",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: {message?: string;} = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "We couldn't send your enquiry. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(
        "Thank you for reaching out! Your enquiry has been received. We'll be in touch within 1–2 business days.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot: hidden from real visitors and assistive technology. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Your name <span className="text-mcade-teal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Email address <span className="text-mcade-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="john@company.com"
            className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Company <span className="text-white/35">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            placeholder="Your company name"
            className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-white"
          >
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-[#102c49] px-4 py-3.5 text-sm text-white outline-none transition focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-semibold text-white"
        >
          Estimated budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full rounded-xl border border-white/10 bg-[#102c49] px-4 py-3.5 text-sm text-white outline-none transition focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
        >
          <option value="" disabled>
            Select a budget range
          </option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-white"
        >
          Tell us about your project{" "}
          <span className="text-mcade-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={6}
          placeholder="What are you looking to build? What challenges are you trying to solve?"
          className="w-full resize-y rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-mcade-teal/70 focus:ring-2 focus:ring-mcade-teal/10"
        />
        <p className="mt-2 text-xs text-white/35">
          Please provide at least 20 characters.
        </p>
      </div>

      {feedback && (
        <div
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex gap-3 rounded-xl border p-4 text-sm leading-6 ${status === "success"
            ? "border-mcade-teal/20 bg-mcade-teal/10 text-teal-100"
            : "border-red-400/20 bg-red-400/10 text-red-100"
            }`}
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
          ) : (
            <span className="mt-0.5 shrink-0 font-bold">!</span>
          )}
          <p>{feedback}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-mcade-teal px-7 py-4 text-sm font-bold text-mcade-navy transition hover:bg-mcade-teal-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            Sending enquiry
            <LoaderCircle size={18} className="animate-spin" />
          </>
        ) : status === "success" ? (
          <>
            Send another enquiry
            <ArrowUpRight size={18} />
          </>
        ) : (
          <>
            Send your enquiry
            <Send size={17} />
          </>
        )}
      </button>

      <p className="text-xs leading-6 text-white/40">
        By submitting this form, you agree that McAde Software may use your
        details to respond to your enquiry.
      </p>
    </form>
  );
}
