import * as S from '../style/Contains/projects';
import {projects} from '../../utils/constants';
const Projects = () => {
    return (
        <>
            <S.ProjectsContain>
                <S.Title>Projects</S.Title>
                <S.Projects>
                {
                    projects.projectNames.map((name, index) => {
                        return (
                            <S.Project>
                                <S.ProjectName>{name}</S.ProjectName>
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