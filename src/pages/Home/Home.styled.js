import styled from "styled-components";

export const TopTitle = styled.h1`
    font-size: ${p => p.theme.fontSizes.l}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`

export const MovieList = styled.ul`
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${p => p.theme.space[3]}px;
`

export const MovieItem = styled.li`
    font-size: ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.preBold};
    cursor: pointer;
`