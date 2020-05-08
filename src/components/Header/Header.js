import React from 'react';
import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"
import Slider from "../Carousel/Carousel";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuActive: false
        };
    }

    toggleMenu = () => {
        this.setState({menuActive: !this.state.menuActive})
    };

    render() {
        return (
            <>
                <header>
                    <div className="logo">
                        <h1><a href={"/"}><span>velo</span>loco</a></h1>
                    </div>
                    <nav>
                        <FontAwesomeIcon className={'hamburger_icon'} icon={faBars} onClick={this.toggleMenu}/>
                        <ul className={this.state.menuActive ? "hamburger_links hamburger_links-visible" : "hamburger_links"}>
                            <FontAwesomeIcon className={'times_icon'} icon={faTimes} onClick={this.toggleMenu}/>
                            <div id={"where"}>dokąd zatem idziemy?</div>
                            <li>
                                <NavLink className={"link"} exact to={"/"} onClick={this.toggleMenu}>
                                    aktualności
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"link"} to={"/offer"} onClick={this.toggleMenu}>
                                    oferta
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"link"} to={"/bike_service"} onClick={this.toggleMenu}>
                                    serwis rowerów
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"link"} to={"/ski_service"} onClick={this.toggleMenu}>
                                    serwis zimowy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"link"} to={"/winter_storage"} onClick={this.toggleMenu}>
                                    przechowalnia
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"link"} to={"/map"} onClick={this.toggleMenu}>
                                    kontakt
                                </NavLink>
                            </li>
                            {/*<li>*/}
                            {/*    <NavLink className={"link"} to={"/contact"} onClick={this.toggleMenu}>*/}
                            {/*        kontakt*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}
