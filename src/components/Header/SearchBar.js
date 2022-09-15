import { useState } from "react";
import { useNavigate } from "react-router-dom";
import twitchAPI from "../../api/twitchAPI";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (e.key === "Enter" || e.type !== "keydown") {
      const isValidUser = await validateUserQuery();
      if (!isValidUser) {
        navigate("/error");
      } else {
        navigate(`/channel/${searchText}`);
      }
    }
  };

  const validateUserQuery = async () => {
    let isValidUser;
    let validUserData;
    try {
      const response = await twitchAPI.fetchUsers(searchText);
      // eslint-disable-next-line no-unused-vars
      validUserData = response.data.data[0].login;
      isValidUser = true;
    } catch (error) {
      isValidUser = false;
    }
    return isValidUser;
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
        <div data-testid="searchbar__icon-container" className="searchbar__icon-container" onClick={handleSubmit}>
          <i className="searchbar__icon--magnifying-glass fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
