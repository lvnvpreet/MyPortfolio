import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Skils from "./components/Skils/Skils"


function App() {
  

  return (
   
    <div className="bg-[#54f0e8] h-auto w-full overflow-hidden">
      <Navbar /> 
      <Home />
      <AboutMe />
      <Services />
      <Skils />
      <ContactMe />
      <Footer />

    </div>
   
  )
}

export default App
