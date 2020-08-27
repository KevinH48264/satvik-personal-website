import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// NavBar
export const NavbarContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: center;
    height: 80px;
    background-color: white;
    font-family: 'Helvetica Roman';
`

export const NavInner = styled.div`
    display: flex; 
    flex-wrap: nowrap; 
    width: 100%; 
    max-width: 960px; 
    justify-content: space-between; 
    align-items: center; 
`

export const NavbarLink = styled(NavLink)`
    padding: 0px 0.8vw; 
    color: black;
    text-decoration: none;
    font: normal normal normal 16px/1.2em helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
`

export const NavbarImage = styled.img`
    height: 1.6rem;
    padding: 0px 4px 0px 4px;
`
