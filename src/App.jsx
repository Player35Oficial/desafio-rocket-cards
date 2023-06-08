import { useEffect, useState } from "react";
import "./App.css";
import rocketLogo from "./assets/logo.svg";
import company from "./assets/company.svg";
import followers from "./assets/followers.svg";
import following from "./assets/following.svg";
import location from "./assets/location.svg";
import repository from "./assets/repository.svg";

function App() {
  const [user, setUser] = useState({});

  const url = "https://api.github.com/users/player35Oficial";

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error ao buscar usuário: ", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [url]);
  console.log(user);
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card-content">
          <header>
            <div className="header-logo">
              <img src={rocketLogo} alt="img-github" />
            </div>
            <p>{user.login}</p>
          </header>
          <main>
            <section className="img-container">
              <img
                src={user.avatar_url}
                alt="imagem de perfil do usuário Player35Oficial no Github"
              />
            </section>
            <section className="profile-container">
              <ul>
                <li>
                  <img src={followers} alt="" />
                  <p>{user.followers} Seguidores</p>
                </li>
                <li>
                  <img src={following} alt="" />
                  <p>{user.following} Seguindo</p>
                </li>
                <li>
                  <img src={repository} alt="" />
                  <p>{user.public_repos} Repositórios</p>
                </li>
                <li>
                  <img src={company} alt="" />
                  <p>{user.company || "Estudante"}</p>
                </li>
                <li>
                  <img src={location} alt="" />
                  <p>{user.location}</p>
                </li>
              </ul>
            </section>
          </main>
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
          <button id="gerar-bg">Gerar Background</button>
        </div>
      </div>
    </div>
  );
}

export default App;
