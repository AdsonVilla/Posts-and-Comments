import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./contactUs.css";

export function ContactUs() {
  const [userEmail, setUserEmail] = useState("");
  const [userDoubtOrSuggestions, setUserDoubtOrSugestion] = useState("");

  function handleUserEmailAndDoubtOrSuggestions() {
    setUserEmail("");
    setUserDoubtOrSugestion("");
    alert("Enviado. Obrigado pelo contato!");
  }

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
        <input
          type="text"
          placeholder="Digite seu E-mail"
          value={userEmail}
          onChange={(ev) => setUserEmail(ev.target.value)}
        />
        <textarea
          rows="5"
          cols="30"
          placeholder="Sua dúvida ou sugestão"
          value={userDoubtOrSuggestions}
          onChange={(ev) => setUserDoubtOrSugestion(ev.target.value)}
        />
        <button onClick={handleUserEmailAndDoubtOrSuggestions}>Enviar</button>
      </div>
    </div>
  );
}
