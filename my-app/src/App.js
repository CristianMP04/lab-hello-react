import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";




function App() {
  return (
    <div className="container">
        
      <header className="App-header">
        <div class="flexbox-container">
          <div>
            <img src={ironhackLogo} alt="#" />
          </div>
          <div>
            <img src={menu} alt="#" />
          </div>
            
        </div>
          
      </header>
    
    </div>
    
  );
}
export default App;