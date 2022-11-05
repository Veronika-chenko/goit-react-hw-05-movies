import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    color: ${p => p.theme.colors.text};
`

export const Header = styled.header`
    /* font-size: ${p => p.theme.fontSizes.m}px; */
    border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.secondaryBg};
`

export const Nav = styled.nav`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`

export const StyledLink = styled(NavLink)`
    padding: 16px 4px;
    color: ${p => p.theme.colors.text};
    &.active {
        color: ${p => p.theme.colors.accent};
    }
`
export const Layout = styled.main`
    padding-top: ${p => p.theme.space[4]}px;
`