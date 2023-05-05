import styled from 'styled-components';

export const AboutIntroduces = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 100%;
    color: #333;
`

export const Title = styled.h1`
    @media (max-width:1000px) {
        font-size: 25px;
    }
`;

export const Introduces = styled.ul`
    margin: auto;
    text-align: left;
    line-height: 1.7;
`;

export const Introduce = styled.li`
    color: #6a6a6a;
    @media (max-width:1000px) {
        font-size: 14px;
        text-align: center;
    }
`;