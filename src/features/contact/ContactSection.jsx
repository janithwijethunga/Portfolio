import { motion } from "framer-motion";
import Button from "../../Components/ui/Button";
import Card from "../../Components/ui/Card";
import Container from "../../Components/ui/Container";
import Input from "../../Components/ui/Input";
import SectionHeader from "../../Components/ui/SectionHeader";
import Textarea from "../../Components/ui/Textarea";
import SocialLinks from "../../Components/common/SocialLinks";
import { fadeUp, stagger } from "../../utils/motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something thoughtful"
          subtitle="Have a project or a role in mind? Send a quick note and I will get back within 48 hours."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Contact details</h3>
              <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Email</p>
                  <p>your.email@example.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Phone</p>
                  <p>+94 77 123 4567</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Location</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <SocialLinks />
            </Card>
            <Card>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Prefer a quick call? I am available for product discovery chats and portfolio reviews.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input type="text" placeholder="Full name" aria-label="Full name" />
                  <Input type="email" placeholder="Email address" aria-label="Email address" />
                </div>
                <Input type="text" placeholder="Project type" aria-label="Project type" />
                <Textarea rows={5} placeholder="Tell me about your project" aria-label="Project details" />
                <Button type="submit" className="w-full">
                  Send message
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
