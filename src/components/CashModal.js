import { React,useContext } from 'react'

import CashModalContext from '../context/CashModalContext'
import InputArea from './InputArea'

const CashModal = () => {

    const {dspCashModal} = useContext(CashModalContext);

    return (
        <div className={dspCashModal.display === true ? "modal" : "hide"}>
            <div className="modalContainer">
                <div className="modalHeader"> Cash </div>
                <div className="modalBody">
                    <InputArea />
                </div>
            </div>
        </div>
    )
}

export default CashModal
