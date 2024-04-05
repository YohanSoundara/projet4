import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/articleImg/img1.jpg";
import "../styles/Home.css";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/items", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des articles");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des articles :",
          error.message
        );
      }
    };

    fetchArticles();
  }, []); // Le tableau de dépendances est vide, donc cette fonction s'exécutera uniquement après le premier rendu

  return (
    <div className="cardHome">
      {articles.map((article) => (
        <Link to={`/reader/${article.id}`} key={article.id} className="link">
          <div className="container-home" key={article.id}>
            <span>
              <h2>{article.title}</h2>
              <p>{article.resume}</p>
            </span>
            <img src={img} alt="article" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
