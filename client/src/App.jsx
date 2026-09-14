import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// We are not using React Router yet.
// For now we just keep track of which page to show using useState.
// We will replace this with React Router in a later step.

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "products") return <Products />;
    if (currentPage === "about") return <About />;
    if (currentPage === "contact") return <Contact />;
    return <Home setCurrentPage={setCurrentPage} />;
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
