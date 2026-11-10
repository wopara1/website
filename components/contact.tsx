"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";
import { email } from "@/lib/data";

const field = "w-full border border-line bg-paper px-4 py-3 outline-none transition-colors focus:border-ink";

export default function Contact() {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    const { error } = await sendEmail(new FormData(form));
    setPending(false);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Message sent. Thank you.");
    form.reset();
  }

  return (
    <section id="contact" className="pb-24">
      <SectionHeading index="05">Contact</SectionHeading>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-serif text-3xl leading-tight sm:text-4xl">
            Not job hunting, but always open to a <em className="italic text-up">good conversation</em>.
          </p>
          <p className="mt-5 text-muted">
            Email me at{" "}
            <a className="text-ink underline underline-offset-4" href={`mailto:${email}`}>{email}</a>{" "}
            or use the form.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <label className="block">
            <span className="label">Your email</span>
            <input className={field} name="senderEmail" type="email" required maxLength={500} />
          </label>
          <label className="block">
            <span className="label">Message</span>
            <textarea className={`${field} h-40`} name="message" required maxLength={5000} />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-opacity disabled:opacity-50"
          >
            {pending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
