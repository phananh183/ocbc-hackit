import React from 'react'
import Seat from './Seat'
import {useEffect, useState} from 'react'
import { getUrl } from '../utils'


const SeatingPlan = ({selectedSeat, setSelectedSeat}) => {

    // seatStaus, row and col are states, whose values are taken from a API call to the database through "api/get_seats_status"
    // row and col is used to form the grid of the seats in table format
    // where seatStatus is a list of key-value pairs, where the key is the representation of the seat in the database, e.g. "0-1", "2-0", and a boolean value for whether the seat is currently booked
    const [seatStatus, setSeatStatus] = useState({})
    const [row, setRow] = useState(0)
    const [col, setCol] = useState(0)

    useEffect(() => {
        fetch(getUrl("/api/get_seats_status"))
        .then(response => response.json())
        .then(
            response => {
                setSeatStatus(response.data.status) 
                setRow(response.data.row)
                setCol(response.data.col)
            }
        )
    }, [])

    const arrayRow = [...Array(row).keys()] //to produce a array of numbers corresponding to no. of rows, [0,1,2,3,...,n]
    const arrayCol = [...Array(col).keys()] //to produce a array of numbers corresponding to no. of columns, [0,1,2,3,...,n]

    // to be called when a seat is clicked on, if it is booked, return an alert, else set selectedSeat to the id of the seat
    // function is to be passed in as a prop to the Seat component 
    const onselect = (id) => {
        if (seatStatus[id]) {
            alert("Seat is already booked")
        } else {
            setSelectedSeat(id)
        }
    }


    //Creating the seating plan using Seat component
    return (
            <table className='seatingPlan'>
                <tbody>
                    <tr>
                        <td></td>
                        {arrayCol.map((j) => (
                            <td key={j}>
                                <div style={{
                                    paddingRight: 18,
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {j}
                                </div>
                            </td>
                        ))}
                    </tr>
                    {arrayRow.map((i) => 
                    <tr key={i}>
                        <td>
                            <div style={{
                                paddingBottom: 18,
                                paddingRight: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {String.fromCharCode(i+65)}
                            </div>
                        </td>
                        {arrayCol.map((j) => {
                            return(
                            <td key={`${i}-${j}`}><Seat booked={seatStatus[`${i}-${j}`]} id={`${i}-${j}`} selectedSeat={selectedSeat} onselect={onselect}/></td>)
                        })}
                    </tr>
                    )}
                </tbody>
            </table>
    )
}

export default SeatingPlan
