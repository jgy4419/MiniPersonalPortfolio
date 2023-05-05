import styled from 'styled-components';

export const AboutAwardsContain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #333;
    @media (max-width: 1000px) {
        margin-top: 5%;
    }
`

export const AwardsTitle = styled.h1`
    @media (max-width:1000px) {
        font-size: 25px;
    }
`

export const Awards = styled.ul`
    margin: auto;
    text-align: left;
    line-height: 1.7;
    width: 90%;
`

export const Award = styled.li`
    list-style-type: square;
    color: #6a6a6a;
    @media (max-width:1000px) {
        list-style: none;
        text-align: center;
        font-size: 12px;
        line-height: 2;
    }
`