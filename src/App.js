import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/home";
import Tema1 from "./pages/themes/tema1";
import Tema2 from "./pages/themes/tema2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/pages/tema1" exact element={<Tema1/>}/>
        <Route path="/pages/tema2" exact element={<Tema2/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
