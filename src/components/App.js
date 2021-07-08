import '../assets/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState } from 'react';

import BetAmtContext from '../context/BetAmtContext';
import MarkContext from '../context/MarkContext';
import MarkSelectionContext from '../context/MarkSelectionContext';
import CashModalContext from '../context/CashModalContext';
import BillContext from '../context/BillContext';

import HomePage from '../pages/HomePage';

import{createMark} from '../modules/util';

function App() {

  //Create Mark button object array initial state

  const markButtonList = createMark();
  
  const [marks, setMarks] = useState(markButtonList)

  //Create selected mark initial state.

  const [markSeltn, setmarkSeltn] = useState([])

  //Create cash total initial state.

  const BET_AMOUNT = 0;

  const [betAmount, setBetAmount] = useState(BET_AMOUNT)

  const [dspCashModal, setDspCashModal] = useState({display:false})

  //Create bill object initial state
  const billObj = 
  {
    display: false,
    selMarks:[],
    total:0,
    recAmt:0,
    change:0,
    trnsDate:"",
    trnTime:""
  }

  const [billObjState, setBillObjState] = useState(billObj)



  return (
    <>
      <Router>
        <BetAmtContext.Provider value = {{betAmount, setBetAmount}}>
        <MarkContext.Provider value = {{marks, setMarks}}>
        <MarkSelectionContext.Provider value = {{markSeltn, setmarkSeltn}}>
        <CashModalContext.Provider value = {{dspCashModal, setDspCashModal}}>
        <BillContext.Provider value = {{billObjState, setBillObjState}}>
          <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
          </Switch>
        </BillContext.Provider>
        </CashModalContext.Provider>
        </MarkSelectionContext.Provider>
        </MarkContext.Provider>
        </BetAmtContext.Provider>
      </Router>
    </>
  );

}

export default App;
