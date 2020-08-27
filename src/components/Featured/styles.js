import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;  
    width: 100%; 
    padding-top: 80px;
    padding-bottom: 100px;
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    color: black;
    font-family: 'Helvetica Light';
`

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 135px;
    padding-right: 20px;
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
