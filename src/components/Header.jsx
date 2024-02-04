import Search from "./Search";

function Header({name, logo}) {
    return (
        <header>
            <div className="header_title">
                <img src={ logo } alt="logo" />
                <h2>{ name }</h2>
            </div>
            <div className="search_container">
                <Search />
            </div>
       </header>
    );
}

export default Header;