import styled from 'styled-components';

export const MainAboutContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    gap: 5%;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1000px) {
        justify-content: center;
    }
`

export const SkillesAndAwardStructure = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`