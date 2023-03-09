import Logo from '../Assets/little-lemon.jpg';

function Header() {
    return(
        <header>
            <img src={ Logo } alt="Logo" class="headerImg"></img>
            <h1>Book a table at our restaurant! 🍋📅</h1>
        </header>
    );
}

export default Header;