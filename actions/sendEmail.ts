"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Sender on the verified Resend domain mail.paradoxequity.com. Override with CONTACT_FROM_EMAIL.
const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "contact@mail.paradoxequity.com";

type SendResult = { data?: { id: string }; error?: string };

export const sendEmail = async (formData: FormData): Promise<SendResult> => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Contact form is not configured. Please email me directly." };
  }

  try {
    // Resend v6 returns { data, error } instead of throwing on API errors.
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromAddress}>`,
      to: "ewopara@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });
    if (error) return { error: error.message };
    return { data: data ?? undefined };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
