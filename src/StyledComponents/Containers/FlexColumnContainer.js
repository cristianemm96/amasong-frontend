import  styled  from "styled-components";

export const FlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    color: white;
    width: 100%;
    height: 240px;
    margin: 18px auto;
    background-color: black;
    padding-bottom: 15px;
    padding-top: 5px;
    border-radius: 10px;
    @media only screen and (max-width:470px) {
        width: 100%;
    }
`;
