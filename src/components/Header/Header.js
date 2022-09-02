import { HeaderLeft } from "./HeaderLeft";
import { SearchBar } from "./SearchBar";
import { HeaderRight } from "./HeaderRight";

const Header = () => {
    return (
        <header>
            <HeaderLeft />
            <SearchBar />
            <HeaderRight />
        </header>
    );
};

export { Header };