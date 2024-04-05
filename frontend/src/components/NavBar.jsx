import "../styles/NavBar.css";
import logo from "../assets/logoPlume.jpg";

function NavBar() {
  return (
    <>
      <nav className="navTop">
        <div className="navTopLeft">
          <a href="/">
            <img src={logo} alt="logo du site" />
          </a>
        </div>
        <div className="navTopCenter">
          <p id="navName">Marc's Page</p>
        </div>
        <div className="navTopRight">
          <button type="button">Suivre</button>
          <button type="button">Connexion</button>
        </div>
      </nav>
      <nav className="navCenter">
        <div className="menu-item">
          <a role="button" href="/">
            Accueil
          </a>
        </div>
        <div className="menu-item">
          <a role="button" href="/write">
            Ecrire
          </a>
        </div>
        <div className="menu-item">
          <a role="button" href="/">
            Notes
          </a>
        </div>
        <div className="menu-item">
          <a role="button" href="/">
            Archives
          </a>
        </div>
        <div className="menu-item">
          <a role="button" href="/">
            A propos
          </a>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
