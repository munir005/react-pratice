
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgeCalculatePage from "./pages/AgeCalculatePage";
import TemperaturePage from "./pages/TemperaturePage";

function App() {

  return (
    <div className="w-full h-fit ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/age-calculate" element={<AgeCalculatePage />}/>
        <Route path="/temperature-calculate" element={<TemperaturePage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
