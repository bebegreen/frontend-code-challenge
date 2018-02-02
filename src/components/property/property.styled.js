import styled from 'styled-components';

export const PropertyContainer = styled.div`
  border: 1px solid #e7e7e7; 
`;

export const Image = styled.div`
  background: url(${({ url }) => url}) no-repeat center center;
  background-size: cover; 
  width: 100%; 
  height: 220px;
    
`;

export const PropertyData = styled.div`
  padding: 30px; 
`;

export const Title = styled.div`
  font-size: 13px; 
  color: #5f5f5f;
  font-weight: 700;  
  height: 65px; 
`;

export const Address = styled.div`
  font-size: 11px; 
  color: #bcbcbc; 
  font-weight: 700; 
  margin-bottom: 45px;    
`;

export const PriceAndSize = styled.div`
  display: flex; 
  justify-content: space-between; 
  height: 24px; 
  align-items: center; 
`;

export const Price = styled.div`
  color: #1d1d1d; 
  font-weight: 700;   
  font-size: 14px;    
`;

export const Size = styled.div`
  color: #5d5d5d; 
  font-size: 14px;
  display: flex;  
  height: 100%; 
  align-items: center; 
`;

export const Rooms = styled.div`
  padding: 0 13px; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  border-right: 1px solid lightgray;
`;

export const Meters = styled.div`
  padding: 0 13px; 
`;