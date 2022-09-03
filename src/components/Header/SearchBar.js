const SearchBar = () => {
    return (
        <div className="searchbar">
            <input className="searchbar__input" type="text" placeholder="Search"></input>
            <i className="searchbar__icon--magnifying-glass fa-solid fa-magnifying-glass"></i>
        </div>
    );
};

export { SearchBar };
