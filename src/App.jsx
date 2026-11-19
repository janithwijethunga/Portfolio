import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import Homepage from "./Pages/Homepage";
import Preloader from "./Components/ui/Preloader";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Preloader onComplete={handleComplete} />
      )}

      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
