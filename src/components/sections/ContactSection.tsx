"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";

const CONTACT_INFO = [
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Clock, label: "Hours", value: SITE.hours },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async () => {
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.service) {
      setError("Please fill in your name, email, and service.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create booking.");
      }

      console.log("Booking successfully created:", data.booking);

      // Show success screen
      setSent(true);

      // Clear form
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Booking error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSent(false);
    setError("");
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto relative px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Get In Touch</SectionLabel>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h2>

          <p className="text-slate-400 max-w-lg mx-auto">
            Ready for a transformation? Fill out the form and we&apos;ll
            confirm your slot within the hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact information */}
          <div className="lg:col-span-2 space-y-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-card border border-surface-border"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-brand-400" />
                </div>

                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">
                    {label}
                  </div>

                  <div className="text-sm text-slate-300">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3 bg-surface-card border border-surface-border rounded-2xl p-7">
            {sent ? (
              /* SUCCESS */
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-brand-400" />

                <h3 className="font-display text-2xl font-bold text-white">
                  Booking Received!
                </h3>

                <p className="text-slate-400 max-w-sm">
                  We received your booking request and will confirm your
                  appointment within the hour.
                </p>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={resetForm}
                >
                  Make Another Booking
                </Button>
              </div>
            ) : (
              /* FORM */
              <div className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                    Service
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-colors"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>

                    <option>Basic Wash ($19)</option>
                    <option>Premium Package ($49)</option>
                    <option>Ultimate Detail ($129)</option>
                    <option>Ceramic Coating (quote)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Preferred date/time, special requests..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  <Send className="w-4 h-4" />

                  {loading ? "Sending..." : "Send Request"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}