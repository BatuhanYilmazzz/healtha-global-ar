import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => (
  <div>
    <img
      src='/images/marker.png'
      alt='marker'
      style={{ height: '30px', backgroundColor: 'transparent' }}
    />
  </div>
);
function Map() {
  const center = {
    lat: 40.912522,
    lng: 42.874365,
  };
  return (
    <div style={{ height: '40vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAF8K2IZ5Ioaj13Vn9wPJ2lgQ9M0-7Uz0I' }}
        defaultCenter={center}
        defaultZoom={11}
      >
        <AnyReactComponent lat={40.912522} lng={42.874365} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
