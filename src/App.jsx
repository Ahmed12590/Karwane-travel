import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import "./index.css"

export default function App() {
  return (
    <>
      <a id="top" />
      <Header />
      { <Home /> }
      <Footer />
    </>
  )
}
