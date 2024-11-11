import styled from "styled-components";

const FeatureBlock = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

export default function Footer() {
    return (
        <FeatureBlock>
            <h2>Some company 2024</h2>
        </FeatureBlock>
    )
}