import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type !== "keydown") {
      navigate(`/channel/${searchText}`);
    };
  };

  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search streamer"
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        ></input>
        <div className="searchbar__icon-container" onClick={handleSubmit}>
          <i className="searchbar__icon--magnifying-glass fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
