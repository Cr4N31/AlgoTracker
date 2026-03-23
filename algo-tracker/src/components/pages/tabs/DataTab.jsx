function DataTab({ dataType, setDataType, inputValue, setInputValue, originalData, error, handleAdd, clearArray }){

    const glassCard = "w-full backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6"
    const glassCardStyle = { boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }

    return(
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">

            <div className={glassCard} style={glassCardStyle}>
                <h2 className="text-white text-2xl font-bold mb-6">Choose Data Type</h2>
                <div className="flex gap-6 justify-center" >
                    {["number", "text"].map((type) => (
                        <div key={type} className="flex items-center gap-2 cursor-pointer" onClick={() => setDataType(type)}>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                                ${dataType === type ? "border-white/80 bg-white/30" : "border-white/30 bg-transparent"}`}
                            >
                                {dataType === type && <div className="w-2 h-2 rounded-full bg-white"/>}
                            </div>
                            <label className="text-white/80 font-semibold capitalize cursor-pointer">{type}</label>
                        </div>
                    ))}
                </div>
            </div>

            {dataType && (
                <div className="flex w-full" data-aos="fade-up">
                    <input
                        className="flex-1 backdrop-blur-md bg-white/10 border border-white/15 border-r-0 p-3 px-5 rounded-l-full text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all duration-200"
                        type={dataType}
                        value={inputValue}
                        placeholder={`Enter a ${dataType}...`}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    />
                    <button
                        className="backdrop-blur-md bg-white/10 border border-white/15 border-l-0 px-6 py-3 rounded-r-full font-semibold text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </div>
            )}

            {error && <p className="text-rose-300 text-sm font-medium">{error}</p>}

            {originalData.length > 0 && (
                <div className={glassCard} style={glassCardStyle} data-aos="fade-up">
                    <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">Collected Data</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {originalData.map((value, index) => (
                            <span key={index}
                                className="backdrop-blur-sm bg-white/15 border border-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold"
                                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                    <p className="text-white/30 text-xs mt-4">
                        {originalData.length} item{originalData.length !== 1 ? "s" : ""} collected
                    </p>
                </div>
            )}

            {originalData.length > 0 && (
                <button
                    className="text-sm text-rose-300/80 border border-rose-300/30 px-6 py-2 rounded-full hover:bg-rose-300/15 hover:text-rose-200 transition-all duration-200 backdrop-blur-sm"
                    onClick={clearArray}
                >
                    Clear All
                </button>
            )}
        </div>
    )
}
export default DataTab