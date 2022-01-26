const DropdownSubmenuItem = ({data}) => {

    return (
        <button className="DropdownSubmenuItem">
            <div className="DropdownSubmenuItem-Inner">
                <h4>{data.name}</h4>
                <p>{`${data.stock} Products`}</p>
            </div>
        </button>
    )
}

export default DropdownSubmenuItem