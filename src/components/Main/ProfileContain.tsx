import MainDoor from '../Contains/MainDoor';
import About from '../Contains/About';
import * as S from '../style/Main/ProfileContain';
import Projects from '../Contains/Projects';
import Experence from '../Contains/Experence';

const ProfileContain = () => {
    return (
        <S.ProfileContain>
            <MainDoor/>
            <About/>
            <Projects/>
            <Experence/>
        </S.ProfileContain>
    );
};

export default ProfileContain;