import styled from "styled-components";

export const RecomendedContainerStyled = styled.div`
  width: 95%;
  margin: 20px auto;
  display: inline-flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  padding-top:40px ;
  ::-webkit-scrollbar{
    background-color: black;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #49c5b6;
    width: 80px;
  }
`;
