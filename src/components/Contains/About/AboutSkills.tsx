import { about } from '../../../utils/constants';
import * as S from '../../style/Contains/About/AboutSkills';
const AboutSkills = () => {
    return (
        <S.AboutSkillsContain>
            <S.SkillTitle>Skills</S.SkillTitle>
            <S.Skills>
                {
                    about.skils.map((skill, index) => {
                        return (
                            <S.Skill key={index}>{skill}</S.Skill>
                        )
                    })
                }
            </S.Skills>
        </S.AboutSkillsContain>
    );
};

export default AboutSkills;