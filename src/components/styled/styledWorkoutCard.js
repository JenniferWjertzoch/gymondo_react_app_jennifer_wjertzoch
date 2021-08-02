import styled from "styled-components";

// Styled component named StyledWorkoutCard
const StyledWorkoutCard = styled.div`
    border: 2px solid #d0d4d7;
    border-radius: 5px;
    color: #686e74;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 1rem;
    .workout-category {
        background-color: #ff7f65;
        border-radius: 12px;
        color: white;
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        width: 30px;
    }
`;

export default StyledWorkoutCard;