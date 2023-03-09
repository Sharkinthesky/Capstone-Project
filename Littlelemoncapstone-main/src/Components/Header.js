import Logo from '../Assets/little-lemon.jpg';

function Header() {
    return(
        <header>
            <img src={ Logo } alt="Logo" class="headerImg"></img>
            <h1>Welcome to Little Lemon</h1>
        </header>
    );
}

export default Header;