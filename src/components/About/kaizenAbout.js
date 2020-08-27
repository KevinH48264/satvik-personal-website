import React from 'react'
import { InfoContainer, InfoInner, Text } from './styles'

const KaizenAbout = () => (
  <InfoContainer style={{ backgroundColor: '#FFFFFF' }}>
    <InfoInner style={{ color: 'black' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '40px',
      }}
      >
        <img style={{ marginRight: '0px', width: '120px' }} src={`${process.env.PUBLIC_URL}/kaizenSquare.jpg`} alt="" />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}
        >
          <p style={{
            fontSize: '40px', fontWeight: 'bold', margin: '0px', fontFamily: 'Montserrat',
          }}
          >
            KAIZEN LEARNING
          </p>
          <p style={{ fontSize: '24px', margin: '0px', fontFamily: 'Montserrat' }}>Founder and Chief Executive Officer</p>
        </div>
      </div>
      <Text style={{
        fontSize: '20px', fontWeight: 'bold', paddingTop: '50px', margin: '0px', fontFamily: 'Helvetica Roman',
      }}
      >
        Kaizen Learning is a social venture in the education space that aims to make learning free, accessible, and easy.
      </Text>
      <Text style={{ fontSize: '20px' }}>
        Most families across the world do not have the financial resources to afford private educators and a high quality education, and are often left wondering how their child will succeed in an environment that often ignores their needs.
        <br />
        <br />
        As someone with a deep passion for education accessibility, I took it upon myself to find a solution - ‘Kaizen Learning’. 'Kaizen' is Japanese for continuous improvement, which is the goal with learning. Kaizen Learning aims to ensure that students across the world can continue learning and working on themselves for free, with or without a school to support them. We have a team of volunteers with experience in tutoring, babysitting, special education, ESL/foreign language, public speaking, mental health, musical instruments, Zumba, arts & crafts, etc.
        <br />
        <br />
        Our sessions are conducted virtually via zoom and ratios are maintained at 3-5 students per volunteer educator. Despite being virtual-only, we ensure that sessions are interactive and fun for students, and foster a safe learning environment for all!
      </Text>
    </InfoInner>
  </InfoContainer>
)

export default KaizenAbout
