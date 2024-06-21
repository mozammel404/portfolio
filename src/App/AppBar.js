import './AppBar.css'
import { Link } from "react-router-dom";

function toggleAppBar() {
    let menu = document.querySelector(".menu input");
    let appbar = document.getElementById("appbar");
    if (!menu.checked) {
        appbar.style.width = "250px";
        appbar.style.boxShadow = "whitesmoke -150px 0 450px 0px";
    } else {
        appbar.style.width = 0;
        appbar.style.boxShadow = "none";
    }
}

function shutMenu() {
    let menu = document.querySelector(".menu input");
    menu.checked = false;
    let appbar = document.getElementById("appbar");
    appbar.style.width = 0;
    appbar.style.boxShadow = "none";
}

const AppBar = () => {
    return (
        <>
            <label className="menu">
                <input type="checkbox" />
                <svg viewBox="0 0 32 32" onClick={() => toggleAppBar()}>
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <div className="appbar" id='appbar'>
                <div className="links">
                    <Link to="/" onClick={() => shutMenu()}>home</Link>
                    <Link to="/about-me" onClick={() => shutMenu()}>about me</Link>
                    <Link to="/projects" onClick={() => shutMenu()}>projects</Link>
                </div>
                {/* An anchor tag to download cv */}
            </div>
        </>
    );
}

export default AppBar;