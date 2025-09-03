import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Umrah from "./pages/Umrah.jsx"
import "./index.css"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umrah" element={<Umrah />} />``
        </Routes>
      </main>
      <Footer />
    </>
  );
}


