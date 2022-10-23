import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 38px;
  margin-bottom: 25px;
`;
