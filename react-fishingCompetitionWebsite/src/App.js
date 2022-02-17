import {BrowserRouter as Router, Route} from 'react-router-dom';
import Aloitus from './components/Aloitus';
import Ilmoittautuminen from './components/Ilmoittautuminen';
import Kiitos from './components/Kiitos';
import Saannot from './components/Saannot';
import Valikko from './components/Valikko';

function App() {
  
  return (
    <Router>
      <Valikko/>
      <Route path="/" exact component={Aloitus}/>
      <Route path="/saannot" component={Saannot}/>
      <Route path="/ilmoittautuminen" component={Ilmoittautuminen}/>
      <Route path="/kiitos" component={Kiitos}/>
    </Router>
    
  );
}

export default App;
