function SearchTab({ dataType, arrayData, searchTarget, setSearchTarget, searchSteps, searchCurrentStep, setSearchCurrentStep, searchResult, searchTime, lastSearchUsed, isSorted, handleSearch, error }){

    const bigO = { linear: "O(n)", binary: "O(log n)" }
    const glassCard = "w-full backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6"
    const glassCardStyle = { boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }

    return(
        <div className="flex flex-col items-center text-center gap-6">

            <div className={glassCard} style={glassCardStyle}>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">
                    {isSorted ? "Sorted Array" : "Unsorted Array"}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {arrayData.length > 0
                        ? arrayData.map((value, index) => (
                            <span key={index}
                                className="backdrop-blur-sm bg-white/15 border border-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold"
                                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}
                            >
                                {value}
                            </span>
                        ))
                        : <p className="text-white/30 text-sm">No data yet — add some in the Data tab</p>
                    }
                </div>
                {!isSorted && arrayData.length > 0 && (
                    <p className="text-amber-300/60 text-xs mt-3">Array is unsorted — Binary Search is disabled until you sort in the Sort tab</p>
                )}
            </div>

            {arrayData.length > 0 && (
                <div className="flex w-full">
                    <input
                        className="flex-1 backdrop-blur-md bg-white/10 border border-white/15 border-r-0 p-3 px-5 rounded-l-full text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all duration-200"
                        type={dataType}
                        value={searchTarget}
                        placeholder="Enter search target..."
                        onChange={(e) => setSearchTarget(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch("linear")}
                    />
                    <div className="flex border border-white/15 border-l-0 rounded-r-full overflow-hidden backdrop-blur-md">
                        <button
                            className={`px-4 py-3 font-semibold text-sm transition-all duration-200
                                ${lastSearchUsed === "linear" ? "bg-white/20 text-white" : "bg-white/5 text-white/60 hover:bg-white/15 hover:text-white"}`}
                            onClick={() => handleSearch("linear")}
                        >Linear</button>
                        <div className="w-px bg-white/15"/>
                        <button
                            className={`px-4 py-3 font-semibold text-sm transition-all duration-200
                                ${lastSearchUsed === "binary" ? "bg-white/20 text-white" : "bg-white/5 text-white/60 hover:bg-white/15 hover:text-white"}
                                disabled:opacity-25 disabled:cursor-not-allowed`}
                            onClick={() => handleSearch("binary")}
                            disabled={!isSorted}
                        >Binary</button>
                    </div>
                </div>
            )}

            {error && <p className="text-rose-300 text-sm font-medium">{error}</p>}

            {searchResult !== null && searchSteps.length > 0 && (
                <>
                    <div className={glassCard} style={glassCardStyle}>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-3">Result</p>
                        <p className={`text-xl font-bold mb-4 ${searchResult === -1 ? "text-rose-300" : "text-emerald-300"}`}>
                            {searchResult === -1 ? "Not Found" : `Found at index ${searchResult}`}
                        </p>
                        <div className="flex justify-center gap-6 text-sm flex-wrap">
                            <p className="text-white/40">Algorithm: <span className="text-white font-bold capitalize">{lastSearchUsed} Search</span></p>
                            <p className="text-white/40">Time: <span className="text-white font-bold">{searchTime}ms</span></p>
                            <p className="text-white/40">Complexity: <span className="text-white font-bold">{bigO[lastSearchUsed]}</span></p>
                        </div>
                    </div>

                    <div className={glassCard} style={glassCardStyle}>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">Step Visualizer</p>
                        <p className="text-white/40 text-sm mb-4">
                            Step <span className="font-bold text-white">{searchCurrentStep + 1}</span> of {searchSteps.length}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {searchSteps[searchCurrentStep].array.map((value, index) => {
                                const step = searchSteps[searchCurrentStep]
                                const isChecking = lastSearchUsed === "linear" && index === step.checking
                                const isFound = lastSearchUsed === "linear" && step.found && index === step.checking
                                const isMiddle = lastSearchUsed === "binary" && index === step.middle
                                const isInRange = lastSearchUsed === "binary" && index >= step.left && index <= step.right
                                const isBinaryFound = lastSearchUsed === "binary" && step.found && index === step.middle
                                return (
                                    <span key={index}
                                        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-200 border
                                            ${isFound || isBinaryFound
                                                ? "bg-emerald-400/25 border-emerald-400/40 text-emerald-300"
                                                : isChecking || isMiddle
                                                    ? "bg-amber-400/25 border-amber-400/40 text-amber-300"
                                                    : isInRange
                                                        ? "bg-white/20 border-white/25 text-white"
                                                        : "bg-white/5 border-white/10 text-white/40"
                                            }`}
                                        style={{
                                            boxShadow: isFound || isBinaryFound ? "0 0 10px rgba(52,211,153,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                                                : isChecking || isMiddle ? "0 0 10px rgba(251,191,36,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                                                : "inset 0 1px 0 rgba(255,255,255,0.1)"
                                        }}
                                    >
                                        {value}
                                    </span>
                                )
                            })}
                        </div>

                        {lastSearchUsed === "binary" && (
                            <div className="flex justify-center gap-6 text-xs text-white/30 mb-4">
                                <span>Left: <span className="font-bold text-white/60">{searchSteps[searchCurrentStep].left}</span></span>
                                <span>Middle: <span className="font-bold text-amber-300">{searchSteps[searchCurrentStep].middle}</span></span>
                                <span>Right: <span className="font-bold text-white/60">{searchSteps[searchCurrentStep].right}</span></span>
                            </div>
                        )}

                        <div className="flex justify-center gap-4 text-xs text-white/30 mb-4 flex-wrap">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-400/50 inline-block"/>Found</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-400/50 inline-block"/>Checking</span>
                            {lastSearchUsed === "binary" && <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-white/25 inline-block"/>In Range</span>}
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-white/10 inline-block"/>Out of Range</span>
                        </div>

                        <div className="flex justify-center gap-10">
                            <button
                                className="text-2xl text-white/50 disabled:opacity-20 hover:text-white hover:scale-125 transition-all duration-200"
                                onClick={() => setSearchCurrentStep(searchCurrentStep - 1)}
                                disabled={searchCurrentStep === 0}
                            >&lt;</button>
                            <button
                                className="text-2xl text-white/50 disabled:opacity-20 hover:text-white hover:scale-125 transition-all duration-200"
                                onClick={() => setSearchCurrentStep(searchCurrentStep + 1)}
                                disabled={searchCurrentStep === searchSteps.length - 1}
                            >&gt;</button>
                        </div>
                    </div>
                </>
            )}

            {arrayData.length > 0 && searchResult === null && (
                <p className="text-white/30 text-sm">Enter a value and pick a search algorithm above</p>
            )}
        </div>
    )
}
export default SearchTab