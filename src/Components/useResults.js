import { useState } from "react";

const useResults = () => {

  const [result, setResult] = useState("");
  const [previousOp, setPreviousOp] = useState("0");

  const operands = ['+', '-', '/', '*', '.'];


  const updateResult = (value) => {

    if((operands.includes(value) && 
       operands.includes(result.charAt(result.length - 1))) ||
       (operands.includes(value) && result === '')) {
      return;


    } else if(result === 'Error') {
      setResult("" + value);


    } else {
      setResult(result + value);
    }
  };

    return {result, previousOp, updateResult, 
        setPreviousOp, setResult};
}
 
export default useResults;