import styled from "styled-components";

export const MovieList = styled.ul`
    @media screen and (max-width: 767.98px){
        display: flex;
        flex-direction: column;
        gap: ${p => p.theme.space[3]}px;
    }
    
    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${p => p.theme.space[3]}px; 
    }

    @media screen and (min-width: 1280px){
        grid-template-columns: repeat(6, 1fr);
    }
`
export const MovieItem = styled.li`
    font-size: ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.preBold};
    
    cursor: pointer;
    transition: box-shadow 250ms linear;
    &:hover, 
    &:focus {
        box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);
    }
`
export const ImageWrap = styled.div`
    @media screen and (min-width: 768px) {
        height: 376px;
    }
    @media screen and (min-width: 1280px) {
        height: 310px;
    }
    & img {
        object-fit: cover;
        display: block;
        height: 100%;
        width: 100%;
    }
`

export const MovieTitle = styled.p`
    display: flex;
    align-items: center;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    color: ${p => p.theme.colors.text}
`