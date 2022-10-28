import logo from './logo.svg';
import './App.css';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1>Cantantes entre comillas</h1>
        <Description
        name= 'Bad Bunny'
        profession='Cantante, actor, luchador, padre y madre luchon'
        description='Cantante mas famoso en la actualidad, debido a su forma de actual, sin importar las criticas o sin seguir las tendencias, tomando medidas arriesgadas las cuales son bien recibidas por su publico'
        image='bad-bunny.webp'
        />
                <Description
        name= 'Ozuna'
        profession='Cantante'
        description='Conocido en el genero como el negrito ojitos claro, un cantante que salto a la fama debido a numerosos exitos gracias a su estilo y carisma'
        image='descargar.jpg'
        />
                <Description
        name= 'Maluma'
        profession='Cantante'
        description='Cantante colombiano, famoso por sus letras atrevidas y pretenciosas, algo odiado por la comunidad debido a algunas muestras de arrogancia en algunos escenarios'
        image='maluma.jpeg'
        />

      </div>
    </div>
  );
}

export default App;
