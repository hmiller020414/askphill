import MenuData from '../data/MenuData'
import Header from './header/Header'
import SliderWrapper from './slider/SliderWrapper'
import DropdownWrapper from './dropdown/DropdownWrapper'
import './MenuWrapper.scss'

const MenuWrapper = () => {

    return (
        <div className="MenuWrapper">
            <Header />
            <SliderWrapper slideData={MenuData.MenuSlideData} />
            <DropdownWrapper dropdownData={MenuData.DropdownData}/>
        </div>
    )
}

export default MenuWrapper