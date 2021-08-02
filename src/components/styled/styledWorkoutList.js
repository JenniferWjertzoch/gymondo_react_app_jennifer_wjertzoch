import styled from "styled-components";

// Styled component named StyledWorkoutList
const StyledWorkoutList = styled.div`
    .cards {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        grid-gap: 2rem;
        padding: 2rem 1rem;
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
            padding: 5rem 2.5rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export default StyledWorkoutList;