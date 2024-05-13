import styled from "styled-components";
import Checkbox from "./checkbox";
import ColorOptions from "./colorOptions";
import SizeOptions from "./sizeOption";
import DesignOptions from "./designOptions";
import Button from "./buttons";
import CateOptions from "./cateOptions";
import { useState } from "react";

const Heading = styled.h2`
    color: #b6ded9;
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      margin-bottom: 20px;
      margin-top: 12px;
    }
`;

const ButtonsWrapper = styled.div`
display: flex;
gap: 10px;
margin-top: 20px;
`;

const Properties = styled.div`

 max-height: 400px;
 overflow-y: scroll;
 scrollbar-width: thin; 
    scrollbar-color: #888 transparent;
 @media screen and (max-width: 600px) {
    
      max-height: 220px;
    }   
`;

const PropTitle = styled.h3`
    color: #b6ded9;
    margin: 10px 0;
`;

const FilterContainer = styled.div`
    
    background-color: #222;
    border-radius: 10px;
    padding: 30px;
    color: #b6ded9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 30px;
    height: 550px;
    @media screen and (max-width: 600px) {
      padding: 0 20px;
      ${props => props.filterActive ? `
    height: 350px;
 `:`
   height: 50px;
 `}
    }
`;

const FilterInfo = styled.div`
    
    @media screen and (max-width: 600px) {
      ${props => props.filterActive ? `
        display: block;
        `:`
          display: none;
        `}
    }
    
`;

const FilterIcon = styled.div`
    
    border: solid 1px #555;
    display: none;
    align-items: center;
    padding: 2px;
    border-radius: 5px;
    svg{
      width: 30px;
    }
    @media screen and (max-width: 600px) {
      display: flex;
      svg{
      width: 20px;
    }
    }
`;


export default function FilterBox(params) {
  const [filterActive,setfilterActive] = useState(false);

    return(
        <FilterContainer filterActive={filterActive}>
            <Heading>Filter
              <FilterIcon onClick={()=>setfilterActive(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
            </FilterIcon>
            </Heading>
            <FilterInfo filterActive={filterActive}>
            <Properties>
              <div>
            <PropTitle>Category</PropTitle>
            <CateOptions/>
            </div>
            <div>
            <PropTitle>Color</PropTitle>
            <ColorOptions/>
            </div>
            <div>
            <PropTitle>Size</PropTitle>
            <SizeOptions/>
            </div>
            <div>
            <PropTitle>Design</PropTitle>
            <DesignOptions/>
            </div>
            </Properties>
            <ButtonsWrapper>
              <Button primary={1} >Clear</Button>
              <Button primary={1} >Fliter</Button>
            </ButtonsWrapper>
            </FilterInfo>
           </FilterContainer>
    )
};
