import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopTitle = styled.h3`
    margin-bottom: ${p => p.theme.space[3]}px;
`
export const AdditionalInfoWrap = styled.ul`
    display: flex;
    gap: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`
export const GoBackLink = styled(Link)`
    display: inline-block;
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.text};
    font-style: italic;
    transition: color 250ms linear;
    &:hover {
        color: ${p => p.theme.colors.accent};
    }
`
export const StyledLink = styled(NavLink)`
    color: ${p => p.theme.colors.text};
    &.active {
        color: ${p => p.theme.colors.accent};
    }
`