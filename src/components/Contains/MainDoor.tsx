import { maindoor } from "../../utils/constants";
import * as S from '../style/Contains/MainDoor';

const MainContain = () => {
    return (
        <S.MainContain id="main">
            <div>
                <S.Title>{maindoor.title}</S.Title>
                <S.ContentTitle>📞  Contact</S.ContentTitle>
                <S.Contacts>
                    {
                        maindoor.contactTitle.map((title, index) => {
                            return (
                                <S.Contact>
                                    <S.ContactTitle key={index}>{title} : {maindoor.contactContent[index]}</S.ContactTitle>
                                </S.Contact>
                            )
                        })
                    }
                </S.Contacts>
            </div>
            <S.MainImage src={maindoor.img} alt="main이미지"/>
        </S.MainContain>
    );
};

export default MainContain;