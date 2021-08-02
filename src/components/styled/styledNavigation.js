import styled from "styled-components";

// Styled component named StyledNavigation
const StyledNavigation = styled.nav`
    display: grid;
    list-style:none;
    padding: 1rem 2rem;
    background-color: #f8f6f3;
    @media (min-width: 992px) {
        display: flex;
        justify-content: center;
    }
    .select {
        background-color: white;
        color: black;
        float: left;
        padding: 0.5rem 1rem;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;
        border-radius: 12px;
        margin-bottom: 1rem;
        @media (min-width: 992px) {
            margin-right: 1rem;
        }
    }
    .select select {
        border: none;
    }
`;

export default StyledNavigation;