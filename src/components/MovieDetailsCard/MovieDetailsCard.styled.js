import styled from "styled-components";

export const CardInnerWrap = styled.div`
    padding-bottom: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.secondaryBg};
   
    @media screen and (min-width: 450px) {
        display: flex;
        gap: ${p => p.theme.space[4]}px;
    }
`
export const MovieImage = styled.img`
    width: 170px;
    height: 255px;

    @media screen and (max-width: 449.98px) {
        float: left;
        margin-right: ${p => p.theme.space[4]}px;
    }
`
export const MovieTitle = styled.h2`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;

    @media screen and (min-width: 450px) {
        flex-direction: row;
        margin-bottom: ${p => p.theme.space[0]}px;
    }

`
export const InfoWrap = styled.div`
    @media screen and (min-width: 450px) {
        display: flex;
        flex-direction: column;
        gap: ${p => p.theme.space[3]}px;
    }
`
export const Title = styled.h3`
    @media screen and (max-width: 449.98px) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`
export const Text = styled.p`
    @media screen and (max-width: 449.98px){
        &:not(:last-child) {
            margin-bottom: ${p => p.theme.space[3]}px;
        }
    }
`
