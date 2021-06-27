import React from 'react'

import {useContext} from 'react'

import CashTotalContext from '../context/CashTotalContext'

const CashBox = () => {

    const {cashTotal, setCashTotal} = useContext(CashTotalContext)

    const addCashVal = (evt) => { 
        
        const cash = parseInt(evt.target.value);

        const newCashtotal = cashTotal + cash;

        setCashTotal(newCashtotal)
    
    }

    return (
        <section className="cashColumn">
            <button className="cashbutton" onClick={addCashVal} value="1">$1</button>
            <button className="cashbutton" onClick={addCashVal} value="5">$5</button>
            <button className="cashbutton" onClick={addCashVal} value="10">$10</button>
            <button className="cashbutton" onClick={addCashVal} value="20">$20</button>
        </section>
    )
}

export default CashBox
