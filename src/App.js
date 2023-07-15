import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";
import Newpage from "./components/Newpage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/newpage" element={<Newpage />} />
      </Routes>
    </>
  );
}

export default App;
