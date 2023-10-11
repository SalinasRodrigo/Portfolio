import "./App.css";
import { ImageSlider } from "./components/ImageSlider";
import { ContactToMe } from "./components/ContactToMe";
import { CSSLogo } from "./icons/CSSLogo";
import { DjangoLogo } from "./icons/DjangoLogo";
import { FlaskLogo } from "./icons/FlaskLogo";
import { HTMLLogo } from "./icons/HTMLLogo";
import { JSLogo } from "./icons/JSLogo";
import { MySQLLogo } from "./icons/MySQLLogo";
import { PostgresSQLLogo } from "./icons/PostgreSQLLogo";
import { PythonLogo } from "./icons/PythonLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { GithubLogo } from "./icons/GithubLogo";
import { LinkedinLogo } from "./icons/LinkedinLogo";
import { GmailLogo } from "./icons/GmailLogo";
import { cv } from "./mooks/cv.json";
import { kibo, torneosTruco, weatherApp } from "./mooks/slider.json";
import { CVIcon } from "./icons/CVIcon";
import { PersonIcon } from "./icons/PersonIcon";
import { GearsIcons } from "./icons/GearsIcons";
import { SkillsIcon } from "./icons/SkillsIcon";
import { Starticon } from "./icons/StarIcon";
import { GraduationIcon } from "./icons/GraduationIcon";
import { ContactIcon } from "./icons/ContactIcon";


function App() {
  return (
    <>
      <nav className="side-nav-bar">
          <a href="" className="nav-btn" title="Hola">
            <PersonIcon/>
          </a>
          <a href="" className="nav-btn" title="Hola">
            <SkillsIcon/>
          </a>
          <a href="" className="nav-btn" title="Hola">
            <Starticon/>
          </a>
          <a href="" className="nav-btn">
            <GraduationIcon/>
          </a>
          <a href="" className="nav-btn">
            <ContactIcon/>
          </a>
      </nav>
      <header className="intro-body">
        <h1>Rodrigo Salinas</h1>
        <p>Desarrollador Web Full Stack</p>
      </header>
      <main>
        <div className="personal-speach">
          <div className="personal-speach-header">
            <h2>¿Quien Soy?</h2>
            <a 
              href="https://drive.google.com/file/d/1EMB1KtC9g8NY6dLitjy8F2cc6fdYg-25/view?usp=sharing" 
              rel="noreferrer noopener"
              target="_blank">
              <CVIcon/>
            </a>
            <a
              href="https://github.com/SalinasRodrigo/Kibo.git"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GithubLogo/>
            </a>
          </div>
          <div className="personal-speach-body">
            <div>
              <p>&nbsp;{cv.personaleSpeech[0]}</p>
              <br/>
              <p>&nbsp;{cv.personaleSpeech[1]}</p>
              <br/>
              <p>&nbsp;{cv.personaleSpeech[2]} <br/>¡Es un gusto conocerte!</p>
            </div>
            <div className="picture-container">
              
            </div>
          </div>
        </div>
        <div className="skills-body">
          <h2>Mis Habilidades</h2>
          <div className="skills">
            <div className="development">
              <h3>Tecnologías</h3>
              <ul className="logos">
                <li>
                  <div className="logo">
                    <PythonLogo />
                  </div>
                  <small>Python</small>
                </li>
                <li>
                  <div className="logo">
                    <HTMLLogo />
                  </div>
                  <small>HTML5</small>
                </li>
                <li>
                  <div className="logo">
                    <CSSLogo />
                  </div>
                  <small>CSS</small>
                </li>
                <li>
                  <div className="logo">
                    <JSLogo />
                  </div>
                  <small>JavaScript</small>
                </li>
                <li>
                  <div className="logo">
                    <MySQLLogo />
                  </div>
                  <small>MySQL</small>
                </li>
                <li>
                  <div className="logo">
                    <FlaskLogo />
                  </div>
                  <small>Flask</small>
                </li>
                <li>
                  <div className="logo">
                    <PostgresSQLLogo />
                  </div>
                  <small>PostgreSQL</small>
                </li>
                <li>
                  <div className="logo">
                    <DjangoLogo />
                  </div>
                  <small>Django</small>
                </li>
                <li>
                  <div className="logo">
                    <ReactLogo />
                  </div>
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
                <ImageSlider images={kibo} />
              </div>
              <div className="project-header">
                <h3>Kibo</h3>
                <div className="project-buttons">
                  <a
                    className="btn"
                    href="https://github.com/SalinasRodrigo/Kibo.git"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium provident quod illo beatae dolor maiores, ipsam
                  veniam, iure sapiente, ratione eaque molestias temporibus
                  doloremque expedita accusantium quam omnis molestiae libero.
                </p>
                <div>
                  <small>Python</small>
                  <small>Flask</small>
                  <small>MySQL</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>Bootstrap</small>
                </div>
                <div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            {/* TorneosTruco */}
            <div className="project">
              <div className="project-img">
                <ImageSlider images={torneosTruco} />
              </div>
              <div className="project-header">
                <h3>Torneos de truco </h3>
                <div className="project-buttons">
                  <a
                    className="btn"
                    href="https://torneos-truco.vercel.app/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/SalinasRodrigo/practicas_react/tree/692a6e67773bb87092f0f533a8e174976b3420fd/projects/06-Torneos_truco"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium provident quod illo beatae dolor maiores, ipsam
                  veniam, iure sapiente, ratione eaque molestias temporibus
                  doloremque expedita accusantium quam omnis molestiae libero.
                </p>
                <div>
                  <small>React</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                </div>
                <div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            {/* Weather app */}
            <div className="project">
              <div className="project-img">
                <ImageSlider images={weatherApp} />
              </div>
              <div className="project-header">
                <h3>Weather app</h3>
                <div className="project-buttons">
                  <a
                    className="btn"
                    href="https://climate-d38bh6eh7-rodrigos-projects.vercel.app/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/SalinasRodrigo/climate_app.git"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium provident quod illo beatae dolor maiores, ipsam
                  veniam, iure sapiente, ratione eaque molestias temporibus
                  doloremque expedita accusantium quam omnis molestiae libero.
                </p>
                <div>
                  <small>React</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                </div>
                <div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education-body">
          <h2>Educación</h2>
          <div className="education">
            <h3>Ingenieria informatica - Facultad Politécnica U.N.A. </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sequi
              esse vero tenetur, tempora sapiente, odio a quo consectetur nulla
              iste recusandae! Consequuntur accusantium ullam eligendi officia
              aliquid odio itaque.
            </p>
            <small></small>
          </div>
          <div className="education">
            <h3>Dessarrollador web full stack Python - Coding Dojo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sequi
              esse vero tenetur, tempora sapiente, odio a quo consectetur nulla
              iste recusandae! Consequuntur accusantium ullam eligendi officia
              aliquid odio itaque.
            </p>
            <small></small>
          </div>
        </div>
        <div className="contact">
          <div className="contact-header">
            <h2>¡Contactame!</h2>
          </div>
          <div className="contact-body">
            <div>
              <ContactToMe />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-logos">
          <a
            href="https://github.com/SalinasRodrigo"
            rel="noreferrer noopener"
            target="_blank"
          >
            <GithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-salinas-b8a43b243/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
          <a
            href="mailto:salinas.e.rodrigo@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <GmailLogo />
          </a>
        </div>
        <div>
          <small>© Rodrigo Salinas 2023</small>
        </div>
      </footer>
    </>
  );
}

export default App;
