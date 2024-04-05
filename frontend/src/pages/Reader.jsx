import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Reader.css";

function Reader() {
  const { id } = useParams();
  const [oneArticles, setOneArticles] = useState([]);

  useEffect(() => {
    const fetchOneArticles = async () => {
      try {
        const response = await fetch(`http://localhost:3310/api/items/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des articles");
        }

        const data = await response.json();
        setOneArticles([data]);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des articles :",
          error.message
        );
      }
    };

    fetchOneArticles();
  }, []);

  return (
    <main className="pageReader">
      {oneArticles.map((article) => (
        <div className="container-reader">
          <span>
            <h2>{article.title}</h2>
            <h3>{article.resume}</h3>
            <p>{article.texte}</p>
          </span>
        </div>
      ))}
    </main>
  );
}

export default Reader;
