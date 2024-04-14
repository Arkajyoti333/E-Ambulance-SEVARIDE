import Home from "./components/Home/homescreen";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Services from "./components/Services/services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Footer/>
      
    </div>
  );
}

export default App;

