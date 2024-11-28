
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"

function App() {
  return (
    //background
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
