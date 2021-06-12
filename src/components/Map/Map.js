import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
//import mapWindowHeight from '../../App';

//import * as branchesData from "../../response-data-export.json";

//console.log(branchesData);

const containerStyle = {
    width: '100%',
    height: '100%',
    margin: 'auto',
};

//let center = {
//    lat: 49.511791,
//    lng: 31.339463,
//49.511791, 31.339463
//};

//console.log(document.getElementsByClassName('App-map')[0].clientHeight);
//let mapWindowHeight = document.getElementsByClassName('App-map')[0].clientHeight;

//let zoom = mapWindowHeight < 300 ? 4 : 6;
//let zoom = 5;

/* const position = {
    lat: 50.381280920287864,
    lng: 30.492463977490978,
} */

const onLoad = marker => {
    //console.log('marker: ', marker)
}
/* function GetMarkers(props) {
    //console.log(props.branches[0])
    return (
        <>
            {
                props.branches.map(item => <Marker key={item.id} branch={item} position={{
                    'lat': Number(item.geocoords.split('|')[0]),
                    'lng': Number(item.geocoords.split('|')[1])
                }} //onClick={() => {
                //setSelected(item);
                //}}
                ></Marker>)

            }
        </>
    )
} */

function Map(props) {
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [zoom, setZoom] = useState(5);
    const [center, setCenter] = useState({
        lat: 49.511791,
        lng: 31.339463,
    });

    useEffect(() => {
        // Зменшимо зум карти для мобільних девайсів
        let mapWindowHeight = document.getElementsByClassName('App-map')[0].clientHeight;
        setZoom(mapWindowHeight < 300 ? 4.5 : 6)
    });

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCC_7697xLCft6wKDe-rawy-F7AhLfHFow"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                onClick={(event) => console.log(event)}
            >
                {props.branches.map(item => (
                    <Marker
                        key={item.id}
                        branch={item}
                        position={{
                            'lat': Number(item.geocoords.split('|')[0]),
                            'lng': Number(item.geocoords.split('|')[1])
                        }}
                        onClick={() => {
                            setSelectedBranch(item);
                        }}

                        icon={
                            { url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }
                        }
                    />
                ))}
                {/* icon: {
        anchor: new google.maps.Point(30, 30.26),
        size: new google.maps.Size(60,30.26),
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg'
      } */}
                {selectedBranch && (
                    <InfoWindow
                        position={{
                            'lat': Number(selectedBranch.geocoords.split('|')[0]),
                            'lng': Number(selectedBranch.geocoords.split('|')[1])
                        }}
                        onCloseClick={() => {
                            setSelectedBranch(null);
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: selectedBranch.title }}></div></InfoWindow>
                )
                }
            </GoogleMap>
        </LoadScript >
    );

}



export default React.memo(Map)