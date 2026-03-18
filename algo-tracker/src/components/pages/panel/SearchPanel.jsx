function SearchPanel({dataType, arrayData, searchTarget, setSearchTarget, searchResult, handleSearch, isSorted, error}) {
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
                    <button onClick={() => handleSearch("binary")} disabled={!isSorted}>Binary Search</button>
                </div>
           {error && <p>{error}</p>}
            {searchResult !== null && !error && (
                <p>{searchResult === -1 ? "Not found" : `Found at index ${searchResult}`}</p>
            )}
            </div>
        </div>
    )
}
export default SearchPanel