import "./App.css";
import {cv} from "./mooks/cv.json"

function App() {
  return (
    <>
      <h1>Rodrigo Salinas</h1>
      <p>{cv.personaleSpeech}</p>

      <h2>Habilidades</h2>
      
      <div className="habilidades">
        <div className="habilidad">
          <h3>Frontend</h3>
          <ul>
            {cv.habilidadesTecnicas.frontent.map((habilidad, index)=>{
              return (
                <li key={index}>{habilidad}</li>
              )
            })}
          </ul>
        </div>

        <div className="habilidad">
          <h3>Backend</h3>
          <ul>
            {cv.habilidadesTecnicas.backend.map((habilidad, index)=>{
              return (
                <li key={index}>{habilidad}</li>
              )
            })}
          </ul>
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
