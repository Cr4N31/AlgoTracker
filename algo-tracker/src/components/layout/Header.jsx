import TrackerIcon from "../../assets/tracker.svg"

function Header(){
    return(
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
        >
            <div className="p-4 flex items-center gap-3">
                <img className="w-8 md:w-10" src={TrackerIcon} alt="Tracker"/>
                <p className="text-white/90 text-2xl md:text-3xl font-bold tracking-tight">
                    Algo<span className="text-white/50 font-light">Tracker</span>
                </p>
            </div>
        </header>
    )
}
export default Header