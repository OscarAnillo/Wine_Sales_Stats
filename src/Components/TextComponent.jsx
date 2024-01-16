import { Link } from "react-router-dom";

export const TextComponent = () => {
  return (
    <div className="text-div">
      <h1>mel-arr drinks</h1>
      <p>
        ¡Vino artesanal de corozo hecho con amor por manos mágicas que te dan el
        sabor como nunca antes lo habías probado!
      </p>
      <Link to="/stats">
        <p className="numbers-link">Nuestros Numeros</p>
      </Link>
    </div>
  );
};
