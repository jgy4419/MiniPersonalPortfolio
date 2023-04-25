import * as S from '../style/Main/MiniProfile';
import { name, introduction, profileImg, url, snsIcon } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MiniProfile = () => {
    return (
        <>
            <S.MiniProfileContain>
                <S.MiniProfileInner>
                    <S.ProfileImage src={profileImg} alt='MyProfileImage'/>
                    <S.Name>{name}</S.Name>
                    <S.Introduction>{introduction}</S.Introduction>
                    <S.SocialMedias>
                        {
                            url.map((item, index) => {
                                return (
                                    <S.SocialMedia key={index}>
                                        <S.Icon target='_blank' href={item}>
                                            <FontAwesomeIcon icon={snsIcon[index]} />
                                        </S.Icon>
                                    </S.SocialMedia>
                                )
                            })
                        }
                    </S.SocialMedias>
                </S.MiniProfileInner>
            </S.MiniProfileContain>
        </>
    );
};

export default MiniProfile;