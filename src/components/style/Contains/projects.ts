import styled from 'styled-components';

export const ProjectsContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    color: #333;
    text-align: center;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Title = styled.h1`
`

export const Projects = styled.ul`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Project = styled.li`
    position: relative;
    width: 45%;
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
    cursor: pointer;
`

export const ProjectName = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #333;
`

export const BlackBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;

`