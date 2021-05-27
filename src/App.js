import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Framsida from './components/Framsida';
import Utbildningar from './components/Utbildningar';
import Arbetslivserfarenhet from './components/Arbetslivserfarenhet';
import OmMig from './components/OmMig';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Framsida}></Route>
        <Route exact path='/Utbildningar' component={Utbildningar}></Route>
        <Route exact path='/Arbetslivserfarenhet' component={Arbetslivserfarenhet}></Route>
        <Route exact path='/OmMig' component={OmMig}></Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
