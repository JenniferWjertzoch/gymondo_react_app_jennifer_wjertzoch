import styled from "styled-components";

// Styled component named StyledRPagination
const StyledPagination = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        list-style:none;
    }
    .pagination li {
        border: 1px solid #ddd;
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
    }
    .pagination button {
        background-color: transparent;
        border: none;
    }
`;

export default StyledPagination;