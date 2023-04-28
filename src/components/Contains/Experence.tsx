import {experence} from '../../utils/constants';
import * as S from '../style/Contains/experence';

const Experence = () => {
    return (
        <S.ExperenceContain id='experence'>
            <S.ExperenceTitle>Experence</S.ExperenceTitle>
            <S.Experences>
            {
                experence.title.map((title, index) => {
                    return (
                        <S.Experence key={index}>
                            <S.Stem>
                                <S.Round/>
                                <S.Stick/>
                            </S.Stem>
                            <S.Content>
                                <S.Title>{title}</S.Title>
                                <S.Explanation>{experence.explanation}</S.Explanation>
                            </S.Content>
                        </S.Experence>
                    )
                })
            }
            </S.Experences>
        </S.ExperenceContain>
    );
};

export default Experence;