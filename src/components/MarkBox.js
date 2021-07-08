import { useContext } from 'react'
import { createMark } from '../modules/util'
import MarkButton from './MarkButton'

import BetAmtContext from '../context/BetAmtContext'
import MarkContext from '../context/MarkContext'
import MarkSelectionContext from '../context/MarkSelectionContext'
import CashModalContext from '../context/CashModalContext'

const MarkBox = () => {

    const{setBetAmount} = useContext(BetAmtContext);
    const{marks, setMarks} = useContext(MarkContext);
    const{setmarkSeltn} = useContext(MarkSelectionContext);
    const{setDspCashModal} = useContext(CashModalContext);

    const resetState = () => {
        const markList = createMark();
        const markSeltn = [];
        const CASH_TOTAL = 0;
        
        setMarks(markList);
        setmarkSeltn(markSeltn);
        setBetAmount(CASH_TOTAL)

    }

    const openModal = () => {

        setDspCashModal({display:true})

    }

    return (
        <section className="pickColumn">
              <div className="grid grid-col-4">
                  {marks.map((mark) => (<MarkButton key={mark.id} id = {mark.id} selected= {mark.selected} setMarks={mark.setMarks}/>))}
              </div>
              <div className="control">
                  <button onClick={openModal}>Cash</button>
                  <button onClick={resetState} >Clear</button>
              </div>
        </section>
    )
}

export default MarkBox
