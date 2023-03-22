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
            <li key={post.title} className="posts-list">
              <div className="post-box">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
