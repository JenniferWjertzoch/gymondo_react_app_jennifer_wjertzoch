import styled from "styled-components";

// Styled component named StyledHeader
const StyledHeader = styled.div`
    background-color: #b4a4a0;
    color: white;
    padding: 2rem;
    z-index: 1;
    .header {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }
    .header-logo__svg {
        width: 159px;
        height: 43px;
    }
`;

export default StyledHeader;