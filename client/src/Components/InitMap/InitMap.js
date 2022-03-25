
import React, { useEffect, useRef, useCallback } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { locations } from './geolocations';
import './InitMap.css';

const InitMap = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1cmFiaHNpbmdoMDA0IiwiYSI6ImNsMGdjZWQxcjExY2szams2ZG9ieDloYXEifQ.q965bYVjp2My5eXVtrr1mQ';

  useEffect(() => {
    if (map.current) return; 

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 10,
      center: [3.361881, 6.672557],
    });

    // clean up on unmount
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (!map.current) return; 


    locations.map((marker) => {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'circle';

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<p>' + marker.properties.description + '</p>')
        )
        .addTo(map.current);

      map.current.on('load', async () => {
        map.current.flyTo({
          center: marker.center,
        });
      });
    });
  });

  return (
    <div>
      <div ref={mapContainerRef} className='map-container' />
    </div>
  );
};

export default InitMap;