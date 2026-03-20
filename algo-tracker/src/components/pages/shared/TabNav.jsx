function TabNav({ activeTab, setActiveTab }){
    const tabs = ["data", "sort", "search", "graph"]

    return(
        <div className="flex flex-row gap-2 bg-white rounded-full shadow-sm p-1">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ease-in-out
                        ${activeTab === tab 
                            ? "bg-[#274156] text-[#D0CCD0]" 
                            : "bg-transparent text-[#274156] hover:bg-[#274156]/10"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}
export default TabNav