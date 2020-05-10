import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Map from './Map/Map';
import MapStats from './mapStats/MapStats';
import argMap from './assets/map.json';
import S from './styles';

const defaultProvince = 'Provincia de Buenos Aires';

const MapExplorer = () => {
  /**
   * @type {provincesData}
   */
  const provincesData = useSelector((state) => state.country.provinces);

  const [hovered, setHovered] = useState(defaultProvince);

  const onMouseOver = ({ target }) => {
    setHovered(target.attributes.name.value);
  };

  /**
   * Move the hovered element to the final of the array in order to
   * show the border correctly and add the current cases to each layer
   * @type {mapData}
   */
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
        <Map handleMouseOver={onMouseOver} parsedSVGData={parsedSVGData} hovered={hovered} />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapExplorer;
