import styled from "styled-components";

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${p => p.theme.space[3]}px;
`
export const MovieItem = styled.li`
    font-size: ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.preBold};
    cursor: pointer;
`
export const MovieTitle = styled.p`
    color: ${p => p.theme.colors.text}
`