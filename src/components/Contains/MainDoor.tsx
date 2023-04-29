import { maindoor } from "../../utils/constants";
import * as S from '../style/Contains/MainDoor';

const MainContain = () => {
    return (
        <S.MainContain id="main">
            <S.Title>{maindoor.title}</S.Title>
            <S.Contacts>
                {
                    maindoor.contactTitle.map((title, index) => {
                        return (
                            <S.Contact>
                                <S.ContactTitle key={index}>{title}</S.ContactTitle>
                                <S.ContactContent>{maindoor.contactContent[index]}</S.ContactContent>
                            </S.Contact>
                        )
                    })
                }
            </S.Contacts>
        </S.MainContain>
    );
};

export default MainContain;