import React from 'react'
import {
  InfoContainer, InfoInner, Image, FeaturesContainer, Feature,
} from './styles'

const Featured = () => (
  <InfoContainer>
    <InfoInner style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif' }}>
      <p style={{ fontSize: '40px', color: '#95C6EC' }}>Featured By</p>
      <FeaturesContainer>
        <Feature>
          <Image src={`${process.env.PUBLIC_URL}/mha.png`} alt="" />
          <Image style={{ width: '200px' }} src={`${process.env.PUBLIC_URL}/vice.png`} alt="" />
        </Feature>
        <Feature>
          <Image src={`${process.env.PUBLIC_URL}/ttoi.jpg`} alt="" />
          <Image style={{ paddingBottom: '10px' }} src={`${process.env.PUBLIC_URL}/mashable.png`} alt="" />
        </Feature>
        <Feature>
          <Image src={`${process.env.PUBLIC_URL}/who.png`} alt="" />
          <Image style={{ paddingLeft: '30px', paddingBottom: '10px' }} src={`${process.env.PUBLIC_URL}/unicef.png`} alt="" />
        </Feature>
      </FeaturesContainer>
    </InfoInner>
  </InfoContainer>
)

export default Featured
