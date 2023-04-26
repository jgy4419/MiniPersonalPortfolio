import * as S from '../style/Main/Menu';
import { menuIcons } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    return (
        <S.MenuContain>
            <S.Menus>
                {
                    menuIcons.map((item, index) => {
                        return (
                            <S.Menu key={index}>
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