import React, { useEffect, useRef } from "react";
import logoK from '../assets/img/k-32.png'
const Header = () => {
    const header = useRef(null);
    const mobile = useRef(null);
    useEffect(() => {
        // console.log("header: ", header.current);
        var h = header.current;
        var m = mobile.current;
        var valueHeader = h.clientHeight;
        m.onclick = function () {
            var isClose = h.clientHeight === valueHeader;
            if (isClose) {
                h.style.height = "auto";
            } else {
                h.style.height = null;
            }
        };
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];

            menuItem.onclick = function (event) {
                var isMenuBar =
                    this.nextElementSibling &&
                    this.nextElementSibling.classList.contains("subnav");
                if (isMenuBar) {
                    event.preventDefault();
                } else {
                    h.style.height = null;
                }
            };
        }

    });
    return (
        <div id="header" ref={header}>
            {/* Begin: nav  */}
            <ul id="nav">
                <li className="ngu-logo">
                    <a href="#"><img className="img-logo" src={logoK} alt="logo" /></a>
                </li>
                <li><a href="#band">BAND</a></li>
                <li><a href="#tour">TOUR</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li>
                    <a className="kk" href="#">MORE <i className="fas fa-caret-down" /></a>
                    <ul className="subnav kk">
                        <li><a href="#">Merchandisa</a></li>
                        <li><a href="#">Extras</a></li>
                        <li><a href="#">Media</a></li>
                    </ul>
                </li>
            </ul>
            {/* End: nav  */}
            {/* Begin: search button  */}
            <div className="search">
                <i className="fas fa-search" />
            </div>
            <div id="mobile-bar" className="barr" ref={mobile}>
                <i className="fas fa-bars" />
            </div>
            {/* End: search button  */}
        </div>
    );
}

export default Header;