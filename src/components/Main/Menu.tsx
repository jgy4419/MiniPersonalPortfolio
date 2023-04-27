import * as S from '../style/Main/Menu';
import { menuIcons } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    const menuMove = () => {
        document.getElementById('main')?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <S.MenuContain>
            <S.Menus>
                {
                    menuIcons.map((item, index) => {
                        return (
                            <S.Menu key={index}
                                onClick={() => menuMove()}
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