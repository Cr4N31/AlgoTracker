function SortTab({ originalData, arrayData, lastSortUsed, sortSteps, sortCurrentStep, setSortCurrentStep, sortTime, isSorted, handleSort }){

    const bigO = { selection: "O(n²)", insertion: "O(n²)" }
    const glassCard = "w-full backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6"
    const glassCardStyle = { boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }

    return(
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">

            <div className={glassCard} style={glassCardStyle}>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">Original Data</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {originalData.length > 0
                        ? originalData.map((value, index) => (
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
            </div>

            <div className="flex gap-4 justify-center">
                {["selection", "insertion"].map((type) => (
                    <button key={type}
                        onClick={() => handleSort(type)}
                        className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-200 border text-sm backdrop-blur-sm
                            ${lastSortUsed === type
                                ? "bg-white/20 border-white/30 text-white"
                                : "bg-white/5 border-white/15 text-white/60 hover:bg-white/15 hover:text-white"
                            }`}
                        style={lastSortUsed === type ? { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" } : {}}
                    >
                        {type} Sort
                    </button>
                ))}
            </div>

            {isSorted && sortSteps.length > 0 && (
                <>
                    <div className={glassCard} style={glassCardStyle} data-aos="fade-up">
                        <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">Result</p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {sortSteps[sortSteps.length - 1].array.map((value, index) => (
                                <span key={index}
                                    className="backdrop-blur-sm bg-white/20 border border-white/25 text-white px-4 py-1 rounded-full text-sm font-semibold"
                                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}
                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-6 text-sm flex-wrap">
                            <p className="text-white/40">Algorithm: <span className="text-white font-bold capitalize">{lastSortUsed} Sort</span></p>
                            <p className="text-white/40">Time: <span className="text-white font-bold">{sortTime}ms</span></p>
                            <p className="text-white/40">Complexity: <span className="text-white font-bold">{bigO[lastSortUsed]}</span></p>
                        </div>
                    </div>

                    <div className={glassCard} style={glassCardStyle}>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">Step Visualizer</p>
                        <p className="text-white/40 text-sm mb-4">
                            Step <span className="font-bold text-white">{sortCurrentStep + 1}</span> of {sortSteps.length}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {sortSteps[sortCurrentStep].array.map((value, index) => {
                                const isSortedZone = index <= sortSteps[sortCurrentStep].sortedUpTo
                                const isSwapped = index === sortSteps[sortCurrentStep].swappedIndex || index === sortSteps[sortCurrentStep].insertedAt
                                return (
                                    <span key={index}
                                        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-200 border
                                            ${isSwapped
                                                ? "bg-emerald-400/25 border-emerald-400/40 text-emerald-300"
                                                : isSortedZone
                                                    ? "bg-white/20 border-white/25 text-white"
                                                    : "bg-white/5 border-white/10 text-white/40"
                                            }`}
                                        style={{ boxShadow: isSwapped ? "0 0 10px rgba(52,211,153,0.25), inset 0 1px 0 rgba(255,255,255,0.1)" : "inset 0 1px 0 rgba(255,255,255,0.1)" }}
                                    >
                                        {value}
                                    </span>
                                )
                            })}
                        </div>

                        <div className="flex justify-center gap-4 text-xs text-white/30 mb-4 flex-wrap">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-400/50 inline-block"/>Swapped</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-white/25 inline-block"/>Sorted</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-white/10 inline-block"/>Unsorted</span>
                        </div>

                        <div className="flex justify-center gap-10">
                            <button
                                className="text-2xl text-white/50 disabled:opacity-20 hover:text-white hover:scale-125 transition-all duration-200"
                                onClick={() => setSortCurrentStep(sortCurrentStep - 1)}
                                disabled={sortCurrentStep === 0}
                            >&lt;</button>
                            <button
                                className="text-2xl text-white/50 disabled:opacity-20 hover:text-white hover:scale-125 transition-all duration-200"
                                onClick={() => setSortCurrentStep(sortCurrentStep + 1)}
                                disabled={sortCurrentStep === sortSteps.length - 1}
                            >&gt;</button>
                        </div>
                    </div>
                </>
            )}

            {!isSorted && originalData.length > 0 && (
                <p className="text-white/30 text-sm">Pick a sort algorithm above to begin</p>
            )}
        </div>
    )
}
export default SortTab