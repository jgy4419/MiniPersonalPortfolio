import * as S from '../style/Main/Menu';
import { menuIcons } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {menuChange} from '../../utils/constants';

const Menu = () => {
    const menuMove = (menu: string) => {
        document.getElementById(menu)?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <S.MenuContain>
            <S.Menus>
                {
                    menuIcons.map((item, index) => {
                        return (
                            <S.Menu key={index}
                                onClick={() => menuMove(menuChange[index])}
                            >
                                <FontAwesomeIcon icon={item}/>
                            </S.Menu>   
                        )
                    })
                }
            </S.Menus>
        </S.MenuContain>
    );
};

export default Menu;