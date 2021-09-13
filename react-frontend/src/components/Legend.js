import React from 'react'
import SeatLegend from './SeatLegend'

// to combine seatLegend and text of its type, type being prop passed down from Form component
const Legend = ({type}) => {
    return (
        <div className="legend">
            <h3>
                <SeatLegend type={type}/> {type}
            </h3>            
        </div>
    )
}

export default Legend
