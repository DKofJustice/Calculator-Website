import Settings from './Components/Settings';
import { useState, useEffect } from 'react';
import MainCalculator from './MainCalculator';

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


  return (
    <div className={`App App-${color}`}>
      <div className="container">
          {settingsMenu === false && (
            <MainCalculator 
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
  );
}

export default App;
