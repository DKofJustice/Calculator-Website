import Header from './Components/Header';
import MainCalculator from './MainCalculator';

const CalculatorWindow = ({ setSettingsMenu, color }) => {
    return (
        <div className="calc-window">
            <Header 
                setSettingsMenu={setSettingsMenu}
                color={color}
            />

            <MainCalculator
                color={color}
            />
        </div>
    );
}
 
export default CalculatorWindow;