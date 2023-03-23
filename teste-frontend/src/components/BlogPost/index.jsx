import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./blogPost.css";

export function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [limitOfPosts, setLimitOsPosts] = useState(10);

  const handleShowMore = () => {
    setLimitOsPosts(limitOfPosts + 10);
  };

  const postsToShow = posts.slice(0, limitOfPosts);

  const api = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {postsToShow.map((post) => {
          return (
            <li key={post.id} className="posts-list">
              <Link to="/comments">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            </li>
          );
        })}

        <div className="button-div">
          {posts.length > limitOfPosts && (
            <button className="show-more" onClick={handleShowMore}>
              Ver mais
            </button>
          )}
        </div>
      </ul>
    </div>
  );
}
