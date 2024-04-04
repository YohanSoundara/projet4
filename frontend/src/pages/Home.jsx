import img from "../assets/articleImg/img1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="cardHome">
      <div className="container-home">
        <span>
          <h2>Titre</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            quidem?
          </p>
        </span>
        <img src={img} alt="article" />
      </div>
    </div>
  );
}

export default Home;
