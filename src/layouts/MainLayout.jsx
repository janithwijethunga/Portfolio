import { Footer, Navbar } from "../Components/common";
import ThemeToggle from "../Components/common/ThemeToggle";


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default MainLayout