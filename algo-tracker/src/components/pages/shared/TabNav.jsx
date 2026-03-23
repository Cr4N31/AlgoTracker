function TabNav({ activeTab, setActiveTab }){
    const tabs = ["data", "sort", "search", "graph"]
    return(
        <div className="flex flex-row gap-1 backdrop-blur-md bg-white/10 border border-white/15 rounded-full p-1"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }}
        >
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ease-in-out text-sm
                        ${activeTab === tab
                            ? "bg-white/20 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/10"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}
export default TabNav