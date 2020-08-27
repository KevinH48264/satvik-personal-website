import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    background-color: #1B99E8;
    display: flex;
    justify-content: center;  
    width: 100%; 
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;  
    width: 960px;
    color: white;
    font-family: helvetica-w01-light,helvetica-w02-light,sans-serif;
    padding-top: 20px;
    padding-bottom: 100px;
`
export const Feature = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
    padding: 20px;
`
export const FeatureHeading = styled.p`
    font-weight: bold;
    font-size: 30px;
    margin: 0px;
`

export const FeatureText = styled.p`
    font-size: 20px;
`

export const FeatureLink = styled.a`
    font-size: 16px;
    color: white;
    text-decoration: none;
`

export const Text = styled.p`
    font-size: 16px;
`
