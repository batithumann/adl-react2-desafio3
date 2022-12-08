import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PokemonDetalle from "./components/PokemonDetalle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemon />} />
        <Route path="/pokemones/:name" element={<PokemonDetalle />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
