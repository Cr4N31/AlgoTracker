function SearchTab({ dataType, arrayData, searchTarget, setSearchTarget, searchSteps, searchCurrentStep, setSearchCurrentStep, searchResult, searchTime, lastSearchUsed, isSorted, handleSearch, error }){

    const bigO = {
        linear: "O(n)",
        binary: "O(log n)"
    }

    return(
        <div className="flex flex-col items-center text-center gap-6">

            {/* Current array */}
            <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                    {isSorted ? "Sorted Array" : "Unsorted Array"}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {arrayData.length > 0
                        ? arrayData.map((value, index) => (
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
                {!isSorted && arrayData.length > 0 && (
                    <p className="text-xs text-amber-400 mt-3">
                        Array is unsorted — Binary Search is disabled until you sort in the Sort tab
                    </p>
                )}
            </div>

            {/* Search input */}
            {arrayData.length > 0 && (
                <div className="flex">
                    <input
                        className="bg-[#274156] border-2 border-[#274156] w-64 md:w-96 p-2 px-4 rounded-l-full text-white placeholder:text-gray-300 focus:outline-none"
                        type={dataType}
                        value={searchTarget}
                        placeholder="Enter search target..."
                        onChange={(e) => setSearchTarget(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch("linear")}
                    />
                    {error && (
                        <p className="text-red-400 font-medium text-sm">{error}</p>
                    )}
                    <div className="flex border-2 border-l-0 border-[#274156] rounded-r-full overflow-hidden">
                        <button
                            className={`px-4 py-2 font-semibold transition-all duration-200
                                ${lastSearchUsed === "linear"
                                    ? "bg-[#274156] text-white"
                                    : "text-[#274156] hover:bg-[#274156] hover:text-white"
                                }`}
                            onClick={() => handleSearch("linear")}
                        >
                            Linear
                        </button>
                        <div className="w-px bg-[#274156]"/>
                        <button
                            className={`px-4 py-2 font-semibold transition-all duration-200
                                ${lastSearchUsed === "binary"
                                    ? "bg-[#274156] text-white"
                                    : "text-[#274156] hover:bg-[#274156] hover:text-white"
                                } disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#274156]`}
                            onClick={() => handleSearch("binary")}
                            disabled={!isSorted}
                        >
                            Binary
                        </button>
                    </div>
                </div>
            )}

            {/* Search result */}
            {searchResult !== null && searchSteps.length > 0 && (
                <>
                    {/* Result info */}
                    <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                        <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                            Result
                        </p>
                        <p className={`text-xl font-bold mb-4 ${searchResult === -1 ? "text-red-400" : "text-green-500"}`}>
                            {searchResult === -1 ? "Not Found" : `Found at index ${searchResult}`}
                        </p>
                        <div className="flex justify-center gap-6 text-sm">
                            <p className="text-gray-400">
                                Algorithm: <span className="text-[#274156] font-bold capitalize">{lastSearchUsed} Search</span>
                            </p>
                            <p className="text-gray-400">
                                Time: <span className="text-[#274156] font-bold">{searchTime}ms</span>
                            </p>
                            <p className="text-gray-400">
                                Complexity: <span className="text-[#274156] font-bold">{bigO[lastSearchUsed]}</span>
                            </p>
                        </div>
                    </div>

                    {/* Step visualizer */}
                    <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                        <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                            Step Visualizer
                        </p>
                        <p className="text-sm text-gray-400 mb-4">
                            Step <span className="font-bold text-[#274156]">{searchCurrentStep + 1}</span> of {searchSteps.length}
                        </p>

                        {/* Array at current step */}
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {searchSteps[searchCurrentStep].array.map((value, index) => {
                                const step = searchSteps[searchCurrentStep]

                                // linear search highlighting
                                const isChecking = lastSearchUsed === "linear" && index === step.checking
                                const isFound = lastSearchUsed === "linear" && step.found && index === step.checking

                                // binary search highlighting
                                const isMiddle = lastSearchUsed === "binary" && index === step.middle
                                const isInRange = lastSearchUsed === "binary" && index >= step.left && index <= step.right
                                const isBinaryFound = lastSearchUsed === "binary" && step.found && index === step.middle

                                return (
                                    <span
                                        key={index}
                                        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-200
                                            ${isFound || isBinaryFound
                                                ? "bg-green-500 text-white"
                                                : isChecking || isMiddle
                                                    ? "bg-amber-400 text-white"
                                                    : isInRange
                                                        ? "bg-[#274156] text-white"
                                                        : "bg-gray-100 text-[#274156]"
                                            }`}
                                    >
                                        {value}
                                    </span>
                                )
                            })}
                        </div>

                        {/* Binary search boundaries */}
                        {lastSearchUsed === "binary" && (
                            <div className="flex justify-center gap-6 text-xs text-gray-400 mb-4">
                                <span>Left: <span className="font-bold text-[#274156]">{searchSteps[searchCurrentStep].left}</span></span>
                                <span>Middle: <span className="font-bold text-amber-400">{searchSteps[searchCurrentStep].middle}</span></span>
                                <span>Right: <span className="font-bold text-[#274156]">{searchSteps[searchCurrentStep].right}</span></span>
                            </div>
                        )}

                        {/* Legend */}
                        <div className="flex justify-center gap-4 text-xs text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"/>
                                Found
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"/>
                                Checking
                            </span>
                            {lastSearchUsed === "binary" && (
                                <span className="flex items-center gap-1">
                                    <span className="w-3 h-3 rounded-full bg-[#274156] inline-block"/>
                                    In Range
                                </span>
                            )}
                            <span className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-gray-100 inline-block"/>
                                Out of Range
                            </span>
                        </div>

                        {/* Prev / Next */}
                        <div className="flex justify-center gap-10">
                            <button
                                className="text-2xl text-[#274156] disabled:opacity-30 hover:scale-125 transition-all duration-200"
                                onClick={() => setSearchCurrentStep(searchCurrentStep - 1)}
                                disabled={searchCurrentStep === 0}
                            >
                                &lt;
                            </button>
                            <button
                                className="text-2xl text-[#274156] disabled:opacity-30 hover:scale-125 transition-all duration-200"
                                onClick={() => setSearchCurrentStep(searchCurrentStep + 1)}
                                disabled={searchCurrentStep === searchSteps.length - 1}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Empty state */}
            {arrayData.length > 0 && searchResult === null && (
                <p className="text-gray-400 text-sm">Enter a value and pick a search algorithm above</p>
            )}

        </div>
    )
}
export default SearchTab