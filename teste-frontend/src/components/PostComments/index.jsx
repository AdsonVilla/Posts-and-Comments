import { useEffect, useState } from "react";
import "./postComments.css";

export function PostComments() {
  return (
    <div>
      <ul>
        <li className="comments-list">
          <div className="comment-box">
            <h4>Título do comentário</h4>
            <p>Comentário</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
