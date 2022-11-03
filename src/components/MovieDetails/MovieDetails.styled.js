import styled from "styled-components";

export const MovieCard = styled.div`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.secondaryBg};
`

export const MovieImage = styled.img`
    width: 170px;
`
export const Title = styled.h2`
    display: flex;
    gap: ${p => p.theme.space[2]}px;
`

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
`
export const AdditionalInfoWrap = styled.ul`
    display: flex;
    gap: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`