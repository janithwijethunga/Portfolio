import { Footer, Navbar } from "../Components/common";
import PortfolioChatAgent from "../Components/common/PortfolioChatAgent";


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
      <PortfolioChatAgent />
    </div>
  )
}

export default MainLayout