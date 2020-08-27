import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import { InfoContainer, InfoInner, MobileFeaturesInfoInner } from './styles'

const VideoFeaturesAbout = () => (
  <InfoContainer style={{ backgroundColor: 'lightblue' }}>
    <BrowserView>
      <InfoInner style={{ color: 'black' }}>
        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '44px' }}>Video Features</p>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '50%' }} id="column1">
            <iframe title="VideoFeature1" width="448" height="252" src="https://www.youtube.com/embed/Xddw4WF9Klk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe style={{ marginTop: '40px' }} title="VideoFeature2" width="448" height="252" src="https://www.youtube.com/embed/vkQjacyYodM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div style={{ width: '50%' }} id="column2">
            <iframe title="VideoFeature3" width="448" height="252" src="https://www.youtube.com/embed/aiKG6602lzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe style={{ marginTop: '40px' }} title="VideoFeature4" width="448" height="252" src="https://www.youtube.com/embed/nySQqAEHchg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </InfoInner>
    </BrowserView>
    <MobileView>
      <MobileFeaturesInfoInner style={{ color: 'black', width: '100%' }}>
        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '44px' }}>Video Features</p>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '80%' }} id="column1">
            <iframe title="VideoFeature1" width="100%" height="252" src="https://www.youtube.com/embed/Xddw4WF9Klk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe style={{ marginTop: '40px' }} title="VideoFeature2" width="100%" height="252" src="https://www.youtube.com/embed/vkQjacyYodM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div style={{ width: '80%' }} id="column2">
            <iframe style={{ marginTop: '40px' }} title="VideoFeature3" width="100%" height="252" src="https://www.youtube.com/embed/aiKG6602lzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe style={{ marginTop: '40px' }} title="VideoFeature4" width="100%" height="252" src="https://www.youtube.com/embed/nySQqAEHchg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </MobileFeaturesInfoInner>
    </MobileView>
  </InfoContainer>
)

export default VideoFeaturesAbout
