import React from "react";
import Button from "./../Components/ui/Button";
import Card from "./../Components/ui/Card";
import Input from "./../Components/ui/Input";
import Textarea from "./../Components/ui/Textarea";

const ContactForm = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-16">
      <Card className="max-w-5xl w-full p-6 md:p-8 bg-neutral-900/40 backdrop-blur-xl border-neutral-800/80 rounded-3xl flex flex-col justify-center relative overflow-hidden">
        {/* Top Laser Line Accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase font-black text-indigo-400">
              Transmission Port
            </span>
            <h3 className="text-lg font-semibold text-neutral-100 uppercase tracking-wider">
              Get in Touch
            </h3>
          </div>

          {/* Modern Borderless Input Lines Form */}
          <form className="space-y-6 flex-grow flex flex-col justify-center mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              
              {/* Input Field 1 - Name */}
              <div className="group/input relative border-b border-neutral-800 focus-within:border-indigo-500/80 transition-colors duration-300 py-1">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  aria-label="Your Name" 
                  className="bg-transparent border-none px-0 py-2 focus:ring-0 placeholder:text-neutral-600 text-sm font-medium w-full text-white" 
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-indigo-500 transition-all duration-300 group-focus-within/input:w-full" />
              </div>

              {/* Input Field 2 - Email */}
              <div className="group/input relative border-b border-neutral-800 focus-within:border-indigo-500/80 transition-colors duration-300 py-1">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  aria-label="Your Email" 
                  className="bg-transparent border-none px-0 py-2 focus:ring-0 placeholder:text-neutral-600 text-sm font-medium w-full text-white" 
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-indigo-500 transition-all duration-300 group-focus-within/input:w-full" />
              </div>

              {/* Input Field 3 - Subject */}
              <div className="group/input relative border-b border-neutral-800 focus-within:border-indigo-500/80 transition-colors duration-300 py-1">
                <Input 
                  type="text" 
                  placeholder="Subject" 
                  aria-label="Subject" 
                  className="bg-transparent border-none px-0 py-2 focus:ring-0 placeholder:text-neutral-600 text-sm font-medium w-full text-white" 
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-indigo-500 transition-all duration-300 group-focus-within/input:w-full" />
              </div>

              {/* Input Field 4 - Message */}
              <div className="group/input relative border-b border-neutral-800 focus-within:border-indigo-500/80 transition-colors duration-300 py-1">
                <Textarea 
                  rows={4} 
                  placeholder="Your Message" 
                  aria-label="Your Message" 
                  className="bg-transparent border-none px-0 py-2 focus:ring-0 placeholder:text-neutral-600 text-sm font-medium w-full text-white resize-none" 
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-indigo-500 transition-all duration-300 group-focus-within/input:w-full" />
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-black uppercase tracking-widest text-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 transform active:scale-[0.99]"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default ContactForm;