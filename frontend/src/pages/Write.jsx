import { useState } from "react";

function Write() {
  const [artTitle, setArtTitle] = useState("");
  const [artResume, setArtResume] = useState("");
  const [artText, setArtText] = useState("");

  const handleArticleCreate = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: artTitle,
          resume: artResume,
          texte: artText,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'article");
      }

      // Réinitialiser les champs après une création réussie
      setArtTitle("");
      setArtResume("");
      setArtText("");
    } catch (error) {
      console.error("Erreur lors de la création de l'article :", error.message);
    }
  };

  const handleArtTitle = (event) => {
    setArtTitle(event.target.value);
  };
  const handleArtResume = (event) => {
    setArtResume(event.target.value);
  };
  const handleArtText = (event) => {
    setArtText(event.target.value);
  };

  return (
    <main>
      <section className="writeTitle">
        <h3>Titre :</h3>
        <input
          type="text"
          id="arTitle"
          value={artTitle}
          onChange={handleArtTitle}
        />
      </section>
      <section className="writeResume">
        <h3>Résumé :</h3>
        <input
          type="text"
          id="arResume"
          value={artResume}
          onChange={handleArtResume}
        />
      </section>
      <section className="writeText">
        <h3>Texte :</h3>
        <input
          type="text"
          id="arText"
          value={artText}
          onChange={handleArtText}
        />
      </section>
      <button type="button" onClick={handleArticleCreate} id="btnCreate">
        Valider
      </button>
    </main>
  );
}

export default Write;
