import styled from 'styled-components';

// ProfileContain 부모 태그 안에 있으니 absolute 로 적용.
export const MainContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #333;
    background-color: #fafafa;;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 40px;
    width: 50%;
    height: 50%;
    text-align: center;
    margin: auto;
`

export const Contacts = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const Contact = styled.li`
    width: 30%;
    min-height: 250px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #e3e3e3;
    text-align: center;
`

export const ContactTitle = styled.h2`
    font-size: 40px;
`

export const ContactContent = styled.p`
    font-size: 25px;
    margin-top: 10%;
`