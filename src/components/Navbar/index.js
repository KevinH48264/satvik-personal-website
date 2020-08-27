import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import {
  NavbarLink, NavInner, NavbarContainer, NavbarImage,
} from './styles'

const NavBar = () => (
  <NavbarContainer>
    <BrowserView>
      <NavInner>
        <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/">
          <p style={{ fontSize: '36px ', fontWeight: 'bold', fontFamily: 'Helvetica Roman' }}>SATVIK SETHI</p>
        </NavbarLink>
        <div
          className="nav"
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} exact to="/">Home</NavbarLink>
          <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/ventures">Ventures</NavbarLink>
          <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/press">Press</NavbarLink>
          {/* <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/contact">Contact</NavbarLink> */}
          <a href="https://www.linkedin.com/in/satviksethi/" rel="noopener noreferrer" target="_blank">
            <NavbarImage style={{ paddingLeft: '1vw' }} src={`${process.env.PUBLIC_URL}/linkedin.webp`} alt="" />
          </a>
          <a href="https://www.instagram.com/satviksethi/" rel="noopener noreferrer" target="_blank">
            <NavbarImage src={`${process.env.PUBLIC_URL}/insta.webp`} alt="" />
          </a>
          <a href="https://twitter.com/satsethi14" rel="noopener noreferrer" target="_blank">
            <NavbarImage src={`${process.env.PUBLIC_URL}/twitter.webp`} alt="" />
          </a>
          <a href="mailto:satvik@runawayapp.com" rel="noopener noreferrer" target="_blank">
            <NavbarImage src={`${process.env.PUBLIC_URL}/mailLogo.jpg`} alt="Mail Image" />
          </a>
        </div>
      </NavInner>
    </BrowserView>
    <MobileView>
      <NavInner style={{ width: '100%' }}>
        <NavbarLink
          style={{
            color: 'black', fontSize: '36px ', fontWeight: 'bold', fontFamily: 'Helvetica Roman', textDecoration: 'none', paddingLeft: '20px',
          }}
          to="/"
        >
          <p style={{
            height: '100%',
          }}
          >
            SATVIK
            SETHI
          </p>
        </NavbarLink>
        <div
          className="nav"
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '70px',
          }}
        >
          <div>
            <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} exact to="/">Home</NavbarLink>
            <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/ventures">Ventures</NavbarLink>
            <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/press">Press</NavbarLink>
          </div>
          <div>
            {/* <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/contact">Contact</NavbarLink> */}
            <a href="https://www.linkedin.com/in/satviksethi/" rel="noopener noreferrer" target="_blank">
              <NavbarImage style={{ paddingLeft: '1vw' }} src={`${process.env.PUBLIC_URL}/linkedin.webp`} alt="" />
            </a>
            <a href="https://www.instagram.com/satviksethi/" rel="noopener noreferrer" target="_blank">
              <NavbarImage src={`${process.env.PUBLIC_URL}/insta.webp`} alt="" />
            </a>
            <a href="https://twitter.com/satsethi14" rel="noopener noreferrer" target="_blank">
              <NavbarImage src={`${process.env.PUBLIC_URL}/twitter.webp`} alt="" />
            </a>
            <a href="mailto:satvik@runawayapp.com" rel="noopener noreferrer" target="_blank">
              <NavbarImage src={`${process.env.PUBLIC_URL}/mailLogo.jpg`} alt="Mail Image" />
            </a>
          </div>

        </div>
      </NavInner>
    </MobileView>

  </NavbarContainer>
)

export default NavBar
