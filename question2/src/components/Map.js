import { useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

const Map = ({ locationParams }) => {
  const center = useMemo(
    () => ({
      lat: locationParams.latitude,
      lng: locationParams.longitude,
    }),
    [locationParams.latitude, locationParams.longitude]
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
