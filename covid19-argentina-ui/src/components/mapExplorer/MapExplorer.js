import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Map from './Map/Map';
import MapStats from './mapStats/MapStats';
import argMap from './assets/map.json';
import S from './styles';

const MapExplorer = () => {
  const provincesData = useSelector((state) => state.country.provinces);
  const [hovered, setHovered] = useState('Provincia de Buenos Aires');

  const layerProps = {
    onMouseOver: ({ target }) => {
      setHovered(target.attributes.name.value);
    },
  };

  const parsedSVGData = {
    ...argMap,
    layers: argMap.layers.reduce((acc, layer) => {
      const { cases } = provincesData.find((province) => province.name.includes(layer.name)) || 0;
      const newLayer = {
        ...layer,
        cases,
      };
      if (layer.name.includes(hovered)) {
        return [...acc, newLayer];
      }
      return [newLayer, ...acc];
    }, []),
  };

  return (
    <S.Container>
      <MapStats provincesData={provincesData} hovered={hovered} />
      <S.MapContainer>
        <Map {...parsedSVGData} hovered={hovered} layerProps={layerProps} />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapExplorer;
