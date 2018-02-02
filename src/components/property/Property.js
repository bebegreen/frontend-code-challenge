import React from 'react';
import {
  PropertyContainer,
  PropertyData,
  Image,
  Title,
  Address,
  PriceAndSize,
  Price,
  Size,
  Rooms, 
  Meters
} from './property.styled';

const Property = ({ property }) => {
  const {
    title,
    advertisementAssets,
    realestateSummary: {
      address: { postalCode, city },
      numberOfRooms,
      space
    },
    advertisementPrice: { baseRent }
  } = property;


  return (
    <PropertyContainer>
     
      <Image url={advertisementAssets[0].advertisementThumbnails.inventory_m.url} />

      <PropertyData>
        <Title> {title} </Title>

        <Address>
          {postalCode + ' ' + city}
        </Address>

        <PriceAndSize>
          <Price>{baseRent}.00 &euro;</Price>
          <Size>
            <Rooms>
              {numberOfRooms} Zimmer
            </Rooms>
            <Meters>
              ab {space.toFixed(0)} m2
            </Meters>
          </Size>
        </PriceAndSize>
      </PropertyData>

    </PropertyContainer>
  );

}
export default Property;