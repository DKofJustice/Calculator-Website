const Results = ({ color, result, previousOp }) => {

    let style;


    if(result.length >= 10) {
      style = { fontSize: '45px' };

    } 
    
    if(result.length >= 15) {
      style = { fontSize: '30px' };
    }

    if(result.length >= 25) {
      result = result.slice(0, 25);
    }

    return (
        <div className="results">
          <div className="results-window">
            <div className={`previous-op previous-op-${color}`}>
              <p>{previousOp}</p>
            </div>
          
            <div className={`result result-${color}`}>
              <h2 style={style}>{result || "0"}</h2>
            </div>
          </div>
        </div>
    );
}
 
export default Results;