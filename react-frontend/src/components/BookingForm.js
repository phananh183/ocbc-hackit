import React from 'react'
import {useState} from 'react'

const BookingForm = ({selectedSeat}) => {

    const parsedSeat = selectedSeat.split('-') //Parse selectedSeat into "A1" "B2" format to display as it is currently "0-1", "2-0"

    const [name, setname] = useState('')        //Input field for customer name
    const [email, setemail] = useState('')      //Input field for customer email
    const [mobile, setmobile] = useState('')    //Input field for customer mobile

    //Seat booking function
    const book = () => {

        const nameInput = document.getElementById("name")
        const emailInput = document.getElementById("email")
        const mobileInput = document.getElementById("mobile")

        //Check validity of all input fields when user submit book request        
        if (!nameInput.checkValidity() || !emailInput.checkValidity() || !mobileInput.checkValidity()) {
            const nameError = document.getElementById('nameError')
            const emailError = document.getElementById('emailError')
            const mobileError = document.getElementById('mobileError')
            nameError.innerHTML = nameInput.validationMessage
            emailError.innerHTML = emailInput.validationMessage
            mobileError.innerHTML = mobileInput.validationMessage
            return
        }
        
        //If all input fields are satisfied, call API endpoint to book the seat
        fetch("http://13.251.49.123:8080/api/book", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'id': selectedSeat})
        })
        .then(response => response.json()
        .then(data => {
            //concurrency problem is implemented in backend, whereby if a seat is already registered as booked
            //the response would came back with an error field of 2
            //hence we test the value of error and display alert accordingly
            if (data['error'] === 2 ) {
                alert('Seat was booked by someone else. Please select another seat')
                //reload to show the most updated seatStatus
                window.location.reload(true)
            } else {
                alert('Seat booked successfully!')
                //reload to show the most updated seatStatus
                window.location.reload(true)
            }
        }))
    }

    //To render input fields for customer info and confirm booking button
    return (

        <div className='add-form'>
            <h3 style={{marginTop: '10px'}}>
                Your seat: {String.fromCharCode(parseInt(parsedSeat[0])+65)}{parsedSeat[1]}
            </h3>

            <h3 >Please key in your details below:</h3>

            <div className='form-control'>
                <input id='name' value={name} type='text' placeholder='Your name' onChange={(e) => {setname(e.target.value)}} required={true}/>
                <p id='nameError'></p> {/*To display error*/}
            </div>

            <div className='form-control'>
                <input id='email' value={email} type='email' placeholder='Your email' onChange={(e) => {setemail(e.target.value)}} required={true}/>
                <p id='emailError'></p> {/*To display error*/}
            </div>

            <div className='form-control'>
                <input id='mobile' value={mobile} type='tel' pattern="[0-9]{8}" placeholder='Your mobile number - 12345678' onChange={(e) => {setmobile(e.target.value)}} required={true}/>
                <p id='mobileError'></p> {/*To display error*/}
            </div>

            <button className='btn btn-block' onClick={book}>Confirm Booking</button>

        </div>
            
    )
}

export default BookingForm
