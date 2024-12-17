import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testinomials from "./components/Testinomials"
import { ToastContainer } from 'react-toastify';

function App() {
 
  return (
     <>
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testinomials/>
    <Contact/>
    <Footer />
     </>
  )
}

export default App
