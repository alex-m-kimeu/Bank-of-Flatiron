function Header({name, logo}) {
    return (
        <header>
            <img src={ logo } alt="logo" />
            <h2>{ name }</h2>
       </header>
    );
}

export default Header;