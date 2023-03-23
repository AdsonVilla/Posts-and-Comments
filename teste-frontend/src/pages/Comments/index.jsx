import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PostComments } from "../../components/PostComments";
import "./comments.css";

function Comments() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <span>22/03/2023</span>
        <h1>Comentários</h1>
      </header>
      <PostComments />
      <PostComments />

      <Footer />
    </div>
  );
}

export default Comments;
