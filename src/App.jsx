import { useState } from 'react';
import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
      const [userInput, setUserInput] = useState({initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10,});

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue){
        setUserInput((prevUserInput) => {
            return{
            ...prevUserInput,    //This is used to collect all the values that are prev. added in our useState
            [inputIdentifier]: +newValue     //This is used to set a newValue that the user have been entered 
            };
        });
    }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p> }
    {inputIsValid && <Results input={userInput} />}
  </>
  )
}

export default App
