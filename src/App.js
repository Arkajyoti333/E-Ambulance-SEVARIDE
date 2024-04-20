import Home from "./components/Home/homescreen";
import Services from "./components/Services/services"
import Feartures from "./components/Features/features"
import CoreServices from "./components/CoreServices/coreservice";

function App() {
  return (
    <div className="App">
  
      <Home/>
      <Services/> 
      <Feartures/>
      <CoreServices/>
      
    </div>
  );
}

export default App;

