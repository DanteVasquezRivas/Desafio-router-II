import "./Pokemones.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  // estados para utilizar
  const [pokemones, setPokemones] = useState([]);
  const [pokemonElegido, setPokemonElegido] = useState("");
  const navigate = useNavigate();

  const getPokemones = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { results } = await res.json();
    console.log(res.body.results);
    setPokemones(results);
  };

  const DetallePokemon = async () => {
    if (pokemonElegido) navigate(`/pokemones/${pokemonElegido}`);
    else alert("Debes seleccionar un pokemón");
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <div className="MyContent">
      <h1>Selecciona un pokemón</h1>
      <br></br>

      <select
        value={pokemonElegido}
        style={{
          height: "40px",
          width: "300px",
          borderRadius: "5px",
          borderColor: "gray",
        }}
        onChange={({ target }) => setPokemonElegido(target.value)}
      >
        <option value="" disabled>
          Pokemones
        </option>

        {pokemones.map(({ name }, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>
      <br></br>

      <button
        style={{ color: "white", backgroundColor: "black" }}
        onClick={DetallePokemon}
      >
        Ver Detalle
      </button>
    </div>
  );
};

export default Pokemones;
