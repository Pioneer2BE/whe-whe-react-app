import '../assets/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState } from 'react';


import MarkContext from '../context/MarkContext';
import MarkSelectionContext from '../context/MarkSelectionContext';
import CashTotalContext from '../context/CashTotalContext';


import HomePage from '../pages/HomePage';

import{createMark} from '../modules/util';

function App() {

  //Create Mark button object array initial state

  const markButtonList = createMark();
  
  const [marks, setMarks] = useState(markButtonList)

  //Create selected mark initial state.

  const [markSeltn, setmarkSeltn] = useState([])

  //Create cash total initial state.

  const total = 0;

  const [cashTotal, setCashTotal] = useState(total)

  //Create bill object initial state
  /* const billObj = 
  {
    setMarks:[],
    total:0
  }

  const [billObjState, setBillObjState] = useState(billObj) */



  return (
    <> 
       <Router>
          <MarkContext.Provider value = {{marks, setMarks}}>
          <MarkSelectionContext.Provider value = {{markSeltn, setmarkSeltn}}>
          <CashTotalContext.Provider value = {{cashTotal, setCashTotal}}>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
          </Switch>
          </CashTotalContext.Provider>
          </MarkSelectionContext.Provider>
          </MarkContext.Provider>
        </Router>

    </>
  );

}

export default App;
