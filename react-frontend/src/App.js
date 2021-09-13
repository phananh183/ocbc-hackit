import SeatingPlanContainer from './components/SeatingPlanContainer';
import Form from './components/Form';
import { useState } from 'react';
import { PageError } from './components/PageError';
import { SetPageErrorContext } from './contexts/SetPageErrorContext';

function App() {

  // selectedSeat is an app-level state that is initially an empty string, to be passed on to child component
  // It will be set to a string that represents current selected seat, e.g. '0-1', '2-3', etc..c
  const [selectedSeat, setSelectedSeat] = useState('');

  const [pageError, setPageError] = useState(false);

  return (
    <SetPageErrorContext.Provider value={{ setPageError }}>
      <div style={{ display: 'inline-flex' }}>
        {!pageError ? (
          <>
            <SeatingPlanContainer
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
            />
            <Form selectedSeat={selectedSeat} />
          </>
        ) : (
          <PageError />
        )}
      </div>
    </SetPageErrorContext.Provider>
    
  );
}

export default App;