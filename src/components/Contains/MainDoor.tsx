import { maincontainTitle } from "../../utils/constants";
import * as S from '../style/Contains/MainDoor';

const MainContain = () => {
    return (
        <S.MainContain id="main">
            <S.Title>{maincontainTitle}</S.Title>
        </S.MainContain>
    );
};

export default MainContain;