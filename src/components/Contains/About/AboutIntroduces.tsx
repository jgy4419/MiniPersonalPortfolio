import * as S from '../../style/Contains/About/AboutIntroduces';
import { about } from '../../../utils/constants';

const MainAbout = () => {
    return (
        <>
            <S.AboutIntroduces>
                <S.Title>💁🏻 Introduce</S.Title>
                <S.Introduces>
                    {
                        about.introduce.map((item: string, index: number) => {
                            return (
                                <S.Introduce key={index}>{item}</S.Introduce>
                            )
                        })
                    }
                </S.Introduces>
            </S.AboutIntroduces>
        </>
    );
};

export default MainAbout;