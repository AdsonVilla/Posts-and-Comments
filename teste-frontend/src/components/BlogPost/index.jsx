import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./blogPost.css";

export function BlogPost() {
  const [posts, setPosts] = useState([]);
  // Criar uma constante que armazene uma quantidade limite de posts aparecendo na tela
  const [limitOfPosts, setLimitOsPosts] = useState(10);

  // Função que adiciona mais 10 comentários na tela sempre que for executada
  function handleShowMore() {
    setLimitOsPosts(limitOfPosts + 10);
  }

  // Definir o intervalo de posts aparecendo, inicialmente até o 10, mas a medida que limite for atualizado, mostrará até 20, 30...
  const postsToShow = posts.slice(0, limitOfPosts);

  const postsApi = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(postsApi)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {postsToShow.map((post) => {
          return (
            <li key={post.id} className="posts-list">
              {/* Ao clicar, levará para a página de comentários exclusiva do post, pois está passando seu id na rota */}
              <Link to={`/${post.id}/comments`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            </li>
          );
        })}

        {/* Se a quantidade total de posts ainda for maior que a quantidade posts exibidos na tela, o botão "Ver mais" aparecerá */}

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
