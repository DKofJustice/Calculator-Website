const Settings = ({ setSettingsMenu, colorChange }) => {
    return (
        <div className="settings">
            <div className="close-icon"
               onClick={() => setSettingsMenu(false)}
            >
                <p>X</p>
            </div>

            <div className="color-title">
                <h3>Pick a Color</h3>
            </div>

            <div className="colors">
                <div 
                  className="color base"
                  onClick={() => colorChange("base")}
                ></div>
                <div 
                  className="color red"
                  onClick={() => colorChange("red")}
                ></div>
                <div
                  className="color white"
                  onClick={() => colorChange("white")}
                ></div>
            </div>
        </div>
    );
}
 
export default Settings;