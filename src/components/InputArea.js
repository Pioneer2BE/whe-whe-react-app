import { React, useState, useContext } from 'react'

import BetAmtContext from '../context/BetAmtContext'
import CashModalContext from '../context/CashModalContext'
import MarkSelectionContext from '../context/MarkSelectionContext'
import BillContext from '../context/BillContext'


const InputArea = () => {

    const {betAmount} = useContext(BetAmtContext)
    const {setDspCashModal} = useContext(CashModalContext)
    const {markSeltn} = useContext(MarkSelectionContext)
    const {billObjState, setBillObjState} = useContext(BillContext)


    const [recdAmt, setrecdAmt] = useState()
    const [changeAmt, setChangeAmt] = useState(0)

    const closeModal = () => {
        
        setDspCashModal({display:false})

    }

    const changeRecAmt = (evt) => {

        let val = parseFloat(evt.target.value)
        const total = val - betAmount;
        setrecdAmt(val)
        setChangeAmt(total)

    }

    const createBill = () => {

        
        let newBill = {...billObjState};
        newBill.display = true;
        newBill.selMarks = markSeltn;
        newBill.total = betAmount;
        newBill.recAmt = recdAmt;
        newBill.change = changeAmt;
        newBill.trnsDate = new Date().toDateString();
        newBill.trnTime = new Date().toLocaleTimeString();
        
        closeModal()
        setBillObjState(newBill)

        console.log(newBill)

    }

    return (
        <section>
            <h2>Enter Amount Received</h2>
            <div>
                <span>Total</span>
                <input type="number" value={betAmount} readOnly/>                 
            </div>
            <div>
                <span>Received</span>
                <input type="number" onChange={changeRecAmt}/>
            </div>
            <div>
                <span>Change</span>
                <input type="number" value={changeAmt} readOnly/>
            </div>
            <div>
                <button onClick={createBill}>Confirm</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </section>
    )
}

export default InputArea
