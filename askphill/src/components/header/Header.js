import ShoppingBag from '../../images/ShoppingBag.svg'
import Stox_Logo from '../../images/Stox_Logo.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Left">
                <button className="Hamburger">
                    <div className="Hamburger-Line"></div>
                    <div className="Hamburger-Line"></div>
                    <div className="Hamburger-Line"></div>
                </button>
                <img src={Stox_Logo} className="StoxLogo" alt='Stox Logo' />
            </div>
            <div className="Header-Right">
                <img src={ShoppingBag} className="ShoppingBag" alt='Shopping Bag' />
            </div>
        </header>
    )
}

export default Header