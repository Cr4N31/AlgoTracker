function SortTab({ originalData, arrayData, lastSortUsed, sortSteps, sortCurrentStep, setSortCurrentStep, sortTime, isSorted, handleSort }){
    
    const bigO = {
        selection: "O(n²)",
        insertion: "O(n²)"
    }

    return(
        <div className="flex flex-col items-center text-center gap-6">

            {/* Original data */}
            <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                    Original Data
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {originalData.length > 0 
                        ? originalData.map((value, index) => (
                            <span
                                key={index}
                                className="bg-[#605856] text-white px-4 py-1 rounded-full text-sm font-semibold"
                            >
                                {value}
                            </span>
                        ))
                        : <p className="text-gray-400 text-sm">No data yet — add some in the Data tab</p>
                    }
                </div>
            </div>

            {/* Sort buttons */}
            <div className="flex gap-4 justify-center">
                <button
                    className={`border-2 border-[#274156] px-6 py-2 rounded-full font-semibold transition-all duration-200 
                        ${lastSortUsed === "selection" 
                            ? "bg-[#274156] text-white" 
                            : "text-[#274156] hover:bg-[#274156] hover:text-white"
                        }`}
                    onClick={() => handleSort("selection")}
                >
                    Selection Sort
                </button>
                <button
                    className={`border-2 border-[#274156] px-6 py-2 rounded-full font-semibold transition-all duration-200 
                        ${lastSortUsed === "insertion" 
                            ? "bg-[#274156] text-white" 
                            : "text-[#274156] hover:bg-[#274156] hover:text-white"
                        }`}
                    onClick={() => handleSort("insertion")}
                >
                    Insertion Sort
                </button>
            </div>

            {/* Sort result */}
            {isSorted && sortSteps.length > 0 && (
                <>
                    {/* Algorithm info */}
                    <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                        <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                            Result
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {sortSteps[sortSteps.length - 1].array.map((value, index) => (
                                <span
                                    key={index}
                                    className="bg-[#274156] text-white px-4 py-1 rounded-full text-sm font-semibold"
                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-6 text-sm mt-2">
                            <p className="text-gray-400">
                                Algorithm: <span className="text-[#274156] font-bold capitalize">{lastSortUsed} Sort</span>
                            </p>
                            <p className="text-gray-400">
                                Time: <span className="text-[#274156] font-bold">{sortTime}ms</span>
                            </p>
                            <p className="text-gray-400">
                                Complexity: <span className="text-[#274156] font-bold">{bigO[lastSortUsed]}</span>
                            </p>
                        </div>
                    </div>

                    {/* Step visualizer */}
                    <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                        <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                            Step Visualizer
                        </p>
                        <p className="text-sm text-gray-400 mb-4">
                            Step <span className="font-bold text-[#274156]">{sortCurrentStep + 1}</span> of {sortSteps.length}
                        </p>

                        {/* Array at current step */}
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {sortSteps[sortCurrentStep].array.map((value, index) => {
                                const isSortedZone = index <= sortSteps[sortCurrentStep].sortedUpTo
                                const isSwapped = index === sortSteps[sortCurrentStep].swappedIndex || index === sortSteps[sortCurrentStep].insertedAt

                                return (
                                    <span
                                        key={index}
                                        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-200
                                            ${isSwapped 
                                                ? "bg-green-500 text-white" 
                                                : isSortedZone 
                                                    ? "bg-[#274156] text-white" 
                                                    : "bg-gray-100 text-[#274156]"
                                            }`}
                                    >
                                        {value}
                                    </span>
                                )
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-4 text-xs text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"/>
                                Swapped
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-[#274156] inline-block"/>
                                Sorted
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-gray-100 inline-block"/>
                                Unsorted
                            </span>
                        </div>

                        {/* Prev / Next */}
                        <div className="flex justify-center gap-10">
                            <button
                                className="text-2xl text-[#274156] disabled:opacity-30 hover:scale-125 transition-all duration-200"
                                onClick={() => setSortCurrentStep(sortCurrentStep - 1)}
                                disabled={sortCurrentStep === 0}
                            >
                                &lt;
                            </button>
                            <button
                                className="text-2xl text-[#274156] disabled:opacity-30 hover:scale-125 transition-all duration-200"
                                onClick={() => setSortCurrentStep(sortCurrentStep + 1)}
                                disabled={sortCurrentStep === sortSteps.length - 1}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Empty state */}
            {!isSorted && originalData.length > 0 && (
                <p className="text-gray-400 text-sm">Pick a sort algorithm above to begin</p>
            )}

        </div>
    )
}
export default SortTab