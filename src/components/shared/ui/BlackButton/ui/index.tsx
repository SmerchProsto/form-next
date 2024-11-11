import {ReactNode} from "react";
import styled from "styled-components";

const StylizedDiv = styled.div`
    width: 200px;
    padding: 10px;
    color: #ffffff;
    text-align: center;
    background: rgb(44, 44, 44);
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background: #747171FF;
    }
    
    &:active {
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
        
    }
    
    @media (max-width: 376px) {
        width: 150px;
    }
`;

export default function BlackButton({children}: {children: ReactNode|string}) {
    return <StylizedDiv>{children}</StylizedDiv>;
}