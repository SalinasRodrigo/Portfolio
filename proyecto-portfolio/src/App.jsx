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
// import { cv } from "./mooks/cv.json";
import { kibo, torneosTruco, weatherApp, noteApp } from "./mooks/slider.json";
import { CVIcon } from "./icons/CVIcon";
import { PersonIcon } from "./icons/PersonIcon";
import { GearsIcons } from "./icons/GearsIcons";
import { SkillsIcon } from "./icons/SkillsIcon";
import { Starticon } from "./icons/StarIcon";
import { GraduationIcon } from "./icons/GraduationIcon";
import { ContactIcon } from "./icons/ContactIcon";
import { ToolsIcon } from "./icons/ToolsIcon";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import fotoDePerfil from './assets/perfil.jpg';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <nav className="side-nav-bar">
        <a href="#about-me" className="nav-btn" data-title="Sobre mí">
          <PersonIcon />
        </a>
        <a href="#skills" className="nav-btn" data-title="Habilidades">
          <SkillsIcon />
        </a>
        <a href="#projects" className="nav-btn" data-title="Proyectos">
          <Starticon />
        </a>
        <a href="#education" className="nav-btn" data-title="Educación">
          <GraduationIcon />
        </a>
        <a href="#contact" className="nav-btn" data-title="Contáctame">
          <ContactIcon />
        </a>
      </nav>
      <header className="intro-body">
        <h1>Rodrigo Salinas</h1>
        <p>Desarrollador Web Full Stack</p>
      </header>
      <main>
        <section className="personal-speach" id="about-me">
          <header className="personal-speach-header">
            <h2>¿Quien Soy?</h2>
            <a
              href="https://drive.google.com/file/d/1ZQOO8tvlQtGGnlI4fDi1_jOgwChpZirq/view?usp=sharing"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CVIcon />
            </a>
            <a
              href="https://github.com/SalinasRodrigo"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GithubLogo />
            </a>
          </header>
          <div className="personal-speach-body">
            <div>
              <p>
                &nbsp;Soy un desarrollador web Full Stack y estudiante de
                ingeniería en informática. Habiendo incursionado al mundo de la
                informática y el desarrollo de forma autodidacta y aun
                especializándome en la universidad, decidí enfocarme en el área
                del desarrollo web a través de un bootcamp.
              </p>
              <br />
              <p>
                &nbsp;Me especializo en Python (con los framework&apos;s Flask y
                Django) y bases de datos SQL en el backend y utilizo el
                framework React para el frontend (además de contar con los
                conocimientos en HTML, CSS y JavaScript junto a algunas de sus
                librerías).
              </p>
              <br />
              <p>
                &nbsp;Disfruto de aprender y trabajar en equipo para crear
                nuevas tecnologías aportando, además de mis habilidades
                técnicas, comunicación asertiva y empática con mis compañeros.
                Busco oportunidades en el área IT donde pueda crecer como
                desarrollador y profesional. <br />
                ¡Es un gusto conocerte!
              </p>
            </div>
            <div className="picture-container">
              <img src={fotoDePerfil} alt="Foto de perfil" />
            </div>
          </div>
        </section>
        <section className="skills-body" id="skills">
          <h2>Mis Habilidades</h2>
          <div className="skills">
            <div className="development">
              <h3>
                <GearsIcons /> Tecnologías
              </h3>
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
              <h3>
                <ToolsIcon /> Herramientas
              </h3>
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
              <h3>
                <LightbulbIcon /> Conocimientos
              </h3>
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
        </section>
        <section className="projects-body" id="projects">
          <h2>Algunos de mis proyectos</h2>
          <div className="projects">
            {/* KIBO */}
            <section className="project">
              <div className="project-img">
                <ImageSlider images={kibo.images} />
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
                  &nbsp;{kibo.description}
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
            </section>
            {/* NotesAPP */}
            <section className="project">
              <div className="project-img">
                <ImageSlider images={noteApp.images} />
              </div>
              <div className="project-header">
                <h3>Notes App </h3>
                <div className="project-buttons">
                  <a
                    className="btn"
                    href="https://github.com/SalinasRodrigo/django-react-notes-app.git"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-main">
                <p>
                  &nbsp;{noteApp.description}
                </p>
                <div>
                  <small>Python</small>
                  <small>Django</small>
                  <small>SQLite</small>
                  <small>APIRest</small>
                  <small>React</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                </div>
                <div>
                  <div className="line"></div>
                </div>
              </div>
            </section>
            {/* TorneosTruco */}
            <section className="project">
              <div className="project-img">
                <ImageSlider images={torneosTruco.images} />
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
                  &nbsp;{torneosTruco.description}
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
            </section>
            {/* Weather app */}
            <section className="project">
              <div className="project-img">
                <ImageSlider images={weatherApp.images} />
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
                  &nbsp;{weatherApp.description}
                </p>
                <div>
                  <small>React</small>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>API connection</small>
                </div>
                <div>
                  <div className="line"></div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="education-body" id="education">
          <h2>Educación</h2>
          <div className="education">
            <div>
              <h3>Ingeniería informática - Facultad Politécnica U.N.A. </h3>
              <small>2021 - actualidad</small>
            </div>
            <p>
              &nbsp;Ciencias físico-matemáticas. - Ciencias de la computación. -
              Planificar, diseñar e implementar proyectos informáticos. -
              Habilidad de trabajar en equipo y de comunicarse eficientemente en forma oral y escrita.
            </p>
          </div>
          <div className="education">
            <div>
              <h3>Desarrollador web full stack Python - Coding Dojo </h3>
              <small>2022 - 2023</small>
            </div>
            <p>
              &nbsp;HTML5 - CSS3 - JavaScript - Python - MySQL - Flask - Django
            </p>
          </div>
        </section>
        <section className="contact">
          <header className="contact-header" id="contact">
            <h2>¡Contactame!</h2>
          </header>
          <div className="contact-body">
            <ContactToMe />
          </div>
        </section>
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
      <Analytics/>
    </>
  );
}

export default App;
