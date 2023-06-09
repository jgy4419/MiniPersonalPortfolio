import styled from 'styled-components';

export const MiniProfileContain = styled.div`  
    position: relative;
    width: 15%;
    height: 50vh;
    margin: auto;
    @media (max-width:1000px){
        padding-top: 20px;
        box-sizing: border-box;
        width: 50%;
        height: 10vh;
    }
`

export const MiniProfileInner = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    color: #fff;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width:1000px) {
        flex-direction: row;
        width: 100%;
        align-items: center;
        margin-top: -5%;
    }
`

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    @media (max-width:1000px) { 
        width: 75px;
        height: 75px;
    }
`

export const Name = styled.h1`
    @media (max-width:1000px){
        display: none;
    }
`

export const Introduction = styled.p`
    margin: 0 auto;
    max-width: 150px;
    font-size: 20px;
    color: #eeeeee;
    @media (max-width:1000px){
        display: none;
    }
`

export const SocialMedias = styled.ul`
    display: flex;
    justify-content: space-around;
    @media (max-width:1000px) {
        width: 100%;
    }
`

export const Icon = styled.a`
    color: #fff;
    font-size: 30px;
`

export const SocialMedia = styled.li`
    border-radius: 50%;
`