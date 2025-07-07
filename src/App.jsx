import { Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'

function App() {

  return (
    <main className="bg-slate-300/20">
      <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    </main>
  )
}

export default App
