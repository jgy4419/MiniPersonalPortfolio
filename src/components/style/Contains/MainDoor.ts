import styled from 'styled-components';

// ProfileContain 부모 태그 안에 있으니 absolute 로 적용.
export const MainContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #333;
    background-color: #eeeeee;
    border-radius: 200px 70px;
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