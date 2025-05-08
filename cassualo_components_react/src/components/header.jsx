import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="cassualo-logo">
        <nav>
          <a href="index.html">
            <img src="/photos/Vector.png" alt="" />
            Cassualo
          </a>
        </nav>
      </div>
      <div className="three-link">
        <div className="menu-toggle" onClick={toggleMenu}>
          ⋮
        </div>
        <nav className={`nav-elements ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="mission.html">Mission</a>
            </li>
            <li>
              <a href="articles.html">Articles</a>
            </li>
            <li>
              <a href="Quizes.html">Quizes</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="logos">
        <img src="/photos/ic_baseline-facebook (1).svg" alt="facebook logo" />
        <img src="/photos/Vector (1).png" alt="instagram logo" />
        <img src="/photos/Group.png" alt="tiktok logo" />
      </div>
    </header>
  );
}

export default Header;
