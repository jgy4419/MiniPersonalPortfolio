import styled from 'styled-components';

export const MenuContain = styled.div`
    position: relative;
    width: 5%;
    height: 80vh;
    margin: auto;
    @media (max-width:1000px) {
        width: 100%;
        height: 8%;
    }
`

export const Menus = styled.ul`
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 50px;
    @media (max-width:1000px) {
        flex-direction: row;
        width: 100%;
    }
`

export const Menu = styled.li`
    margin: auto;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: #f3f3f3;
    font-size: 30px;
    color: #333;
    text-align: center;
    padding-top: 17px;
    box-sizing: border-box;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: #333;
        color: #fff;
    }
    @media (max-width:1000px) {
        font-size: 16px;
        width: 50px;
        height: 50px;
    }
`