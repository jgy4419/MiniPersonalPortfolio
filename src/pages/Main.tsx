import MiniProfile from '../components/Main/MiniProfile'
import ProfileContain from '../components/Main/ProfileContain'
import Menu from  '../components/Main/Menu'
import styled from 'styled-components';

const Main = () => {
    return (
        <>            
            <MainContain>
                <MainInner>
                    <MiniProfile/>
                    <ProfileContain/>
                    <Menu/>
                </MainInner>
            </MainContain>
        </>
    );
};

const MainContain = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
`

const MainInner = styled.div`
    position: absolute;
    width: 90%;
    height: 100%;
    display: flex;
    inset: 0;
    margin: auto;
    @media (max-width:1000px) {
        flex-direction: column;
    }
`
export default Main;