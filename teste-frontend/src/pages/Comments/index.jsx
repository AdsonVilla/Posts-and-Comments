import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PostComments } from "../../components/PostComments";
import moment from "moment";
import "./comments.css";

function Comments() {
  const date = new Date();
  const formatDate = moment(date).format("DD/MM/YYYY");
  return (
    <div>
      <Navbar />
      <header className="header">
        <span>{formatDate}</span>
        <h1>Comentários</h1>
      </header>
      <PostComments />
      <PostComments />

      <Footer />
    </div>
  );
}

export default Comments;
