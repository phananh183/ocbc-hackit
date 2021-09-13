import SeatingPlanContainer from './components/SeatingPlanContainer'
import Form from './components/Form'
import {useState} from 'react'

function App() {

  // selectedSeat is an app-level state that is initially an empty string, to be passed on to child component
  // It will be set to a string that represents current selected seat, e.g. '0-1', '2-3', etc..c
  const [selectedSeat, setSelectedSeat] = useState("")

  return (
    <div style={{display: 'inline-flex'}}>
      <SeatingPlanContainer selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
      <Form selectedSeat={selectedSeat}/>
    </div>
    
  );
}

export default App;