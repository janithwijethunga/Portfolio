import { useEffect } from "react";
import { MdClose } from "react-icons/md";

const EducationModal = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  // Helper to check which school we are displaying
  const isPCC = item.school.includes("Poramadulla");
  const isSLIIT = item.school.includes("SLIIT");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-neutral-200 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors border border-white/10"
        >
          <MdClose className="w-5 h-5 text-white" />
        </button>

        {/* Header Image Section */}
        <div className="relative h-56 w-full">
          <img
            src={item.image}
            alt={item.school}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

          <div className="absolute bottom-6 left-8 flex items-end gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-2xl bg-white p-2 shadow-xl border border-neutral-200">
              <img
                src={item.logo}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mb-1">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {item.school}
              </h2>
              <p className="text-blue-400 font-medium tracking-wide">
                {item.program}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* --- PORAMADULLA CENTRAL COLLEGE SECTION --- */}
          {isPCC && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* A/L Subjects */}
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">
                    Core Subjects
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {["Combined Mathematics", "Physics", "Chemistry"].map(
                      (sub, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          {sub}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Extracurriculars */}
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">
                    Extracurriculars
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {[
                      "St. John Ambulance",
                      "Scouts",
                      "Cricket",
                      "Elle",
                      "Wrestling",
                      "Music",
                    ].map((act, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Successfully completed G.C.E. A/Ls in{" "}
                  <span className="text-neutral-900 dark:text-white font-extrabold">
                    2021
                  </span>{" "}
                  within the Physical Science stream. Completed G.C.E. O/Ls in{" "}
                  <span className="text-neutral-900 dark:text-white font-extrabold">
                    2016
                  </span>
                  .
                </p>
              </div>
            </div>
          )}

          {/* --- SLIIT SECTION --- */}
          {isSLIIT && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.curriculum?.map((yearData, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30"
                  >
                    <h4 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase mb-3 tracking-wider">
                      {yearData.year}
                    </h4>
                    <ul className="space-y-1">
                      {yearData.modules.map((mod, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400" />
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Commenced studies in{" "}
                  <span className="text-neutral-900 dark:text-white font-bold">
                    2022 June
                  </span>
                  . On track to graduate in{" "}
                  <span className="text-neutral-900 dark:text-white font-bold">
                    2026 September
                  </span>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
