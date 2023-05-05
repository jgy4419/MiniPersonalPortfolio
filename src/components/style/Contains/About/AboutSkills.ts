import styled from 'styled-components';

export const AboutSkillsContain = styled.div`
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SkillTitle = styled.h1`
    @media (max-width:1000px) {
        font-size: 25px;
    }
`

export const Skills = styled.ul`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: auto;
`

export const Skill = styled.li`
    color: #fff;
    border-radius: 20px;
    padding: 15px;
    background-color: #B2A4FF;
    transition: .3s;
    font-weight: 600;
    &:hover {
        background-color: #FFDEB4;
        color: #333;
    }
    @media (max-width:1000px) {
        font-size: 12px;
        padding: 10px;
    }
`
