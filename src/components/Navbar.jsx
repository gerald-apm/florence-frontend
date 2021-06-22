import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import './css/Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            button: true,
        };
    }
    render() {
        const handleNav = () => this.setState({click: !this.state.click});
        const closeMobileMenu = () => this.setState({click: false});
        const showButton = () => {
            if(window.innerWidth<= 960) this.setState({button: false});
            else this.setState({button: true});
        };
        window.addEventListener('resize', showButton);
        return (
           <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Florence <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick={handleNav}>
                        <i className={this.state.click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>
                    <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {this.state.button && <Button buttonStyle="btn--outline" buttonSize="btn--large">Testing</Button>}
                </div>
            </nav>
           </>
        )
    }
}
