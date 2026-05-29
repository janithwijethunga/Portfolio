import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose, items, onScroll }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden"
        >
          <div className="mt-3 rounded-3xl border border-neutral-800 bg-neutral-900/95 p-4 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div key={item.id}>
                  {item.href.startsWith("#") ? (
                    <button
                      type="button"
                      onClick={() => onScroll(item.id)}
                      className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end border-t border-neutral-800 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
