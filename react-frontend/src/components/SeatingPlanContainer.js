import React from 'react'
import SeatingPlan from './SeatingPlan'
import { useState } from 'react'

// SeatingPlanContainer is a component that contains the seating plan itself, with the screen and reset database button
// SelectedSeat is again passed down as a prop to SeatingPlan component
const SeatingPlanContainer = ({selectedSeat, setSelectedSeat }) => {

    const [row, setrow] = useState('initialState')  //input field for number of rows to reset database
    const [col, setcol] = useState('')              //input field for number of columns to reset database

    const rowNum = document.getElementById("rowNum")
    const colNum = document.getElementById("colNum")
    
    // function to reset database for ease of testing and assessing/reseting booked seats
    const resetDB = () => {
        if (!rowNum.checkValidity() || !colNum.checkValidity()) {
            return
        }
        fetch("http://13.251.49.123:8080/api/reset_db", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'row': row, 'col': col})
        })
        .then(response => console.log(response))
        window.location.reload(true)
    }

    return (
        <div className='container'>
            <div className='screen'>
            SCREEN SIDE
            </div>
            <SeatingPlan selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat}/>

            <form className='form-control' style={{marginTop: '50px', textAlign: 'center'}}>
                <input id='rowNum' value={row} type='number' min='1' max='10' size="50" placeholder='Row' onChange={(e) => {setrow(e.target.value)}} required={true}/>
                <input id='colNum' value={col} type='number' min='1' max='10' size="50" placeholder='Column' onChange={(e) => {setcol(e.target.value)}} required={true}/>
                <button className='' onClick={resetDB}>Reset Database</button>
            </form>
        </div>
    )
}

export default SeatingPlanContainer
