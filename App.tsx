import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AkadPage from "./app/Akad";
import ResepsiPage from "./app/Resepsi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AkadPage />} />
        <Route path="/resepsi" element={<ResepsiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
