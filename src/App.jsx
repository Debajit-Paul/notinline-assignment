import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className="w-fill">
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <Main />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
