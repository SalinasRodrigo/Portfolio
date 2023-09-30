import "./App.css";
import { ImageSlider } from "./components/ImageSlider";
import { CSSLogo } from "./icons/CSSLogo";
import { DjangoLogo } from "./icons/DjangoLogo";
import { FlaskLogo } from "./icons/FlaskLogo";
import { HTMLLogo } from "./icons/HTMLLogo";
import { JSLogo } from "./icons/JSLogo";
import { MySQLLogo } from "./icons/MySQLLogo";
import { PostgresSQLLogo } from "./icons/PostgreSQLLogo";
import { PythonLogo } from "./icons/PythonLogo";
import { ReactLogo } from "./icons/ReactLogo";

import {cv} from "./mooks/cv.json"
import {kibo} from "./mooks/slider.json"

function App() {
  return (
    <>
      <header className="intro-body">
        <h1>Rodrigo Salinas</h1>
        <p>Desarrollador Web Full Stack</p>
      </header>
      <main>
        <div className="personal-speach-body">
          <div>
            <h2>¿Quien Soy?</h2>
            <p>{cv.personaleSpeech}</p>
          </div>
          <div className="picture-container"></div>
        </div>
        <div className="skills-body">
          <h2>Mis Habilidades</h2>
          <div className="skills">
            <div className="development">
              <h3>Tecnologías</h3>
              <ul className="logos">
                <li>
                  <div className="logo"><PythonLogo/></div>
                  <small>Python</small>  
                </li>
                <li>
                  <div className="logo"><HTMLLogo/></div>
                  <small>HTML5</small>  
                </li>
                <li>
                  <div className="logo"><CSSLogo/></div>
                  <small>CSS</small>  
                </li>
                <li>
                  <div className="logo"><JSLogo/></div>
                  <small>JavaScript</small>  
                </li>
                <li>
                  <div className="logo"><MySQLLogo/></div>
                  <small>MySQL</small>  
                </li>
                <li>
                  <div className="logo"><FlaskLogo/></div>
                  <small>Flask</small>  
                </li>
                <li>
                  <div className="logo"><PostgresSQLLogo/></div>
                  <small>PostgreSQL</small>  
                </li>
                <li>
                  <div className="logo"><DjangoLogo/></div>
                  <small>Django</small>  
                </li>
                <li>
                  <div className="logo"><ReactLogo/></div>
                  <small>React</small>  
                </li>
              </ul>
            </div>
            <div className="tools">
              <h3>Herramientas</h3>
              <ul>
                <li>Git + Github</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Lenguaje C</li>
                <li>Java</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="knowkedge">
              <h3>Conocimientos</h3>
              <ul>
                <li>POO</li>
                <li>Bases de datos relacionales</li>
                <li>CRUD</li>
                <li>Deploy</li>
                <li>API Design</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects-body">
          <h2>Algunos de mis proyectos</h2>
          <div className="projects">
            {/* KIBO */}
            <div className="project">
              <div className="project-img">
                <ImageSlider images={kibo}/>
              </div>
              <div className="project-header">
                <h3>Kibo</h3>
                <div className="project-buttons">
                  <a className="btn">Demo</a>
                  <a className="btn">Code</a>
                </div>
              </div>
              <div className="project-main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident quod illo beatae dolor maiores, ipsam veniam, iure sapiente, ratione eaque molestias temporibus doloremque expedita accusantium quam omnis molestiae libero.</p>
                <div>
                  <small>Python</small>
                  <small>Flask</small>
                  <small>MySQL</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>Bootstrap</small>
                </div>
              </div>
            </div>
            {/* KIBO */}
            <div className="project">
              <div className="project-img">
                <ImageSlider images={kibo}/>
              </div>
              <div className="project-header">
                <h3>Kibo</h3>
                <div className="project-buttons">
                  <a className="btn">Demo</a>
                  <a className="btn">Code</a>
                </div>
              </div>
              <div className="project-main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident quod illo beatae dolor maiores, ipsam veniam, iure sapiente, ratione eaque molestias temporibus doloremque expedita accusantium quam omnis molestiae libero.</p>
                <div>
                  <small>Python</small>
                  <small>Flask</small>
                  <small>MySQL</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>Bootstrap</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <h2>Educación</h2>
      </main>
    </>
    );
}

export default App;
