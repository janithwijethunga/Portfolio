import React from "react";
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiFileText } from "react-icons/fi";
import Card from "./../Components/ui/Card";
import { contactCards } from "../data/contact";

const ContactCards = () => {
  // Icons ටික map කරගන්න labels චෙක් කරන function එක
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "email":
        return { icon: <FiMail className="w-5 h-5" />, color: "from-blue-500 to-indigo-500" };
      case "github":
        return { icon: <FiGithub className="w-5 h-5" />, color: "from-zinc-700 to-neutral-900" };
      case "linkedin":
        return { icon: <FiLinkedin className="w-5 h-5" />, color: "from-blue-600 to-cyan-500" };
      default:
        return { icon: <FiFileText className="w-5 h-5" />, color: "from-indigo-500 to-purple-500" };
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center px-6 py-16">
      <Card className="max-w-5xl w-full p-6 md:p-8 bg-neutral-900/40 backdrop-blur-xl border-neutral-800/80 rounded-3xl flex justify-center relative overflow-hidden">
        <div className="space-y-6 w-full">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-neutral-100 uppercase tracking-wider">
              Contact Me
            </h3>
          </div>

          {/* Icons Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {contactCards.map((item) => {
              const iconMeta = getIcon(item.label);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-5 flex flex-col justify-between items-start overflow-hidden transition-all duration-500 hover:border-neutral-700 hover:-translate-y-1 shadow-2xl"
                >
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className={`p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700 shadow-inner transition-all duration-300 group-hover:scale-105 bg-gradient-to-br ${iconMeta.color}`}>
                    {iconMeta.icon}
                  </div>

                  <div className="w-full pt-6 space-y-1 relative z-10">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-neutral-500">
                        {item.label}
                      </p>
                      <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-1 font-semibold text-sm text-neutral-300 group-hover:text-white transition-colors truncate tracking-tight max-w-full">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactCards;