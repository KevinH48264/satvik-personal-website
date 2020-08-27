import styled from 'styled-components'

// Tagline
export const TagContainer = styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 100%; 
    height: 640px;
    margin-top: 50px;
    padding-top: 20px;
    padding-bottom: 0px;
    font-family: 'Helvetica Light';
    font-weight: 200;
`
export const TagInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;  
    width: 960px;
    color: black;
    font-size: min(10vh, 10vw);
    padding-left: 20px;
`
