
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lintulista from './Components/Lintulista';
import MuokkaaLintu from './Components/MuokkaaLintu';
import PoistaLintu from './Components/PoistaLintu';
import UusiLintu from './Components/UusiLintu';
import { Container } from '@material-ui/core';

function App() {

  const [linnut, setLinnut] = useState([]);

  const tallennaLista = () => {
    localStorage.setItem("havaintolista", JSON.stringify(linnut));
  }

  const avaaLista = () => {
    if (localStorage.getItem("havaintolista")) {
      setLinnut(JSON.parse(localStorage.getItem("havaintolista")));
    } else {
      setLinnut([]);
    }
  }

  useEffect(() => {
    avaaLista();
  }, []);

  useEffect(() => {
    tallennaLista();
  }, [linnut]);

  return (
    <Router>
      <Container>

        <Route path="/" exact>
          <Lintulista linnut={linnut} setLinnut={setLinnut}/>
        </Route>

        <Route path="/uusilintu">
          <UusiLintu linnut={linnut} setLinnut={setLinnut}/>
        </Route>

        <Route path="/poistalintu/:id">
          <PoistaLintu linnut={linnut} setLinnut={setLinnut}/>
        </Route>

        <Route path="/muokkaalintua/:id">
          <MuokkaaLintu linnut={linnut} setLinnut={setLinnut}/>
        </Route>

      </Container>
    </Router>
  );
}

export default App;
