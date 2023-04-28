import * as S from '../style/Contains/About';
import AboutAwards from './About/AboutAwards';
import AboutIntroduces from './About/AboutIntroduces';
import AboutSkills from './About/AboutSkills';

const MainAbout = () => {
    return (
        <>
            <S.MainAboutContain id='about'>
                <AboutIntroduces/>
                <S.SkillesAndAwardStructure>
                    <AboutSkills/>
                    <AboutAwards/>
                </S.SkillesAndAwardStructure>
            </S.MainAboutContain>
        </>
    );
};

export default MainAbout;