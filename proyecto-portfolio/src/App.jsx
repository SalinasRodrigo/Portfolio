import "./App.css";
import {cv} from "./mooks/cv.json"

function App() {
  return (
    <>
      <div className="intro-body">
        <h1>Rodrigo Salinas</h1>
        <p>Desarrollador Web Full Stack</p>
      </div>
      <div className="personal-speach-body">
        <div>
          <h2>¿Quien Soy?</h2>
          <p>{cv.personaleSpeech}</p>
        </div>
        <div className="picture-container"></div>
      </div>
      <div className="skills-body">
        <h2>Habilidades</h2>
        <div className="skills">
          <div className="development">
            <h3>Desarrollo</h3>
            
          </div>
          <div></div>
        </div>
      </div>

      <h2>Proyectos</h2>
      <ul style={{  
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
      {cv.proyectos.map((proyecto, index) => {
        return (
          <li key={index}>{proyecto}</li>
        )
      })}
      </ul>

      <h2>Educación</h2>
      <ul style={{  
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
      {cv.educación.map((escuela, index) => {
        return (
          <li key={index}>{escuela}</li>
        )
      })}
      </ul>
    </>
    );
}

export default App;
