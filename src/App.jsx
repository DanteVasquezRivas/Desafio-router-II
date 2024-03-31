import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nvbar from "./components/Nvbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import Detalle from "./views/Detalle";
import PokeCard from "./components/PokeCard";

function App() {
  return (
    <div className="mainContainer">
      <div className="content">
        <BrowserRouter>
          <Nvbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pokemones" element={<Pokemones />} />

            <Route path="/Pokemones/:name" element={<Detalle />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
