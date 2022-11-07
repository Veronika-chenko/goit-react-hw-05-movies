import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    color: ${p => p.theme.colors.text};
    @media screen and (max-width: 767.98px){
        max-width: 450px;
    }
    @media screen and (min-width: 768px){
        max-width: 768px;
    }
    @media screen and (min-width: 1280px){
        max-width: 1280px;
    }
`
export const Header = styled.header`
    border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.secondaryBg};
`
export const Nav = styled.nav`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`
export const StyledLink = styled(NavLink)`
    padding: 16px 4px;
    font-size: ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.preBold};
    color: ${p => p.theme.colors.text};
    &.active {
        color: ${p => p.theme.colors.accent};
    }
`
export const Layout = styled.main`
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`
export const PageTitle = styled.h1`
    font-size: ${p => p.theme.fontSizes.l}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`