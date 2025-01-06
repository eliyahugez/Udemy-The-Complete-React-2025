
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import ReactImg from '../../assets/react-core-concepts.png'
import './Header.css'

function genRandomeInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}

export default function Header() {

    const descriptin = reactDescriptions[genRandomeInt(reactDescriptions.length)];

    return (
        <header>
            <img src={ReactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descriptin} React concepts you will need for almost any app you are
                going to build! lets goooooooooooodfgdfff
            </p>
        </header>
    )
}