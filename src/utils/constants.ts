import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ProfileImg from '../assets/img/profileImg.jpeg';
import MainImg from '../assets/img/mainDoorImg.jpeg';
import { faBlog, faBuilding, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import aquaponics from '../assets/img/projects/aquaponics.png';
import hospital from '../assets/img/projects/hospitalLocation.png';
import mohaemookji from '../assets/img/projects/mohaemookji.png';
import rdaFarm from '../assets/img/projects/rda-farm.png';
import TodayWorkOut from '../assets/img/projects/TodayWorkOutComplete.png';

// Main
export const name = '정규영';

export const introduction = `프론트엔드 개발자 정규영입니다.`;

export const url = [
    'https://github.com/jgy4419',
    'https://www.instagram.com/jgy_98/',
    'https://velog.io/@jgy4419',
];

export const snsIcon = [
    faGithub, faInstagram, faBlog
]

export const menuIcons = [
    faHouse, faUser, faFile, faBuilding
]

export const profileImg = ProfileImg;

export const menuChange = ['main', 'about', 'projects', 'experence'];

// MainDoor
export const maindoor = {
    title: '사용자와 가장 가까이에서 소통하고 싶은 개발자 정규영입니다.',
    contactTitle: ['Email', 'Tel', 'Github', 'Blog'],
    contactContent: [
        'jgy_98@naver.com',
        '010-2037-4553',
        'https://github.com/jgy4419',
        'https://velog.io/@jgy4419'
    ],
    img: MainImg
}

// About
export const about = {
    introduce: [
        "안녕하세요. 사용자와 가장 가까이에서 소통하는 개발자 정규영입니다.",
        "다양한 프로젝트를 진행하면서 웹 프론트엔드 개발을 맡았습니다.",
        "한 번 마음먹고 시작한 일은 끝까지 최선을 다하고, 성실하게 수행합니다.",
        "사용자들이 어떻게 하면 한 번 더 사용하고, 들어오고 싶게 만들어주는 UI를 만드는 것에 관심이 많습니다."
    ],
    skils: ['HTML5, CSS', 'JavaScript', 'TypeScript', "React", "Vue", "Redux", "Next"],
    awards: [
        '2022 학년도 한국교통대학교 컴퓨터공학과 졸업작품 전시회 최우수 작품상 (25팀 중 1위)',
        '교내 창의적 종합설계 CDP 공모전 1위 (한국교통대학교 총장상)',
        '2022년 전국 창의적 종합설계 공학 패스티벌 (영남대학교 컨소시엄 창의적 종합설계 경진대회 동상)',
        '2020년 동계 스마트팩토리 메이커 캠퍼스톤 (한밭대학교 총장상)'
    ]
}

// projects
export const projects = {
    projectNames: [
        '모해묵지?', 
        '내 주변 응급실 찾아주기',
        '오운완', 
        '낙과경매', 
    ],
    projectsURL: [
        'https://github.com/KNUT-Mohaemookji/mohaemookji-fronted-next',
        'https://github.com/jgy4419/hospital-location',
        'https://github.com/jgy4419/-Today-workout-complete',
        'https://github.com/jgy4419/knut-dblab-rda-farm',
        'https://github.com/jgy4419/aquaponics'
    ],
    projectImage: [mohaemookji, hospital, TodayWorkOut, rdaFarm, aquaponics],
}

// experence 
export const experence = {
    title: [
        '한국교통대학교',
        '충주상업고등학교 강사'
    ],
    explanation: [
        '2017.03 ~ 2023.02',
        '2023.03 ~ '
    ]
}