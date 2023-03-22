import { BlogPost } from "../../components/BlogPost";
import { Navbar } from "../../components/Navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <span>22/03/2023</span>
        <h1>Posts recentes</h1>
      </header>
      <div className="posts-container">
        <BlogPost />
      </div>
    </div>
  );
}
export default Home;
