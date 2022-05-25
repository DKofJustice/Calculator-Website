import SvgSettingsIcon from '../Assets/SVGIconComponents/SettingsIcon';
import SvgCalculatorLogo from '../Assets/SVGIconComponents/CalculatorLogo';

const Header = ({ setSettingsMenu, color }) => {
    return (
        <header>

          <div className={`settings-icon settings-${color}`}
            onClick={() => setSettingsMenu(true)}
          >
            <SvgSettingsIcon />
          </div>

          <div className={`logo logo-${color}`}>
            <SvgCalculatorLogo />
          </div>
        </header>
    );
}
 
export default Header;