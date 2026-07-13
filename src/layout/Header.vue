<template>

    <header id="header" class="fixed w100 top0" :class="{ fix: isScrolled, act: isPcHeaderHover }" @mouseenter="onPcHeaderEnter" @mouseleave="onPcHeaderLeave">

        <!--PC-HEADER-->
        <div class="pcHeader pc">
            <div class="inner flex alc justy_btw m_center">
                <h1 class="logo">
                    <RouterLink :to="{ name: 'main' }" class="logoImg block img">
                        <img src="/img/logo_w.svg" alt="" class="df">
                        <img src="/img/logo_c.svg" alt="" class="hv abs w100 w_center">
                    </RouterLink>
                </h1>

                <ul class="gnb flex fs20 fcf">
                    <li class="gnbLst">
                        <RouterLink :to="{ name: 'aboutIntro' }" class="tit">워케이션빌리지 소개</RouterLink>
                        <ul class="lnb fc66 fs17 abs w100">
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'aboutIntro' }">워케이션빌리지란?</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'aboutSpace' }">공간소개</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'aboutLocation' }">오시는 길</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="gnbLst">
                        <RouterLink :to="{ name: 'houseGuide' }" class="tit">공유하우스</RouterLink>
                        <ul class="lnb fc66 fs17 abs w100">
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'houseGuide' }">공유하우스 이용안내</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'houseReserve' }">공유하우스 예약</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="gnbLst">
                        <RouterLink :to="{ name: 'officeGuide' }" class="tit">공유오피스</RouterLink>
                        <ul class="lnb fc66 fs17 abs w100">
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'officeGuide' }">공유오피스 이용안내</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'officeReserve' }">공유오피스 예약</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="gnbLst">
                        <RouterLink :to="{ name: 'programExperience' }" class="tit">프로그램 및 관광</RouterLink>
                        <ul class="lnb fc66 fs17 abs w100">
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'programExperience' }">체험 프로그램</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'programTour' }">주요 관광지</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="gnbLst">
                        <RouterLink :to="{ name: 'commuNotice' }" class="tit">커뮤니티</RouterLink>
                        <ul class="lnb fc66 fs17 abs w100">
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'commuNotice' }">공지사항</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'commuFaq' }">자주 묻는 질문</RouterLink>
                            </li>
                            <li class="lnbLst">
                                <RouterLink :to="{ name: 'commuContact' }">문의하기</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="util flex fcf fs16">
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                </ul>
            </div>
        </div>

        <!--MO-HEADER-->
        <div class="moHeader mo">
            <div class="moHead">
                <div class="inn m_center flex alc justy_btw">
                    <h1 class="logo">
                        <RouterLink :to="{ name: 'main' }" class="block img">
                            <img src="/img/logo_c.svg" alt="">
                        </RouterLink>
                    </h1>
                    <button class="menuBtn img" @click="toggleMoPanel">
                        <img :src="isMoPanelOpen ? '/img/ic_close.svg' : '/img/ic_menu.svg'" alt="">
                    </button>
                </div>
            </div>
            <div class="moPanel abs" :class="{ on: isMoPanelOpen }" @touchstart.passive="onPanelTouchStart" @touchend="onPanelTouchEnd">
                <div class="loginArea">
                    <ul class="lst m_center flex fs24 fc33">
                        <li>
                            <a href="">로그인</a>
                        </li>
                        <li>
                            <a href="">회원가입</a>
                        </li>
                    </ul>
                </div>
                <div class="menuArea">
                    <ul class="gnb m_center">
                        <li class="gnbLst" :class="{ on: openGnbIndex === 0 }">
                            <div class="tit fs30" @click="toggleGnb(0)">워케이션빌리지 소개</div>
                            <ul class="lnb fs26 fc66">
                                <li>
                                    <RouterLink :to="{ name: 'aboutIntro' }">워케이션빌리지란?</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'aboutSpace' }">공간소개</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'aboutLocation' }">오시는 길</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="gnbLst" :class="{ on: openGnbIndex === 1 }">
                            <div class="tit fs30" @click="toggleGnb(1)">공유하우스</div>
                            <ul class="lnb fs26 fc66">
                                <li>
                                    <RouterLink :to="{ name: 'houseGuide' }">공유하우스 이용안내</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'houseReserve' }">공유하우스 예약</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="gnbLst" :class="{ on: openGnbIndex === 2 }">
                            <div class="tit fs30" @click="toggleGnb(2)">공유오피스</div>
                            <ul class="lnb fs26 fc66">
                                <li>
                                    <RouterLink :to="{ name: 'officeGuide' }">공유오피스 이용안내</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'officeReserve' }">공유오피스 예약</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="gnbLst" :class="{ on: openGnbIndex === 3 }">
                            <div class="tit fs30" @click="toggleGnb(3)">프로그램 및 관광</div>
                            <ul class="lnb fs26 fc66">
                                <li>
                                    <RouterLink :to="{ name: 'programExperience' }">체험 프로그램</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'programTour' }">주요 관광지</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="gnbLst" :class="{ on: openGnbIndex === 4 }">
                            <div class="tit fs30" @click="toggleGnb(4)">커뮤니티</div>
                            <ul class="lnb fs26 fc66">
                                <li>
                                    <RouterLink :to="{ name: 'commuNotice' }">공지사항</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{ name: 'commuFaq' }">자주 묻는 질문</RouterLink>
                                </li>
                                 <li>
                                    <RouterLink :to="{ name: 'commuContact' }">문의하기</RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isScrolled = ref(false);
const isPcHeaderHover = ref(false);
const isMoPanelOpen = ref(false);
const openGnbIndex = ref(null);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

const onPcHeaderEnter = () => {
    isPcHeaderHover.value = true;
};

const onPcHeaderLeave = () => {
    isPcHeaderHover.value = false;
};

const toggleMoPanel = () => {
    isMoPanelOpen.value = !isMoPanelOpen.value;
    if (!isMoPanelOpen.value) openGnbIndex.value = null;
};

const toggleGnb = (index) => {
    openGnbIndex.value = openGnbIndex.value === index ? null : index;
};

const closeMoPanel = () => {
    isMoPanelOpen.value = false;
    openGnbIndex.value = null;
};

// 모바일 패널: 위로 스와이프하면 닫기
let touchStartY = 0;
let touchStartX = 0;
const onPanelTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
};
const onPanelTouchEnd = (e) => {
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    const deltaX = Math.abs(e.changedTouches[0].clientX - touchStartX);
    if (deltaY > 60 && deltaY > deltaX) closeMoPanel(); 
};

// 페이지 이동 시 모바일 패널 닫기
watch(() => route.fullPath, () => {
    closeMoPanel();
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
