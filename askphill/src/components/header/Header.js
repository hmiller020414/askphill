import ShoppingBag from '../../images/ShoppingBag.svg'
import Stox_Logo from '../../images/Stox_Logo.png'

const Header = () => {
    return (
        <header className="Header">
            <img src={Stox_Logo} alt='Stox Logo' />
            <img src={ShoppingBag} alt='Shopping Bag' />
        </header>
    )
}

export default Header