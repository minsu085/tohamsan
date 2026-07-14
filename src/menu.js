// 서브페이지 공통 메뉴 구성
// image: /img/sub/sub_visual_{image}.png (mo: sub_visual_mo_{image}.png)
// tabs: 각 그룹의 하위 페이지 (name = 라우터명)
// prettier-ignore

export const menuGroups = [
    {
        key: 'about',
        title: '워케이션빌리지 소개',
        image: 1,
        tabs: [
            {name: 'aboutIntro',    label: '워케이션빌리지란?'},
            {name: 'aboutSpace',    label: '공간소개'},
            {name: 'aboutLocation', label: '오시는 길'},
        ],
    },
    {
        key: 'house',
        title: '공유하우스',
        image: 2,
        tabs: [
            {name: 'houseGuide',   label: '공유하우스 이용안내'},
            {name: 'houseReserve', label: '공유하우스 예약'},
            {name: 'houseReserveForm',     label: '예약하기',   hidden: true},
            {name: 'houseReserveComplete', label: '예약 완료', hidden: true},
        ],
    },
    {
        key: 'office',
        title: '공유오피스',
        image: 3,
        tabs: [
            {name: 'officeGuide',   label: '공유오피스 이용안내'},
            {name: 'officeReserve', label: '공유오피스 예약'},
            {name: 'officeReserveForm',     label: '예약하기',   hidden: true},
            {name: 'officeReserveComplete', label: '예약 완료', hidden: true},
        ],
    },
    {
        key: 'program',
        title: '프로그램 및 관광',
        image: 4,
        tabs: [
            {name: 'programExperience', label: '체험 프로그램'},
            {name: 'programTour',       label: '주요 관광지'},
        ],
    },
    {
        key: 'community',
        title: '커뮤니티',
        image: 5,
        tabs: [
            {name: 'commuNotice',  label: '공지사항'},
            {name: 'commuFaq',     label: '자주 묻는 질문'},
            {name: 'commuContact', label: '문의하기'},
        ],
    },
    {
        key: 'mypage',
        title: '마이페이지',
        image: 6,
        tabs: [
            {name: 'myReservations', label: '예약신청 현황'},
            {name: 'myProfile',      label: '나의 정보'},
            // 탭엔 안 보이지만 마이페이지 그룹에 속하는 하위 페이지
            {name: 'myReservationDetail', label: '예약신청 현황', hidden: true},
        ],
    },
];

// 라우터명으로 소속 그룹 찾기
export const findGroupByRouteName = (name) =>
    menuGroups.find((group) => group.tabs.some((tab) => tab.name === name));
