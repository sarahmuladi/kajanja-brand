
"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    setSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Your message could not be sent. Please try again.");
      }
    } catch {
      alert(
        "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 text-black lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-black">
            Get in Touch
          </p>

          <h2 className="text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl lg:text-8xl">
            Let&apos;s create
            <br />
            <span className="text-black">
              something extraordinary.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-semibold">
              Send us a message
            </h3>

            {submitted ? (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <p className="text-2xl font-medium text-black">
                  Thank you!
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  Your message has been submitted successfully.
                  The Kajanja team will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                method="POST"
                name="contact"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="bot-field">
                    Leave this field empty
                  </label>
                  <input
                    id="bot-field"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-black"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="w-full rounded-none border-0 border-b-2 border-gray-400 bg-transparent px-0 py-4 text-black caret-black outline-none placeholder:text-gray-500 focus:border-gray-700 focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-black"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-none border-0 border-b-2 border-gray-400 bg-transparent px-0 py-4 text-black caret-black outline-none placeholder:text-gray-500 focus:border-gray-700 focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm text-black"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    className="w-full rounded-none border-0 border-b-2 border-gray-400 bg-transparent px-0 py-4 text-black caret-black outline-none placeholder:text-gray-500 focus:border-gray-700 focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-black"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-none border-0 border-b-2 border-gray-400 bg-transparent px-0 py-4 text-black caret-black outline-none placeholder:text-gray-500 focus:border-gray-700 focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="lg:pl-12">
            <p className="max-w-lg text-lg leading-8 text-black">
              Whether you are building a new brand, transforming an
              existing one or looking for a creative partner, we&apos;d
              love to hear from you.
            </p>

            <div className="mt-12 space-y-10">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black">
                  Email
                </p>
                <a
                  href="mailto:hello@kajanjabrand.co.tz"
                  className="text-lg hover:text-gray-400"
                >
                  hello@kajanjabrand.co.tz
                </a>
              </div>

              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black">
                  Phone
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+255652736984"
                    className="block hover:text-gray-400"
                  >
                    +255 652 736 984
                  </a>
                  <a
                    href="tel:+255769861841"
                    className="block hover:text-gray-400"
                  >
                    +255 769 861 841
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black">
                  Visit Us
                </p>
                <p className="leading-7 text-black">
                  No. 2 Old Bagamoyo Road /
                  <br />
                  Brown Street – Mbezi Beach Kawe
                  <br />
                  Dar es Salaam, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
