import MainDoor from '../Contains/MainDoor';
import About from '../Contains/About';
import * as S from '../style/Main/ProfileContain';

const ProfileContain = () => {
    return (
        <S.ProfileContain>
            <MainDoor/>
            <About/>
        </S.ProfileContain>
    );
};

export default ProfileContain;