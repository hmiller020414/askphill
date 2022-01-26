import Dropdown from './Dropdown'
import './DropdownWrapper.scss'

const DropdownWrapper = ({dropdownData}) => {

    const dropdowns = dropdownData.map(d => 
        <Dropdown data={d} key={`dropdown_${d.title}_${d.options.stock}`} />
    )

    return (
        <div className="DropdownWrapper">
            <div className="DropdownWrapper-Inner">
                {dropdowns}
            </div>
        </div>
    )
}

export default DropdownWrapper