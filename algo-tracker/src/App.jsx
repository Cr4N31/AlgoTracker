import Header from './components/layout/Header'
import Main from "./components/pages/main/Main"
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'
      style={{ background: "linear-gradient(135deg, #1a2f3f 0%, #274156 40%, #3d2b2a 70%, #605856 100%)" }}
    >
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App