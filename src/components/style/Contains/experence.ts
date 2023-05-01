import styled from 'styled-components';

export const ExperenceContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10%;
`

export const ExperenceTitle = styled.h1`
    text-align: center;
    margin-top: 5%;
`

export const Experences = styled.ul`

`

export const Experence = styled.li`
    display: flex;
    justify-content: space-around;
`

export const Stem = styled.div`
`

export const Round = styled.div`
    width: 30px;
    height: 30px;
    background-color: #333;
    border-radius: 50%;
`

export const Stick = styled.div`
    width: 10px;
    height: 150px;
    background-color: #333;
    margin: -10px 10px;
`

export const Content = styled.div`
    width: 300px;
    max-height: 120px;
    padding: 20px;
    box-shadow: 5px 5px 5px #eeeeee;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    transition: .3s;
    &:hover {
        transform: translateY(-5%);
    }
`

export const Title = styled.h3`

`

export const Explanation = styled.p`
    margin-top: 20px;
`