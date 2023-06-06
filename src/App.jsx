import "./App.css";
import rocketLogo from "./assets/logo.svg";

function App() {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card-content">
          <header>
            <div className="header-logo">
              <img src={rocketLogo} alt="img-github" />
            </div>
            <p>UserName</p>
          </header>
          <main>main content</main>
          <footer>
            <div className="footer-logo">
              <img src={rocketLogo} alt="rocket logo" />
              <p>ROCKETCARD</p>
            </div>
          </footer>
        </div>
      </div>
      <div className="auxiliar-container">
        <div className="block">
          <p>Customizar Rocketcard</p>
          <button>Gerar Background</button>
        </div>
      </div>
    </div>
  );
}

export default App;
