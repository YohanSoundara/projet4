import React from "react";
import { useParams } from "react-router-dom";

function Reader() {
  const { id } = useParams();

  return <div>Lecture de l'article avec l'ID: {id}</div>;
}

export default Reader;
