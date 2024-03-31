import logo from "../assets/pikachu.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="MyContent">
        <h1>Bienvenido maestro pokemón</h1>
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
};

export default Home;
