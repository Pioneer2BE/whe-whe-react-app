import React from 'react'

import { useContext } from 'react'

import MarkSelectionContext from '../context/MarkSelectionContext'
import BetAmtContext from '../context/BetAmtContext';

import MarkSelection from './MarkSelection';

const SelectionBox = () => {

    const{markSeltn} = useContext(MarkSelectionContext);
    const{betAmount} = useContext(BetAmtContext)

    return (
        <section className="selectedColumn">
            <h3>Numbers Selected</h3>
            {markSeltn.map((mark) => (<MarkSelection key={mark} id = {mark}/>))}
            <p>Total: {betAmount}</p>
        </section>
    )
}

export default SelectionBox
