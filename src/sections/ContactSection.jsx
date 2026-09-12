import React from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiFileText,
  FiSend,
  FiPhone,
  FiFacebook,
} from "react-icons/fi";
import Button from "./../Components/ui/Button";
import Card from "./../Components/ui/Card";
import Input from "./../Components/ui/Input";
import Textarea from "./../Components/ui/Textarea";
import { contactCards } from "../data/contact";

const ContactSection = () => {
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "email":
        return {
          icon: <FiMail className="w-4 h-4" />,
          color: "text-sky-400 bg-sky-500/10 border-sky-500/25 shadow-sky-500/10",
        };
      case "phone":
        return {
          icon: <FiPhone className="w-4 h-4" />,
          color: "text-blue-400 bg-blue-500/10 border-blue-500/25 shadow-blue-500/10",
        };
      case "github":
        return {
          icon: <FiGithub className="w-4 h-4" />,
          color: "text-blue-400 bg-blue-500/10 border-blue-500/25 shadow-blue-500/10",
        };
      case "linkedin":
        return {
          icon: <FiLinkedin className="w-4 h-4" />,
          color: "text-sky-400 bg-sky-500/10 border-sky-500/25 shadow-sky-500/10",
        };
      case "facebook":
        return {
          icon: <FiFacebook  className="w-4 h-4" />,
          color: "text-blue-400 bg-blue-500/10 border-blue-500/25 shadow-blue-500/10",
        };
      default:
        return {
          icon: <FiFileText className="w-4 h-4" />,
          color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25 shadow-indigo-500/10",
        };
    }
  };

  const fieldWrap =
    "group/input relative rounded-2xl border border-neutral-800/70 bg-neutral-950/45 px-4 py-3 transition-all duration-300 hover:border-neutral-700/80 focus-within:border-indigo-500/70 focus-within:bg-neutral-950/70 focus-within:shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_18px_45px_rgba(0,0,0,0.25)]";

  const fieldLabel =
    "mb-1.5 block text-base font-mono uppercase tracking-[0.22em] text-neutral-600 transition-colors duration-300 group-focus-within/input:text-indigo-400";

  const fieldClass =
    "w-full border-none bg-transparent px-0 py-1 text-sm font-medium text-white placeholder:text-neutral-700 focus:ring-0 focus:outline-none";

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-950 px-4 py-20 selection:bg-indigo-500 selection:text-white md:px-8"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:46px_46px] opacity-25" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-10rem)] w-full items-center justify-center">
        <Card className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-neutral-800/70 bg-neutral-900/20 p-0 shadow-[0_50px_120px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* Top Glow Border */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />

          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            {/* ================= LEFT CONTROLS PANEL (35% Width) ================= */}
            <div className="relative flex flex-col border-b border-neutral-800/70 bg-neutral-950/55 p-6 md:p-8 lg:col-span-5 lg:h-[580px] lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_32%)]" />

              {/* Header Info */}
              <div className="relative space-y-5 mb-10">
                <div className="space-y-3">
                  <h3 className="text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-4xl">
                    Let's Build <br />
                    <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Something Real.
                    </span>
                  </h3>
                </div>
              </div>

              {/* New Cyber-Style Minimalist List Instead of Heavy Cards */}
              <div className="relative my-8 space-y-3 lg:my-0">

                {contactCards.map((item) => {
                  const iconMeta = getIcon(item.label);

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-950/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/35 hover:bg-neutral-900/75 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/[0.03] to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative flex min-w-0 items-center gap-3">
                        <div
                          className={`rounded-xl border p-2.5 shadow-lg transition-all duration-300 group-hover:scale-105 ${iconMeta.color}`}
                        >
                          {iconMeta.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                            {item.label}
                          </p>
                          <p className="max-w-[190px] truncate text-xs font-semibold text-neutral-300 transition-colors duration-300 group-hover:text-white sm:max-w-xs lg:max-w-[170px]">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <div className="relative rounded-lg border border-neutral-800 bg-neutral-900 p-1.5 text-neutral-500 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-neutral-950">
                        <FiArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT TRANSMISSION GRID (65% Width) ================= */}
            <div className="relative flex flex-col justify-between bg-neutral-900/20 p-6 lg:col-span-7 ">
              {/* Subtle Decorative Background Corner Grid lines */}
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] opacity-20 [background-size:9px_9px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-[radial-gradient(rgba(99,102,241,0.18)_1px,transparent_1px)] opacity-20 [background-size:10px_10px]" />

              {/* Inputs Section Wrapper with Grid layout for Name/Email */}
              <form
                className="relative flex flex-grow flex-col justify-center space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Input Field 1 - Name */}
                    <div className={fieldWrap}>
                      <span className={fieldLabel}>FullName</span>
                      <Input
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Enter your Full Name"
                        className={fieldClass}
                      />
                      <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-transform duration-300 group-focus-within/input:scale-x-100" />
                    </div>

                    {/* Input Field 2 - Email */}
                    <div className={fieldWrap}>
                      <span className={fieldLabel}>Email Address</span>
                      <Input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your Email Address"
                        className={fieldClass}
                      />
                      <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-transform duration-300 group-focus-within/input:scale-x-100" />
                    </div>
                  </div>

                  {/* Input Field 3 - Subject */}
                  <div className={fieldWrap}>
                    <span className={fieldLabel}>Email Subject</span>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="What is this Message regarding?"
                      className={fieldClass}
                    />
                    <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-transform duration-300 group-focus-within/input:scale-x-100" />
                  </div>

                  {/* Input Field 4 - Message */}
                  <div className={fieldWrap}>
                    <span className={fieldLabel}>Message</span>
                    <Textarea
                      rows={4}
                      name="message"
                      placeholder="Type your Message here..."
                      className={`${fieldClass} resize-none leading-relaxed`}
                    />
                    <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-transform duration-300 group-focus-within/input:scale-x-100" />
                  </div>
                </div>

                {/* Custom Interactive Action Button */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-black px-6 py-4 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-950 shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-[0_25px_60px_rgba(99,102,241,0.16)]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-neutral-950/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <span className="relative">Send Message</span>
                    <FiSend className="relative h-3.5 w-3.5 text-neutral-600 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-1 group-hover/btn:text-neutral-950" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;