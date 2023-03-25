import { Footer } from "../../components/Footer";
import { PostComments } from "../../components/PostComments";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";

import "./comments.css";

function Comments() {
  const date = new Date();
  const formatDate = moment(date).format("DD/MM/YYYY");

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="/ALKABlog.svg" alt="Logo-Alkablog" />
        </Link>
      </nav>

      <header className="header">
        <span>{formatDate}</span>
        <h1>
          <Link to="/">
            <FaArrowLeft style={{ color: "#000" }} />
          </Link>
          Comentários
        </h1>
      </header>
      <PostComments />

      <Footer />
    </div>
  );
}

export default Comments;
