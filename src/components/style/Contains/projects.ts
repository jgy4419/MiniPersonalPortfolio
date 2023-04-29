import styled from 'styled-components';

export const ProjectContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: .3s;
    opacity: 0;
`

export const BlackBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    transition: .3s;
`

export const ProjectsContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
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

export const Project = styled.li<{image: string}>`
    position: relative;
    width: 35%;
    height: 300px;
    background-color: #fff;
    background-image: url(${(props => props.image)});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 50%;
    &:hover {
        background-image: url('');
        > ${BlackBackground} {
            opacity: 0;
        }
        > ${ProjectContent} {
            opacity: 1;
        }
    }
`

export const ProjectImage = styled.img`
    width: 20%;
    height: 30%;
`

export const ProjectContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const ProjectName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: #333;
`

export const ProjectTechnology = styled.p`

`

export const ProjectExplanation = styled.p`

`