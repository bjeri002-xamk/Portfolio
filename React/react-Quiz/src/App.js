import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from "@material-ui/core";
import { useState, useEffect } from 'react';
import Listaus from './components/Listaus';
import Henkilotiedot from './components/Henkilotiedot';
import Peli from './components/Peli';
import TallennaPisteet from './components/TallennaPisteet';
import Valikko from './components/Valikko';
import Highscores from './components/Highscores';
import Aloitus from './components/Aloitus';

function App() {

  const [data, setData] = useState({
    henkilot: []
  });
  const [pisteTiedot, setPistetiedot] = useState([]);

  const haeTiedot = async () => {
      const yhteys = await fetch("https://breakingbadapi.com/api/characters");
      const tiedot = await yhteys.json();

      let apudata = tiedot.filter((henkilo) => {
        return (henkilo.char_id !== 39);
      })
      setData({
          ...data,
          henkilot : apudata
      })

  }

  useEffect(() => {
    haeTiedot();
    avaaPisteet();
  }, [])

  const tallennaPisteet = () => {
    localStorage.setItem("Pisteet", JSON.stringify(pisteTiedot));
  }

  const avaaPisteet = () => {
    if (localStorage.getItem("Pisteet")) {
      setPistetiedot(JSON.parse(localStorage.getItem("Pisteet")));
    } else {
      setPistetiedot([]);
    }
  }

  useEffect(() => {
    tallennaPisteet();
  }, [pisteTiedot]);

  return(
      <Router>
        <Container maxWidth="md">

          <Valikko/>

          <Route path="/peli" exact>
            <Peli data={data} setData={setData}/>
          </Route>

          <Route path="/breaking-bad-quiz">
            <Aloitus/>
          </Route>

          <Route path="/listaus">
            <Listaus data={data} setData={setData}/>
          </Route>
          
          <Route path="/henkilotiedot/:id">
            <Henkilotiedot data={data} setData={setData}/>
          </Route>

          <Route path="/tallenna">
            <TallennaPisteet pisteTiedot={pisteTiedot} setPistetiedot={setPistetiedot}/>
          </Route>

          <Route path="/highscores">
            <Highscores pisteTiedot={pisteTiedot} setPistetiedot={setPistetiedot}/>
          </Route>

        </Container>
      </Router>
  );
}

export default App;
