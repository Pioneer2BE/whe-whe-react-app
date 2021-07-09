import {React, useContext} from 'react'

import { createMark } from '../modules/util'

import BetAmtContext from '../context/BetAmtContext'
import BillContext from '../context/BillContext'
import MarkContext from '../context/MarkContext'
import MarkSelectionContext from '../context/MarkSelectionContext'

import MarkSelection from './MarkSelection'


const BillModal = () => {

    const {setBetAmount} = useContext(BetAmtContext)
    const {billObjState, setBillObjState} = useContext(BillContext)
    const {setMarks} = useContext(MarkContext)
    const {setmarkSeltn} = useContext(MarkSelectionContext)
    

    const markSeltn = billObjState.selMarks;

    const resetState = () => {

        const BET_AMOUNT = 0;
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
        const markList = createMark();
        const markSeltn = [];
        
        setMarks(markList);
        setmarkSeltn(markSeltn);
        setBetAmount(BET_AMOUNT)
        setBillObjState(billObj)
        
    }

    return (
        <div className={billObjState.display === true ? "modal" : "hide"}>
            <div className="billModalContainer">
                <div className="modalHeader"> Bill </div>
                <div>
                    <h3>Numbers Selected</h3>
                    {markSeltn.map((mark) => (<MarkSelection key={mark} id = {mark}/>))}
                    <p>Total: {billObjState.total}</p>
                    <p>Paid: {billObjState.recAmt}</p>
                    <p>Change: {billObjState.change}</p>
                    <p>Date: {billObjState.trnsDate}</p>
                    <p>Time: {billObjState.trnTime}</p>
                    <hr />
                    <button onClick={resetState} >New</button><button onClick={window.print} >Print</button>
                </div>
            </div>
        </div>
    )
}

export default BillModal
