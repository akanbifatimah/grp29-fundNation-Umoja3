import 'bootstrap/dist/css/bootstrap.css'
import Cards from "./Assets/cards";
import Hero from "./Assets/Hero";
import Reviews from "./Assets/Reviews";
import Footer from "./Assets/Footer";


function App() {
  return (
    <div className="App">
        <Hero/>
        <Cards/>
        <Reviews/>
        <Footer/>
    </div>
  );
}

export default App;
