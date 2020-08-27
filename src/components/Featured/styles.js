import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;  
    width: 100%; 
    padding-bottom: 100px;
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    width: 960px;
    color: black;
    font-family: 'Helvetica Light';
`

export const MobileInfoInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    padding-top: 40px;
    color: black;
    font-family: 'Helvetica Light';
    /* border: black;
    border-style: solid; */
`

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 20px;
`
export const MobileFeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    padding-right: 20px;
    /* border: black;
    border-style: solid; */
    margin-bottom: 100px;
`

export const Feature = styled.div`
    display: flex;
    width: 220px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    max-width: 200px;
    max-height: 64px;
`

export const MobileImage = styled.img`
    max-width: 200px;
    max-height: 64px;
    padding: 15px 0px;
`
