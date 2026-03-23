export default function Footer(){
    return(
        <footer className="w-full mt-12 p-6 flex justify-center items-center border-t border-white/10 backdrop-blur-md bg-white/5">
            <p className="text-white/30 text-sm font-medium">
                &copy; {new Date().getFullYear()} AlgoTracker — Data Visualizer
            </p>
        </footer>
    )
}