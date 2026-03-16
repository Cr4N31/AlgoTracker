function PanelToggle({toggle, setToggle}){
    return(
        <div>
            <button
                type="button"
                value="Sort"
                onClick={() => setToggle("sort")}
            >
            Sort
            </button>
            <button
                type="button"
                value="Search"
                onClick={() => setToggle("search")}
            >
            Search
            </button>
        </div>
    )
}
export default PanelToggle