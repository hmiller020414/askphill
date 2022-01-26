import DropdownSubmenuItem from './DropdownSubmenuItem'

const DropdownSubmenu = ({data}) => {

    const submenu = data.map((d, idx) => 
        <DropdownSubmenuItem data={d} key={idx} />
    )

    return (
        <div className='DropdownSubmenu'>
            {submenu}
        </div>
    )
}

export default DropdownSubmenu