import styled from 'styled-components';

export const ProfileContain = styled.div`
    position: relative;
    width: 70%;
    height: 80vh;
    margin: auto;
    background-color: #fff;
    border-radius: 200px 70px;
    overflow-y: scroll;
    @media (max-width:1000px) {
        width: 100%;
        height: 75vh;
        border-radius: 20px;
    }
`