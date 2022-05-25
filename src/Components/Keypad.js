const Keypad = ({updateResult, resetResult, 
  calcResult, eraseResult, negNum, color}) => {

    return (
        <div className={`keypad keypad-${color}`}>
          <div className={`rows row-1 row-${color}`}>
            <div className="operator AC" onClick={resetResult}><h3>AC</h3></div>
            <div className="operator percentage" onClick={() => updateResult('/100')}><h3>%</h3></div>
            <div className="operator delete" onClick={eraseResult}><h3>Del</h3></div>
            <div className="operator divide" onClick={() => updateResult('/')}><h3>/</h3></div>
          </div>

          <div className={`rows row-2 row-${color}`}>
            <div className="number number-7" onClick={() => updateResult(7)}><h3>7</h3></div>
            <div className="number number-8" onClick={() => updateResult(8)}><h3>8</h3></div>
            <div className="number number-9" onClick={() => updateResult(9)}><h3>9</h3></div>
            <div className="operator multiply" onClick={() => updateResult('*')}><h3>X</h3></div>
          </div>

          <div className={`rows row-3 row-${color}`}>
            <div className="number number-4" onClick={() => updateResult(4)}><h3>4</h3></div>
            <div className="number number-5" onClick={() => updateResult(5)}><h3>5</h3></div>
            <div className="number number-6" onClick={() => updateResult(6)}><h3>6</h3></div>
            <div className="operator subtract" onClick={() => updateResult('-')}><h3>-</h3></div>
          </div>

          <div className={`rows row-4 row-${color}`}>
            <div className="number number-1" onClick={() => updateResult(1)}><h3>1</h3></div>
            <div className="number number-2" onClick={() => updateResult(2)}><h3>2</h3></div>
            <div className="number number-3" onClick={() => updateResult(3)}><h3>3</h3></div>
            <div className="operator addition" onClick={() => updateResult('+')}><h3>+</h3></div>
          </div>

          <div className={`rows row-5 row-${color}`}>
            <div className="operator neg-pos" onClick={negNum}><h3>+/-</h3></div>
            <div className="number number-0" onClick={() => updateResult(0)}><h3>0</h3></div>
            <div className="operator comma" onClick={() => updateResult('.')}><h3>,</h3></div>
            <div className="equal" onClick={calcResult}><h3>=</h3></div>
          </div>
        </div>
    );
}
 
export default Keypad
