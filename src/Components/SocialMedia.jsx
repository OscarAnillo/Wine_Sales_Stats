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
      <Link
        to="https://api.whatsapp.com/send/?phone=573004072196&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
      <i className="fa-brands fa-twitter"></i>
    </div>
  );
};
