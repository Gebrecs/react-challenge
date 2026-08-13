import globe from "../assets/glob.jpg";

export default function Header() {
    return (
        <header>
            <img src={globe} alt="globe icon" />
            <h1>My Tour Journal</h1>
        </header>
    )
}