import React from 'react'
import {
  NavbarLink, NavInner, NavbarContainer,
} from './styles'

const NavBar = () => (
  <NavbarContainer>
    <NavInner>
      <p style={{ fontSize: '36px ', fontWeight: 'bold', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>SATVIK SETHI</p>
      <div className="menu" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/">Home</NavbarLink>
        <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/ventures">Ventures</NavbarLink>
        <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/press">Press</NavbarLink>
        <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/contact">Contact</NavbarLink>
        {/* <a href="https://twitter.com/projectcovid" rel="noopener noreferrer" target="_blank">
                <img style={{ height: '1rem', padding: '0px 1vw' }} src="./twitter.png" alt="" />
              </a> */}
      </div>
    </NavInner>
  </NavbarContainer>
)

export default NavBar
