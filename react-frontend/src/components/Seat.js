import React from 'react'

//four props passed in from SeatingPlan component
const Seat = ({booked, selectedSeat, onselect, id}) => {

    let color = 'black' //default seat color
    if (booked) {
        color = '#e6e6e6' //grey out booked seat
    } else if (id === selectedSeat) {
        color = 'red' //current selected seat
    }

    // onselect function is defined in SeatingPlan, and passed in as a prop, to be called when a seat is clicked
    const onClick = () => { onselect(id) }

    //svg to represent a seat
    return (
        <svg className='seat' xmlns="http://www.w3.org/2000/svg" width="57" height="50" fill={color} onClick={onClick} viewBox="0 0 25 25">
            <path d='M14 2a1 1 0 011 1v11a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H3z'/>
        </svg>
    )
}

export default Seat
