const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="searchbar__container">
                <input className="searchbar__input" type="text" placeholder="Search"></input>
                <div className="searchbar__icon-container">
                    <i className=" searchbar__icon--magnifying-glass fa-solid fa-magnifying-glass"></i>
                </div>               
            </div>
        </div>
    );
};

export { SearchBar };
