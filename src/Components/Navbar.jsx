import reactLogo from "../assets/react.svg";

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React logo" />
                <span>React Facts</span>
            </nav>
        </header>
    );
}