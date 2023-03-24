import { AboutUs } from "../../components/AboutUs";
import { BlogPost } from "../../components/BlogPost";
import { ContactUs } from "../../components/ContactUs";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import moment from "moment";
import "./home.css";

function Home() {
  const date = new Date();
  const formatDate = moment(date).format("DD/MM/YYYY");
  return (
    <div id="top">
      <Navbar />
      <header className="header">
        <span>{formatDate}</span>
        <h1>Posts recentes</h1>
      </header>
      <div className="posts-container">
        <BlogPost />
      </div>
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Home;
