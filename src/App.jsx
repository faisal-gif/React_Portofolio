import Navbar from "./assets/components/Navbar"
import Intro from "./assets/components/Intro";
import About from "./assets/components/About";
import Skill from "./assets/components/Skill";
import Portofolio from "./assets/components/Portofolio";
import Client  from "./assets/components/Client";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/footer";

function App() {
 
  return (
    <div>
    <Navbar />
    <Intro />
    <About />
    <Skill />
    <Portofolio />
    <Client />
    <Contact />
    <Footer />
    </div>
  );
}

export default App
