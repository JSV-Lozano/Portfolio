import { Header } from "./components/Header";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Layaout from "./components/Layaout";

function App() {
  return (
    <div className="App">
      <Layaout>
        <Header />
        <AboutMe />
        <Skill />
        <Projects />
      </Layaout>
    </div>
  );
}

export default App;
