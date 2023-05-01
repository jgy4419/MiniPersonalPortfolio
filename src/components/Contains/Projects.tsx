import * as S from '../style/Contains/projects';
import {projects} from '../../utils/constants';
import {Link} from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <S.ProjectsContain id='projects'>
                <S.Title>🧑🏻‍💻 Projects</S.Title>
                <S.Projects>
                {
                    projects.projectNames.map((name, index) => {
                        return (
                            <S.Project 
                                key={index}
                                image={projects.projectImage[index]}
                            >
                                <S.ProjectContent>
                                    <S.ProjectImage src={projects.projectImage[index]} alt='프로젝트 이미지'/>
                                    <S.ProjectContentRight>
                                        <S.ProjectName>{name}</S.ProjectName>
                                        <S.ProjectTechnology>React + TypeScript</S.ProjectTechnology>
                                        <S.ProjectExplanation>프로젝트 설명 들어갈 곳</S.ProjectExplanation>
                                        <Link 
                                            to={projects.projectsURL[index]}
                                            style={{fontSize: "20px", zIndex: 10, cursor: "pointer"}}
                                        >바로가기</Link>
                                    </S.ProjectContentRight>
                                </S.ProjectContent>
                                <S.BlackBackground/>
                            </S.Project>
                        )
                    })
                }
                </S.Projects>
            </S.ProjectsContain>
        </>
    );
};

export default Projects;