import Header from "./components/Header"
import MemeForm from "./components/MemeForm"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="page-container">
      <Header title="Meme Generator" />
      <MemeForm />
      <Footer />
    </div>
  )
}

export default App
