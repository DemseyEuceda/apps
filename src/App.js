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
        description='Yo soy bad benito yeye, cantante al nivel de Michael Yacson y Fredy Mercurial yeye. Me gusta cantar canciones yeye de mujeres que son carnaitas yeye y tambien presumo de ser otaco para que la jilada se identifique conmigo yeye'
        image='bad-bunny.webp'
        />
                <Description
        name= 'Ozuna'
        profession='Cantante'
        description='yo soi el negrito ojo claro que canta bien feo en las canciones porque mi voz esta llena de auto-tune, tengo buenas canciones pero como soy baboso les digo a mis productores que jodan todo poniendo vocesilla finita que da como colera escucharla :V'
        image='descargar.jpg'
        />
                <Description
        name= 'Maluma'
        profession='Cantante'
        description='maluma beibi que tiene cuatro beibi y me da anciedad las fanaticas poque me quieren manosiar y me lastiman. soy muy sensible los abrazos de mis fans me dan anciedad me quiero retirar de la musica porque me hacen bullying que me da mas anciedad.'
        image='maluma.jpeg'
        />

      </div>
    </div>
  );
}

export default App;
