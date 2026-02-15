import { motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import Input from "../Components/ui/Input";
import SectionHeader from "../Components/ui/SectionHeader";
import Textarea from "../Components/ui/Textarea";
import { fadeUp, stagger } from "../utils/motion";
import { contactCards } from "../data/contact";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something meaningful"
          subtitle="Reach out for collaborations, product work, or UI/UX engagements."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Contact cards</h3>
              <div className="grid gap-3">
                {contactCards.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 transition hover:border-primary-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{item.label}</p>
                    <p className="mt-1 font-semibold">{item.value}</p>
                  </a>
                ))}
              </div>
            </Card>
       
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Get in Touch</h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" aria-label="Your Name" />
                <Input type="email" placeholder="Your Email" aria-label="Your Email" />
                <Input type="text" placeholder="Subject" aria-label="Subject" />
                <Textarea rows={5} placeholder="Your Message" aria-label="Your Message" />
                <Button type="submit" className="w-full">
                  Send
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
