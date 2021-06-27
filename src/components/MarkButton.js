import React from 'react'

import { useContext } from 'react'

import MarkContext from '../context/MarkContext'
import MarkSelectionContext from '../context/MarkSelectionContext'

const MarkButton = (props) => {

    const{marks, setMarks} = useContext(MarkContext);
    const{markSeltn, setmarkSeltn} = useContext(MarkSelectionContext);

    const selectMark = (evt) => {

        const markID = parseInt(evt.target.id);

        const copiedMarks = [...marks];

        const foundMark = copiedMarks.find(mark=> mark.id === markID);

        let cpyMarkSeltn = [...markSeltn]

        if (foundMark.selected) {

            foundMark.selected = false;

            cpyMarkSeltn = cpyMarkSeltn.filter(mark => mark !== markID)

            setMarks(copiedMarks)
            setmarkSeltn(cpyMarkSeltn)

            console.log(cpyMarkSeltn)

        }else{

            
            if(cpyMarkSeltn.length < 5)
            {
                foundMark.selected = true;

                cpyMarkSeltn.push(markID)

                setMarks(copiedMarks)

                setmarkSeltn(cpyMarkSeltn)

            }
            else
            {
                alert(`You have already selected 5 marks`)      
            }
            
            console.log(cpyMarkSeltn)
            
        }

    }


    return (
        <button id={props.id} className= {props.selected ? "markButton selectedMark ":"markButton"} onClick={selectMark}>{props.id}</button>
    )
}

export default MarkButton
