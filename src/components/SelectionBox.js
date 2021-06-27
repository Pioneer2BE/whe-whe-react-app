import React from 'react'

import { useContext } from 'react'

import MarkSelectionContext from '../context/MarkSelectionContext'
import CashTotalContext from '../context/CashTotalContext';

import MarkSelection from './MarkSelection';

const SelectionBox = () => {

    const{markSeltn} = useContext(MarkSelectionContext);
    const{cashTotal} = useContext(CashTotalContext)

    return (
        <section className="selectedColumn">
            <h3>Numbers Selected</h3>
            {markSeltn.map((mark) => (<MarkSelection key={mark} id = {mark}/>))}
            <p>Total: {cashTotal}</p>
        </section>
    )
}

export default SelectionBox
