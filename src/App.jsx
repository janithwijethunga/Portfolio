import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
