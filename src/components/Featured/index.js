import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import {
  InfoContainer, InfoInner, Image, FeaturesContainer, Feature, MobileInfoInner, MobileFeaturesContainer, MobileImage,
} from './styles'

const Featured = () => (
  <div>
    <InfoContainer>
      <BrowserView>
        <InfoInner>
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
      </BrowserView>
      <MobileView>
        <MobileInfoInner>
          <p style={{ fontSize: '40px', color: '#95C6EC' }}>Featured By</p>
          <MobileFeaturesContainer>
            <MobileImage src={`${process.env.PUBLIC_URL}/mha.png`} alt="" />
            <MobileImage style={{ width: '200px' }} src={`${process.env.PUBLIC_URL}/vice.png`} alt="" />

            <MobileImage src={`${process.env.PUBLIC_URL}/ttoi.jpg`} alt="" />
            <MobileImage style={{ paddingBottom: '10px' }} src={`${process.env.PUBLIC_URL}/mashable.png`} alt="" />

            <MobileImage src={`${process.env.PUBLIC_URL}/who.png`} alt="" />
            <MobileImage style={{ paddingLeft: '30px', paddingBottom: '10px' }} src={`${process.env.PUBLIC_URL}/unicef.png`} alt="" />

          </MobileFeaturesContainer>
        </MobileInfoInner>

      </MobileView>
    </InfoContainer>

  </div>

)

export default Featured
