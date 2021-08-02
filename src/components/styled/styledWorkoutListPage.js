import styled from "styled-components";

// Styled component named StyledWorkoutListPage
const StyledWorkoutListPage = styled.div`
    border: 2px solid #d0d4d7;
    border-radius: 5px;
    color: #686e74;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 2rem;
    button {
        border: none;
        border-radius: 8px;
        color: #686e74;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        padding: 0.625rem 1.563rem;
        text-align: center;
        text-decoration: none;
        :hover {
            background-color: #b9c2c8;
            transition: 0.3s;
        }
    }
`;

export default StyledWorkoutListPage;