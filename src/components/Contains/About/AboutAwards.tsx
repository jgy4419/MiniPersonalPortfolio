import { about } from '../../../utils/constants';
import * as S from '../../style/Contains/About/AboutAwards';

const AboutAwards = () => {
    return (
        <S.AboutAwardsContain>
            <S.AwardsTitle>Awards</S.AwardsTitle>
            <S.Awards>
                {
                    about.awards.map((award, index) => {
                        return (
                            <S.Award key={index}>{award}</S.Award>
                        )
                    })
                }
            </S.Awards> 
        </S.AboutAwardsContain>
    );
};

export default AboutAwards;