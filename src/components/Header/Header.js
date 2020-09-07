import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import react_logo from '../../assets/images/react.svg';

const Header = () => {
    return (
        <div>

            <header>
                <div className="container">
                    <div>
                        <img className={classes.logo} src={logo} alt="Logo"/>
                    </div>
                    <div className="textRight">
                        <img src={react_logo} alt="React" className={classes.reactLogo}/><strong>React</strong>
                    </div>
                </div>
            </header>

        </div>
    )
};

export default Header