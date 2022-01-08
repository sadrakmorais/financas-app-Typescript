import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
`;
export const Tittle = styled.div`
  text-align:center;
  font-weight: bold;
  color:#313642;
  margin-bottom:5px;
  font-family: 'Roboto', sans-serif;

`;
export const Info = styled.div<{color?:string}>`
  text-align:center;
  font-weight: bold;
  color:${props => props.color ?? "#111"};
  font-family: 'Nunito', sans-serif;
`;
