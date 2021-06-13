import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    margin: 'auto',
};

function Map(props) {
    const [selectedBranch, setSelectedBranch] = useState(null);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCC_7697xLCft6wKDe-rawy-F7AhLfHFow"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={props.center}
                zoom={props.zoom}
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