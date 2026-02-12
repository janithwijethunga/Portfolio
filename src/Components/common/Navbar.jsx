import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home", id: "home" },
      { name: "My Skills", href: "#skills", id: "skills" },
      { name: "Interests", href: "#interests", id: "interests" },
      { name: "Educations", href: "#education", id: "education" },
      { name: "Projects", href: "#projects", id: "projects" },
    ],
    [],
  );

  const onScroll = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-5 py-3 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100"
          >
            Janith Wijethunga
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => onScroll(item.id)}
                  className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                as="button"
                type="button"
                variant="secondary"
                onClick={() => onScroll("contact")}
              >
                Contact
              </Button>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:bg-neutral-100 md:hidden dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{isOpen ? "-" : "+"}</span>
          </button>
        </div>
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={navItems}
          onScroll={onScroll}
        />
      </div>
    </nav>
  );
};

export default Navbar;
