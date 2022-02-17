import { BrowserRouter as Router, Route } from 'react-router-dom';
import UusiAktiviteetti from './components/UusiAktiviteetti';
import Aktiviteettilista from './components/Aktiviteettilista';
import { useState } from 'react';


function App() {

  const [aktiviteetit, setAktiviteetit] = useState([]);

  return (
    <Router>
      <Route path="/" exact>
        <Aktiviteettilista aktiviteetit={aktiviteetit} setAktiviteetit={setAktiviteetit}/>
      </Route>
      <Route path="/uusiaktiviteetti">
        <UusiAktiviteetti aktiviteetit={aktiviteetit} setAktiviteetit={setAktiviteetit}/>
      </Route>
    </Router>
  );
}

export default App;
