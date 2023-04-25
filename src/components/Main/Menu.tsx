import React from 'react';
import * as S from '../style/Main/Menu';

const Menu = () => {
    const arr = ['1', '2', '3', '4', '5', '6'];
    return (
        <S.MenuContain>
            <S.Menus>
                {
                    arr.map((item, index) => {
                        return (
                            <S.Menu key={index}></S.Menu>   
                        )
                    })
                }
            </S.Menus>
        </S.MenuContain>
    );
};

export default Menu;