import MenuData from '../data/MenuData'
import Header from './header/Header'
import SliderWrapper from './slider/SliderWrapper'
import DropdownWrapper from './dropdown/DropdownWrapper'

const MenuWrapper = () => {

    console.log(MenuData.MenuSlideData)

    return (
        <div className="MenuWrapper">
            <h1>Here is my header</h1>
            <Header />
            <h1>Here is my slider</h1>
            <SliderWrapper />
            <h1>Here are my dropdowns</h1>
            <DropdownWrapper />
        </div>
    )
}

export default MenuWrapper