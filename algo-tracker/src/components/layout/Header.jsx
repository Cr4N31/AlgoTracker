import TrackerIcon from "../../assets/tracker.svg"
function Header(){
    return(
        <header className="bg-[#D0CCD0] fixed top-0 left-0 right-0">
            <div className="p-4 text-left flex items-center">
                <img className="w-8 md:w-12" src={TrackerIcon} alt="Tracker"/>
                <p className="text-[#605856] text-3xl md:text-4xl font-bold">AlgoTracker</p>
            </div>
        </header>
    )
}
export default Header