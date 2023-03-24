import { FaArrowUp } from "react-icons/fa";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-contents">
        <div className="footer-logo">
          <img src="/ALKABlog.svg" alt="Logo-Alkablog" />
          <span>&copy; Todos os direitos reservados. 2023.</span>
        </div>

        <div className="back-to-top">
          <a href="#top">
            <span>Voltar ao topo</span>
            <FaArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
