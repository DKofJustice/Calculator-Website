import SvgSettingsIcon from '../Assets/SVGIconComponents/SettingsIcon';

const Header = ({ setSettingsMenu, color }) => {

    let settingsMenuWindow = document.querySelector('.settings');

    let settingsMenuToggle = () => {
      setSettingsMenu(true);

      settingsMenuWindow.classList.add('settings-toggle-transition');
      console.log('it works', settingsMenuWindow)
    }

    return (
        <header>

          <div className={`settings-icon settings-${color}`}
            onClick={settingsMenuToggle}
          >
            <SvgSettingsIcon />
          </div>
        </header>
    );
}
 
export default Header;