function DataTab({ dataType, setDataType, inputValue, setInputValue, originalData, error, handleAdd, clearArray }){
    return(
        <div className="flex flex-col items-center text-center gap-6">
            
            {/* Data type selection */}
            <div>
                <h2 className="text-[#274156] text-2xl font-bold mb-4">
                    Choose Data Type
                </h2>
                <div className="flex gap-6 justify-center">
                    {["number", "text"].map((type) => (
                        <div
                            key={type}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setDataType(type)}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 border-[#605856] flex items-center justify-center transition-all duration-200 ${dataType === type ? "bg-[#605856]" : "bg-transparent"}`}>
                                {dataType === type && <div className="w-2 h-2 rounded-full bg-[#F5F3F2]"/>}
                            </div>
                            <label className="text-[#605856] font-semibold capitalize cursor-pointer">
                                {type}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input */}
            {dataType && (
                <div className="flex">
                    <input
                        className="bg-[#274156] border-2 border-[#274156] w-64 md:w-96 p-2 px-4 rounded-l-full text-white placeholder:text-gray-300 focus:outline-none"
                        type={dataType}
                        value={inputValue}
                        placeholder={`Enter a ${dataType}...`}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    />
                    <button
                        className="bg-transparent border-2 border-l-0 border-[#274156] px-5 py-2 rounded-r-full font-semibold text-[#274156] transition-all duration-200 ease-in-out hover:bg-[#274156] hover:text-white"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </div>
            )}

            {/* Error */}
            {error && (
                <p className="text-red-400 font-medium">{error}</p>
            )}

            {/* Data display */}
            {originalData.length > 0 && (
                <div className="w-full bg-white rounded-2xl shadow-sm p-6">
                    <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest">
                        Collected Data
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {originalData.map((value, index) => (
                            <span
                                key={index}
                                className="bg-[#274156] text-white px-4 py-1 rounded-full text-sm font-semibold"
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4">
                        {originalData.length} item{originalData.length !== 1 ? "s" : ""} collected
                    </p>
                </div>
            )}

            {/* Clear */}
            {originalData.length > 0 && (
                <button
                    className="text-sm text-red-400 border border-red-400 px-6 py-1 rounded-full hover:bg-red-400 hover:text-white transition-all duration-200"
                    onClick={clearArray}
                >
                    Clear All
                </button>
            )}

        </div>
    )
}
export default DataTab