import styled from "styled-components";

export const ReviewList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[4]}px;
`

export const ReviewItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;
`