import { Link } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <i className="header-left__icon--robot fa-solid fa-robot"></i>
      <Link className="header-left__link" to="/">
        <span className="header-left__text">Following</span>
      </Link>
      <Link className="header-left__link" to="/">
        <span className="header-left__text">Browse</span>
      </Link>
      <i className="header-left__icon--ellipsis fa-solid fa-ellipsis-vertical"></i>
    </div>
  );
};

export { HeaderLeft };
