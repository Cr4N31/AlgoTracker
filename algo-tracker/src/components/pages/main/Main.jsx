import FormInput from "../form/FormInput"
function Main() {
    return(
        <main>
            <div className="flex mt-24 justify-center items-center flex-col">
                <h1 className="font-bold text-6xl transition-all duration-350 ease-in hover:text-[#605856] text-[#FBFCFF] mb-6">Data Visualizer</h1>
                <FormInput/>
            </div>

        </main>
    )
}
export default Main