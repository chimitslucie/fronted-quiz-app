import sunDarkIcon from "../Assets/images/icon-sun-dark.svg";
import moonDarkIcon from "../Assets/images/icon-moon-dark.svg";

function BtnTheme() {
    return (
        <div className="btnTheme">
            <img src={sunDarkIcon} alt="sun-icon" className="btnThemeIcon btnThemeDarkSun" />
            <div className="btnThemeContent"></div>
            <img src={moonDarkIcon} alt="moon-icon" className="btnThemeIcon btnThemeDarkMoon" />
        </div>
    )
}

export default BtnTheme