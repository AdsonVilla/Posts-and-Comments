import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./blogPost.css";

export function BlogPost() {
  const [posts, setPosts] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="posts-list">
              <Link to="/comments">
                <h3>{post.title}</h3>
                <span>{post.id}</span>
                <p>{post.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
