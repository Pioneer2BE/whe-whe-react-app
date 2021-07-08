import React from 'react'

import {useContext} from 'react'

import BetAmtContext from '../context/BetAmtContext'

const CashBox = () => {

    const {betAmount, setBetAmount} = useContext(BetAmtContext)

    const addCashVal = (evt) => { 
        
        const cash = parseInt(evt.target.value);

        const newBetAmountl = betAmount + cash;

        setBetAmount(newBetAmountl)
    
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
