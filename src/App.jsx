import {Header} from "./components/Header";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Skill } from "./components/Skill";

function App() {
  return <div className="App">
    <Header/>
    <AboutMe/>
    <Skill/>
  </div>;
}

export default App;
