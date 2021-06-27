import React from 'react'
import { useContext } from 'react'
import { createMark } from '../modules/util'
import MarkButton from './MarkButton'
import MarkContext from '../context/MarkContext'
import MarkSelectionContext from '../context/MarkSelectionContext'
import CashTotalContext from '../context/CashTotalContext'

const MarkBox = () => {

    const{marks, setMarks} = useContext(MarkContext);
    const{setmarkSeltn} = useContext(MarkSelectionContext);
    const{setCashTotal} = useContext(CashTotalContext);

    const resetState = () => {
        const markList = createMark();
        const markSeltn = [];
        const CASH_TOTAL = 0;
        
        setMarks(markList);
        setmarkSeltn(markSeltn);
        setCashTotal(CASH_TOTAL)

    }

    return (
        <section className="pickColumn">
              <div className="grid grid-col-4">
                  {marks.map((mark) => (<MarkButton key={mark.id} id = {mark.id} selected= {mark.selected} setMarks={mark.setMarks}/>))}
              </div>
              <div className="control">
                  <button>Cash</button>
                  <button onClick={resetState} >Clear</button>
              </div>
        </section>
    )
}

export default MarkBox
