import { StyleSheet } from 'react-native';

import Header from '../components/Header';

import { useState } from 'react';

import MapView, { Marker } from 'react-native-maps';

import { places } from '../data/places';

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <>
      <MapView
        style={styles.map}
        userInterfaceStyle="dark"
        initialRegion={{
          latitude: 54.4195,
          longitude: 8.574,
          latitudeDelta: 0.52,
          longitudeDelta: 0.52,
        }}
      />
      {places.map((marker, idx) => (
        <Marker
          key={idx}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          onPress={() => setSelectedMarker(marker)}
        ></Marker>
      ))}
      <Header title={'German Sea Map'} headerStyles={{}} />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Map;
