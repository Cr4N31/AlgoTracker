import { useState } from 'react'
import TabNav from '../shared/TabNav'
import DataTab from '../tabs/DataTab'
import SortTab from '../tabs/SortTab'
import SearchTab from '../tabs/SearchTab'
import GraphTab from '../tabs/GraphTab'
import { 
    selectionSortSteps, 
    insertionSortSteps, 
    linearSearchSteps, 
    binarySearchSteps 
} from '../../../../../utils/trackCount'

function FormInput(){
    // Data
    const [originalData, setOriginalData] = useState([])
    const [arrayData, setArrayData] = useState([])
    const [dataType, setDataType] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState("")

    // Navigation
    const [activeTab, setActiveTab] = useState("data")

    // Sort
    const [lastSortUsed, setLastSortUsed] = useState(null)
    const [sortSteps, setSortSteps] = useState([])
    const [sortCurrentStep, setSortCurrentStep] = useState(0)
    const [sortTime, setSortTime] = useState(null)
    const [isSorted, setIsSorted] = useState(false)

    // Search
    const [lastSearchUsed, setLastSearchUsed] = useState(null)
    const [searchSteps, setSearchSteps] = useState([])
    const [searchCurrentStep, setSearchCurrentStep] = useState(0)
    const [searchTime, setSearchTime] = useState(null)
    const [searchTarget, setSearchTarget] = useState("")
    const [searchResult, setSearchResult] = useState(null)

    function handleAdd(){
        if(!inputValue){
            setError("Input field is empty")
            return
        }
        const value = dataType === "number" ? Number(inputValue) : inputValue
        setOriginalData([...originalData, value])
        setArrayData([...arrayData, value])
        setInputValue("")
        setIsSorted(false)
        setError("")
    }

    function handleSort(type){
        // always sort from original
        const copy = [...originalData]

        const start = performance.now()
        const steps = type === "selection" 
            ? selectionSortSteps(copy) 
            : insertionSortSteps(copy)
        const end = performance.now()

        setSortSteps(steps)
        setSortCurrentStep(0)
        setArrayData(steps[steps.length - 1].array)
        setLastSortUsed(type)
        setSortTime((end - start).toFixed(4))
        setIsSorted(true)
    }

    function handleSearch(type){
        const target = dataType === "number" ? Number(searchTarget) : searchTarget

        const start = performance.now()
        const steps = type === "linear"
            ? linearSearchSteps(arrayData, target)
            : binarySearchSteps(arrayData, target)
        const end = performance.now()

        setSearchSteps(steps)
        setSearchCurrentStep(0)
        setLastSearchUsed(type)
        setSearchTime((end - start).toFixed(4))
        setSearchResult(steps[steps.length - 1].result)
        setError("")
    }

    function clearArray(){
        if(arrayData.length > 0){
            setOriginalData([])
            setArrayData([])
            setSortSteps([])
            setSearchSteps([])
            setSortCurrentStep(0)
            setSearchCurrentStep(0)
            setLastSortUsed(null)
            setLastSearchUsed(null)
            setSortTime(null)
            setSearchTime(null)
            setSearchResult(null)
            setSearchTarget("")
            setIsSorted(false)
            setError("")
        } else {
            setError("Array is already empty")
        }
    }

    const tabProps = {
        data: {
            dataType, setDataType,
            inputValue, setInputValue,
            originalData,
            error,
            handleAdd,
            clearArray
        },
        sort: {
            originalData,
            arrayData,
            lastSortUsed,
            sortSteps,
            sortCurrentStep,
            setSortCurrentStep,
            sortTime,
            isSorted,
            handleSort
        },
        search: {
            dataType,
            arrayData,
            searchTarget, setSearchTarget,
            searchSteps,
            searchCurrentStep,
            setSearchCurrentStep,
            searchResult,
            searchTime,
            lastSearchUsed,
            isSorted,
            handleSearch,
            error
        },
        graph: {
            originalData,
            lastSortUsed,
            lastSearchUsed,
            sortTime,
            searchTime,
            sortStepCount: sortSteps.length,     
            searchStepCount: searchSteps.length    
        }
    }

    return(
        <section className="min-h-screen bg-[#F5F3F2] flex flex-col items-center pt-12 px-4">
            <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-8 w-full max-w-2xl">
                {activeTab === "data" && <DataTab {...tabProps.data} />}
                {activeTab === "sort" && <SortTab {...tabProps.sort} />}
                {activeTab === "search" && <SearchTab {...tabProps.search} />}
                {activeTab === "graph" && <GraphTab {...tabProps.graph} />}
            </div>
        </section>
    )
}
export default FormInput