import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-contents">
        <div>
          <img src="/ALKABlog.svg" alt="Logo-Alkablog" />
        </div>
        <div>
          <ul className="options">
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Entre em contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
