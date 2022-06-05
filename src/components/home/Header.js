import './Header.css'
import logoMonca from '../../assets/logo/logoMonca.png'

export default function Header() {
    return (
        <header className="headerMonica">
            <img alt='logo' src={logoMonca}></img>
        </header> 
    )
}