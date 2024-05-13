import styled from "styled-components"

const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 auto;
    height: 100%;
    @media screen and (max-width: 600px) {
        padding: 0 10px;
    }
`;

export default function Center({children}) {
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    )
};
