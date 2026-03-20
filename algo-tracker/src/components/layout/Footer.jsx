export default function Footer(){
    return(
        <footer className="w-full mt-12 font-semibold p-4 flex justify-center item-center relative bottom-0 left-0 right-0">
            <p>&copy; {new Date().getFullYear()} AlgoTracker-Data Visualizer </p>
        </footer>
    )
}