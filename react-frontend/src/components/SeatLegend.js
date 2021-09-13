import React from 'react'

//SeatLegend is almost the same as Seat component, just without logic to change color based on user interaction
// and map different color to differnt types of seat as defined in seatTypes object below
const SeatLegend = ({type}) => {

    const seatType = {
        "Available": 'black',
        "Unavailable": '#e6e6e6',
        'Selected': 'red'
    }

    return (
        <svg className='seat' xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill={seatType[type]} viewBox="0 0 25 25">
            <path d='M14 2a1 1 0 011 1v11a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H3z'/>
        </svg>
    )}

export default SeatLegend
