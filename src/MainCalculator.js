import Results from './Components/Results';
import Keypad from './Components/Keypad';
import useResults from './Components/useResults';

const MainCalculator = ({ color }) => {

  const {result, previousOp, updateResult, 
    setPreviousOp, setResult} = useResults();




  const negNum = () => {
    if(result.charAt(0) !== "" && result.charAt(0) !== "-") {
      setResult('-' + result);
    } else if(result.charAt(0) === "-") {
      setResult(result.slice(1));
    }
  };


  
  const resetResult = () => {
    setResult("");
    setPreviousOp("0");
  };



  //Erases the result character by character from the end

  const eraseResult = () => {
    setResult(result.slice(0, -1));
  };




  const calcResult = () => {
    if(result.slice(result.length - 2) === '/0' ||
       result === 'Error') {
      setResult("Error");

    } else {
      setResult(eval(result).toString());

    }

    setPreviousOp(result);
  };

    return (
        <div className="calculator">
        <Results 
          result={result} 
          previousOp={previousOp}
          color={color}
        />

        <Keypad 
          updateResult={updateResult}
          resetResult={resetResult}
          calcResult={calcResult}
          eraseResult={eraseResult}
          negNum={negNum}
          color={color}
        />
        </div>
    );
}
 
export default MainCalculator;