import DropdownSubmenu from './DropdownSubmenu'

const Dropdown = ({data}) => {
    return (
        <div className="Dropdown">
            <button className="Dropdown-Btn">
                <div className="Dropdown-BtnInner">
                    <h3>{data.title}</h3>
                    <div className="Dropdown-BtnArrow" />
                </div>
            </button>
            <DropdownSubmenu data={data.options} />
        </div>
    )
}

export default Dropdown