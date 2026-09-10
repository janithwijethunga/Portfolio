import Container from "../ui/Container";
import SocialLinks from "./SocialLinks";
import { contactCards } from "../../data/contact";

const Footer = () => {
  const footerContacts = contactCards.filter((item) =>
    ["phone", "email"].includes(item.label.toLowerCase()),
  );

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900/60 py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-neutral-100">Janith Wijethunga</p>
          <p className="text-sm text-neutral-400">
            Building thoughtful web experiences with clean, scalable code.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</p>
          <div className="space-y-1">
            {footerContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-neutral-300 hover:text-white transition-colors"
              >
                {item.value}
              </a>
            ))}
          </div>
        </div>
        <SocialLinks />
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          2025 - Present
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
