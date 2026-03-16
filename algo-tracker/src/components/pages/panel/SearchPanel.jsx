function SearchPanel({dataType, arrayData, searchTarget, setSearchTarget, searchResult, handleSearch}) {
    return(
        <div>
            <div>
                <p>Array: {arrayData.join(", ")}</p>
                <input
                    type={dataType}
                    value={searchTarget}
                    onChange={(e) => setSearchTarget(e.target.value)}
                />
                <div>
                    <button onClick={() => handleSearch("linear")}>Linear Search</button>
                    <button onClick={() => handleSearch("binary")}>Binary Search</button>
                </div>
            {searchResult !== null && (
                <p>{searchResult === -1 ? "Not found" : `Found at index ${searchResult}`}</p>
            )}
            </div>
        </div>
    )
}
export default SearchPanel