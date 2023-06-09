import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-contents">
        <Link to="/">
          <img src="/ALKABlog.svg" alt="Logo-Alkablog" />
        </Link>
        <div>
          <ul className="options">
            <li>
              <a href="#aboutUs">Sobre nós</a>
            </li>
            <li>
              <a href="#contactUs">Entre em contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
