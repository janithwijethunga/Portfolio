import Container from "../ui/Container";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white/60 py-12 dark:border-neutral-800 dark:bg-neutral-900/60">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Janith Wijethunga</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Building thoughtful web experiences with clean, scalable code.
          </p>
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
