import React from "react";
import styles from "../Styles/Header.css";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header>
        <div className="Container-Header">
          <div className="Container-Color-Header">
            <span>StivenDev</span>
            <div className="Header-Container">
              <div className={`Container-Header-selected ${isOpen && "open"}`}>
                <ul>
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#Skills">Skills</a>
                  </li>
                  <li>
                    <a href="#Project">Projects</a>
                  </li>
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`Nav-Toggle ${isOpen && "open"}`}>
              <div onClick={() => setIsOpen(!isOpen)} className="Bar"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
