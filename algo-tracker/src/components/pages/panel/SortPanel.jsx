function SortPanel({dataType , arrayData, handleSort}) {
    return(
        <div>
            <p>Array: {arrayData.join(".")}</p>
            <div>
                <div>
                    <button onClick={() => handleSort("selection")}>Selection</button>
                    <button onClick={() => handleSort("insertion")}>Insertion</button>
                </div>
               
            </div>
        </div>
    )
}
export default SortPanel