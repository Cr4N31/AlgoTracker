import { useState } from 'react'
import PanelToggle from '../panel/PanelToggle';
import SearchPanel from '../panel/SearchPanel';
import SortPanel from '../panel/SortPanel';
import { selectionSort, insertionSort, linearSearch, binarySearch } from '../../../../../utils/trackCount'

function FormInput(){
    const [dataType, setDataType] = useState(null);
    const [toggle, setToggle] = useState("search");
    const [arrayData, setArrayData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchTarget, setSearchTarget] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState("");
    const [isSorted, setIsSorted] = useState("false")

    function handleAdd(){
        if(!inputValue) return
        const value = dataType === "number" ? Number(inputValue) : inputValue
        setArrayData([...arrayData, value])
        setInputValue("")
        setIsSorted(false)
    }

    function handleSort(type){
        const copy = [...arrayData]
        if(type === "selection") setArrayData(selectionSort(copy))
        if(type === "insertion") setArrayData(insertionSort(copy))
        setIsSorted(true)
    }

    function clearArray(){
        if (arrayData >= [","]){
            return setArrayData([])
        } else {
            return setError("Array field is already empty") 
        }
    }

    function handleSearch(type){
        const target = dataType === "number" ? Number(searchTarget) : searchTarget
        if(type === "linear") setSearchResult(linearSearch(arrayData, target))
        if(type === "binary") setSearchResult(binarySearch(arrayData, target))
        
    }

    return(
        <section>
            <div>
                <PanelToggle
                    toggle={toggle}
                    setToggle={setToggle}
                />
            </div>
            <div>
                {toggle && <h2>Choose Data Value Type to be {toggle}ed</h2>}
                <div>
                    <input
                        type="radio"
                        name="data_type"
                        value="number"
                        onClick={(e) => setDataType(e.target.value)}
                    />
                    <label>Number</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="data_type"
                        value="text"
                        onClick={(e) => setDataType(e.target.value)}
                    />
                    <label>Text</label>
                </div>
            </div>

            {dataType && 
            <div>
                <input
                    type={dataType}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            }

            <div>
                <p>Data: {arrayData.join(", ")}</p>
                {error && <p>{error}</p>}
                <button onClick={clearArray}>Clear Array</button>
            </div>

            <div>
                {toggle === "search" ? (
                    <SearchPanel
                        dataType={dataType}
                        arrayData={arrayData}
                        searchTarget={searchTarget}
                        setSearchTarget={setSearchTarget}
                        searchResult={searchResult}
                        handleSearch={handleSearch}
                        isSorted={isSorted}
                    />
                ) : (
                    <SortPanel
                        dataType={dataType}
                        arrayData={arrayData}
                        handleSort={handleSort}
                    />
                )}
            </div>
          
        </section>
    )
}
export default FormInput