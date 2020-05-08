import React from 'react';
import './App.scss';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Offer from "../Offer/Offer";
import BikeService from "../BikeService/BikeService";
import SkiService from "../SkiService/SkiService";
import WinterStorage from "../WinterStoragre/WinterStorage";
import Map from "../Map/Map"
import Contact from "../Contact/Contact";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route exact path={'/offer'} component={Offer}/>
                    <Route exact path={'/bike_service'} component={BikeService}/>
                    <Route exact path={'/ski_service'} component={SkiService}/>
                    <Route exact path={'/winter_storage'} component={WinterStorage}/>
                    <Route exact path={'/map'} component={Map}/>
                    {/*<Route exact path={'/contact'} component={Contact}/>*/}
                    {/* inne */}
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

function NotFound() {
    return (
        <h1>404</h1>
    )
}

export default App;
