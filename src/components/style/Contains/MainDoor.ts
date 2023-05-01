import styled from 'styled-components';

// ProfileContain 부모 태그 안에 있으니 absolute 로 적용.
export const MainContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #333;
    background-color: #fafafa;;
    display: flex;
`

export const ContentTitle = styled.h2`
    text-align: center;
    margin: -5% 0 5% 0;
`
export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 30px;
    width: 60%;
    height: 50%;
    text-align: center;
    margin: auto;
`

export const Contacts = styled.ul`
    position: relative;
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
`

export const ContactTitle = styled.p`
    font-size: 1em;
    transition: .2s;
    font-weight: 600;
`

export const Contact = styled.li`
    width: 60%;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #e3e3e3;
    padding: 10px;
    &:hover {
        > ${ContactTitle} {
            transform: translateY(15px);
            font-size: 1.2em;
            padding: 20px;
        }
    }
`

export const MainImage = styled.img`
    width: 30%;
    height: 40%;
    margin: auto;
`