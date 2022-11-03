import styled from "styled-components";

export const CastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${p => p.theme.space[3]}px;
`