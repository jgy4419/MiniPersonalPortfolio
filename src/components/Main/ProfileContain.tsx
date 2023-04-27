import MainDoor from '../Contains/MainDoor';
import About from '../Contains/About';
import * as S from '../style/Main/ProfileContain';
import Projects from '../Contains/Projects';

const ProfileContain = () => {
    return (
        <S.ProfileContain>
            <MainDoor/>
            <About/>
            <Projects/>
        </S.ProfileContain>
    );
};

export default ProfileContain;