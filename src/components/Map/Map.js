import React from 'react';
import './Map.scss'
import GoogleMapReact from 'google-map-react';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const VeloMap = () => <div className={'pointer'}><FontAwesomeIcon className={'map_marker'} icon={faMapMarkerAlt}/></div>;

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 52.1335482,
            lng: 21.0744158
        },
        zoom: 17
    };

    render() {
        return (
            <>
                <section className="timetable">
                    <p className="contact">
                        <span>dane kontaktowe</span><br/>
                        ul. Wąwozowa 2<br/>
                        02-796 Warszawa<br/>
                        <strong>tel. 22 126 35 83</strong><br/>
                        <strong>sklep@veloloco.pl</strong><br/>
                    </p>
                    <p className="opening_hours">
                        <span>godziny otwarcia:</span><br/>
                        poniedziałek-piątek: <strong>11:00-19:00</strong><br/>
                        sobota: <strong>10:00-15:00</strong><br/>
                        niedziela: <strong>nieczynne</strong><br/>
                    </p>
                </section>
                <div className="googlemap">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyAI6WJqTRvLdjNyTIkttjylCwN1QKTWoos"}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <VeloMap
                            lat={52.1335482}
                            lng={21.0744158}
                            text=""
                        />
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}


export default Map;