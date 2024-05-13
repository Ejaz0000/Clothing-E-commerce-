"use client"

import styled from "styled-components"

const StyledDiv = styled.div`
    height: 100%;
`;


export default function MainContent({children}) {
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    )
};
