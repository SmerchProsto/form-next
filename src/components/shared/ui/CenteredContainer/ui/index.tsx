import styled from "styled-components";
import {ReactNode} from "react";

const Centered = styled.div`
    width: 85%;
    margin: 0 auto;
`;

export default function CenteredContainer({children}: {children: ReactNode}) {
    return <Centered className='centeredContainer'>{children}</Centered>
}