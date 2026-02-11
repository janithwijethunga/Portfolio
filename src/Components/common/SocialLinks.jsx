const links = [
  { label: "Facebook", href: "https://facebook.com/janithwijethunga" },
  { label: "LinkedIn", href: "https://linkedin.com/in/janithwijethunga" },
  { label: "GitHub", href: "https://github.com/janithwijethunga" },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
