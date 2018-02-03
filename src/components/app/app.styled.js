import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
`; 

export const PropertiesContainer = styled.div`
  padding: 27px; 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 45px;
  max-width: 1300px;
  margin: 0 auto;
  animation: ${fadein} 2s; 
  @media (max-width: 425px) {
    padding: 5px; 
  }
`;

export const Spinner = styled.div`
  display: flex; 
  justify-content: center; 
  margin-top: 100px; 
`; 