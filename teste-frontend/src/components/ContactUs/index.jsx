import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./contactUs.css";

export function ContactUs() {
  return (
    <div id="contactUs" className="contact-container">
      <div className="social-networks">
        <ul>
          <h4>Nossas redes sociais</h4>
          <a href="#">
            <li>
              <FaEnvelope /> contato@alkablog.com
            </li>
          </a>
          <a href="#">
            <li>
              <FaLinkedin /> /alkablog
            </li>
          </a>
          <a href="#">
            <li>
              <FaWhatsapp /> (99) 99999-9999
            </li>
          </a>
        </ul>
      </div>
      <div className="doubts-and-sugestions">
        <h4>Para dúvidas ou sugestões:</h4>
        <input type="text" placeholder="Digite seu E-mail" />
        <textarea
          rows="5"
          cols="30"
          placeholder="Seu comentário ou sugestão..."
        />
        <button>Enviar</button>
      </div>
    </div>
  );
}
