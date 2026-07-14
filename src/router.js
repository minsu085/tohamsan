import { createRouter, createWebHistory } from "vue-router";

// prettier-ignore
const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout/Layout.vue'),
        children: [
            // 메인 페이지
            {path: '', name: 'main', component: () => import('@/views/Main.vue'), meta: {title: '토함산워케이션'}},

            // 워케이션빌리지 소개
            {path: 'about/intro',      name: 'aboutIntro',      component: () => import('@/views/about/Intro.vue'),      meta: {title: '워케이션빌리지란?'}},
            {path: 'about/space',      name: 'aboutSpace',      component: () => import('@/views/about/Space.vue'),      meta: {title: '공간소개'}},
            {path: 'about/location',   name: 'aboutLocation',   component: () => import('@/views/about/Location.vue'),   meta: {title: '오시는 길'}},

            // 공유하우스
            {path: 'house/guide',        name: 'houseGuide',       component: () => import('@/views/house/Guide.vue'),       meta: {title: '공유하우스 이용안내'}},
            {path: 'house/reserve',      name: 'houseReserve',     component: () => import('@/views/house/Reserve.vue'),     meta: {title: '공유하우스 예약'}},
            {path: 'house/reserve/form',     name: 'houseReserveForm',     component: () => import('@/views/house/ReserveForm.vue'),     meta: {title: '예약하기', activeTab: 'houseReserve'}},
            {path: 'house/reserve/complete', name: 'houseReserveComplete', component: () => import('@/views/house/ReserveComplete.vue'), meta: {title: '예약 완료', activeTab: 'houseReserve'}},

            // 공유오피스
            {path: 'office/guide',     name: 'officeGuide',     component: () => import('@/views/office/Guide.vue'),     meta: {title: '공유오피스 이용안내'}},
            {path: 'office/reserve',   name: 'officeReserve',   component: () => import('@/views/office/Reserve.vue'),   meta: {title: '공유오피스 예약'}},
            {path: 'office/reserve/form',     name: 'officeReserveForm',     component: () => import('@/views/office/ReserveForm.vue'),     meta: {title: '예약하기', activeTab: 'officeReserve'}},
            {path: 'office/reserve/complete', name: 'officeReserveComplete', component: () => import('@/views/office/ReserveComplete.vue'), meta: {title: '예약 완료', activeTab: 'officeReserve'}},

            // 프로그램 및 관광
            {path: 'program/experience', name: 'programExperience', component: () => import('@/views/program/Experience.vue'), meta: {title: '체험 프로그램'}},
            {path: 'program/tour',       name: 'programTour',       component: () => import('@/views/program/Tour.vue'),       meta: {title: '주요 관광지'}},

            // 커뮤니티
            {path: 'community/notice',  name: 'commuNotice',    component: () => import('@/views/community/Notice.vue'),  meta: {title: '공지사항'}},
            {path: 'community/faq',     name: 'commuFaq',       component: () => import('@/views/community/Faq.vue'),     meta: {title: '자주 묻는 질문'}},
            {path: 'community/contact', name: 'commuContact',   component: () => import('@/views/community/Contact.vue'), meta: {title: '문의하기', }},

            // 마이페이지
            {path: 'mypage/reservations',     name: 'myReservations',     component: () => import('@/views/mypage/Reservations.vue'),     meta: {title: '예약신청 현황'}},
            {path: 'mypage/reservations/:id', name: 'myReservationDetail', component: () => import('@/views/mypage/ReservationDetail.vue'), meta: {title: '예약신청 현황', activeTab: 'myReservations'}},
            {path: 'mypage/profile',          name: 'myProfile',          component: () => import('@/views/mypage/Profile.vue'),          meta: {title: '나의 정보'}},
        ],
    },

    // 잘못된 URL은 전부 메인으로
    {path: '/:pathMatch(.*)*', redirect: '/' },

    // 서브비쥬얼 안보이게 하고싶은 페이지는 meta에 추가 --> hideSubVisual: true

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: "auto",
        };
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
