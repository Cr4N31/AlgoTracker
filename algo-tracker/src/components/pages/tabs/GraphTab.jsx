import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function GraphTab({ originalData, lastSortUsed, lastSearchUsed, sortTime, searchTime }){

    const n = originalData.length || 10

    function generateSortPoints(maxN){
        const points = []
        for(let i = 1; i <= maxN; i++){
            points.push({
                n: i,
                "Selection Sort": i * i,
                "Insertion Sort": i * (i - 1) / 2,
            })
        }
        return points
    }

    function generateSearchPoints(maxN){
        const points = []
        for(let i = 1; i <= maxN; i++){
            points.push({
                n: i,
                "Linear Search": i,
                "Binary Search": parseFloat(Math.log2(i).toFixed(2)),
            })
        }
        return points
    }

    const sortData = generateSortPoints(Math.max(n * 2, 20))
    const searchData = generateSearchPoints(Math.max(n * 2, 20))

    const cardClass = "w-full bg-[#00000] rounded-2xl shadow-sm p-6"
    const labelClass = "text-sm text-gray-400 mb-3 font-medium uppercase tracking-widest"

    return(
        <div className="flex flex-col items-center text-center gap-6">

            {/* Sort Graph */}
            <div className={cardClass} data-aos="fade-up">
                <p className={labelClass}>Sort Complexity</p>
                <p className="text-xs text-gray-400 mb-6">
                    Selection Sort runs at <span className="font-bold text-[#274156]">O(n²)</span> — Insertion Sort runs faster in practice at <span className="font-bold text-[#605856]">O(n(n-1)/2)</span>
                </p>

                {lastSortUsed && (
                    <div className="flex justify-center gap-6 text-sm mb-6">
                        <p className="text-gray-400">
                            Last Used: <span className="text-[#274156] font-bold capitalize">{lastSortUsed} Sort</span>
                        </p>
                        <p className="text-gray-400">
                            Time Taken: <span className="text-[#274156] font-bold">{sortTime}ms</span>
                        </p>
                        <p className="text-gray-400">
                            Data Size: <span className="text-[#274156] font-bold">{n}</span>
                        </p>
                    </div>
                )}

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sortData} margin={{ top: 5, right: 20, left: 0, bottom: 25 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                        <XAxis
                            dataKey="n"
                            label={{ value: "n (elements)", position: "insideBottom", offset: -2, fontSize: 11, fill: "#9ca3af" }}
                            tick={{ fontSize: 11, fill: "#9ca3af" }}
                        />
                        <YAxis
                            label={{ value: "operations", angle: -90, position: "insideLeft", fontSize: 11, fill: "#9ca3af" }}
                            tick={{ fontSize: 11, fill: "#9ca3af" }}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                            formatter={(value, name) => [value, name]}
                            labelFormatter={(label) => `n = ${label}`}
                        />
                        <Legend verticalAlign="top" height={36}/>
                        <Line
                            type="monotone"
                            dataKey="Selection Sort"
                            stroke="#7eb8d4"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Insertion Sort"
                            stroke="#c4a59e"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                        {n > 0 && (
                            <Line
                                type="monotone"
                                dataKey={(entry) => entry.n === n ? entry["Selection Sort"] : null}
                                stroke="#ef4444"
                                strokeWidth={0}
                                dot={{ r: 6, fill: "#ef4444" }}
                                name="Your data size"
                                legendType="circle"
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Search Graph */}
            <div className={cardClass}>
                <p className={labelClass}>Search Complexity</p>
                <p className="text-xs text-gray-400 mb-6">
                    Linear Search runs at <span className="font-bold text-[#605856]">O(n)</span> — Binary Search runs at <span className="font-bold text-[#274156]">O(log n)</span>
                </p>

                {lastSearchUsed && (
                    <div className="flex justify-center gap-6 text-sm mb-6">
                        <p className="text-gray-400">
                            Last Used: <span className="text-[#274156] font-bold capitalize">{lastSearchUsed} Search</span>
                        </p>
                        <p className="text-gray-400">
                            Time Taken: <span className="text-[#274156] font-bold">{searchTime}ms</span>
                        </p>
                        <p className="text-gray-400">
                            Data Size: <span className="text-[#274156] font-bold">{n}</span>
                        </p>
                    </div>
                )}

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={searchData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                        <XAxis
                            dataKey="n"
                            label={{ value: "n (elements)", position: "insideBottom", offset: -2, fontSize: 11, fill: "#9ca3af" }}
                            tick={{ fontSize: 11, fill: "#9ca3af" }}
                        />
                        <YAxis
                            label={{ value: "operations", angle: -90, position: "insideLeft", fontSize: 11, fill: "#9ca3af" }}
                            tick={{ fontSize: 11, fill: "#9ca3af" }}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                            formatter={(value, name) => [value, name]}
                            labelFormatter={(label) => `n = ${label}`}
                        />
                        <Legend verticalAlign="top" height={36}/>
                        <Line
                            type="monotone"
                            dataKey="Linear Search"
                            stroke="#c4a59e"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Binary Search"
                            stroke="#7eb8d4"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                        {n > 0 && (
                            <Line
                                type="monotone"
                                dataKey={(entry) => entry.n === n ? entry["Linear Search"] : null}
                                stroke="#ef4444"
                                strokeWidth={0}
                                dot={{ r: 6, fill: "#ef4444" }}
                                name="Your data size"
                                legendType="circle"
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}
export default GraphTab