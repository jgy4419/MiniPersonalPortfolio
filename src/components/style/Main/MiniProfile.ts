import styled from 'styled-components';

export const MiniProfileContain = styled.div`  
    position: relative;
    width: 15%;
    height: 50vh;
    margin: auto;
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
`

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

export const Name = styled.h1`
    // margin-top: 30px;   
`

export const Introduction = styled.p`
    margin: 0 auto;
    max-width: 150px;
    font-size: 20px;
    color: #eeeeee;
`

export const SocialMedias = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const Icon = styled.a`
    color: #fff;
    font-size: 30px;
`

export const SocialMedia = styled.li`
    border-radius: 50%;
    background-color: #fff;
`