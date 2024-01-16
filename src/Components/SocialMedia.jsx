import { Link } from "react-router-dom";

export const SocialMedia = () => {
  return (
    <div className="social-div">
      <Link to="https://www.facebook.com/mel.arr.drinks" target="_blank">
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link to="https://www.instagram.com/mel.arr_drinks/" target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <i className="fa-brands fa-twitter"></i>
    </div>
  );
};
