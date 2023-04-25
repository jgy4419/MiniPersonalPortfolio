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
    background-color: #fff;
    border-radius: 50px;
`

export const Menu = styled.li`
    margin: auto;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: #e3e3e3;
`