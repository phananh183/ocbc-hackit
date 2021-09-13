import React from 'react'
import Legend from './Legend'
import BookingForm from './BookingForm'

// Form component includes two parts, upper part is the seat legend, and below is the bookingForm component
// which takes in the selectedSeat prop passed down from App level to display which seat is being chosen, yet in more conventional "A1" "B2" way
// rather then "0-1" "2-3" as represented in the backend
const Form = ({selectedSeat}) => {

    return (
        <div className='container'>
            <h1>Choose your seat</h1>
            <h3>Legend</h3>
            <div style={{display: 'inline-flex'}}>
                <Legend type='Available'/>
                <Legend type='Unavailable'/>
            </div>
            <div style={{ borderBottom: '1px solid red'}}>
                <Legend type='Selected'/>
            </div>

            { (selectedSeat !== '') && 
                <BookingForm selectedSeat={selectedSeat}/>
            }

        </div>
    )
}

export default Form
