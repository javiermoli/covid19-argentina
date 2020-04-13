import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Map from './Map/Map';
import MapStats from './mapStats/MapStats';
import argMap from './assets/map.json';
import './styles.scss';

const MapExplorer = () => {
  const provincesData = useSelector((state) => state.country.provinces);
  const [hovered, setHovered] = useState('Buenos Aires');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
  };

  const parsedSVGData = {
    ...argMap,
    layers: argMap.layers.map((layer) => {
      const { cases } = provincesData.find((province) => province.name.includes(layer.name)) || 0;
      return {
        ...layer,
        cases,
      };
    }),
  };

  return (
    <div className="map-explorer">
      <MapStats provincesData={provincesData} hovered={hovered} />
      <Map {...parsedSVGData} layerProps={layerProps} />
    </div>
  );
};

export default MapExplorer;
