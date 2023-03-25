import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./postComments.css";

export function PostComments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
      });
  }, [id]);

  return (
    <div>
      <ul>
        <li className="comments-list">
          <div className="comment-box">
            {comments.map((comment) => (
              <div key={comment.id} className="comment">
                <div className="title-and-user-email">
                  <h4>{comment.name}</h4>
                  <span>{comment.email}</span>
                </div>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
