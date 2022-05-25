import Settings from './Components/Settings';
import CalculatorWindow from "./CalculatorWindow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [color, setColor] = useState(() => {
    const getColor = localStorage.getItem("color");

    return getColor !== null
      ? JSON.parse(getColor)
      : "base"
  });

  const colorChange = (colorTheme) => {
    setColor(colorTheme);
  };

  useEffect(() => {
    localStorage.setItem('color', JSON.stringify(color));
  }, [color]);

  console.log(localStorage, color);

  return (
    <Router>
    <div className={`App App-${color}`}>
      <div className="container">
          {settingsMenu === false && (
            <CalculatorWindow 
            setSettingsMenu={setSettingsMenu}
            color={color}
            />
          )}
          {settingsMenu === true && (
            <Settings 
              setSettingsMenu={setSettingsMenu}
              colorChange={colorChange}
            />
          )}
      </div>
    </div>
    </Router>
  );
}

export default App;
