import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;