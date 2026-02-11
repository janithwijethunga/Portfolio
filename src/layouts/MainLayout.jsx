import { Footer, Navbar } from "../Components/common";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <Navbar />
      <main className="w-full pt-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout