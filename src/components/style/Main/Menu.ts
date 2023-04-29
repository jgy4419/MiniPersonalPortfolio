import styled from 'styled-components';

export const MenuContain = styled.div`
    position: relative;
    width: 5%;
    height: 80vh;
    margin: auto;
`

export const Menus = styled.ul`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    border-radius: 50px;
`

export const Menu = styled.li`
    margin: auto;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: #fff;
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
`