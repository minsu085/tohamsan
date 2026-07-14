<template>
    <footer id="footer">
       <div class="content inner98 m_center">
            <div class="topArea flex alc justy_btw">
                <h1 class="logo img">
                    <img src="/img/logo_w.svg" alt="">
                </h1>
                <ul class="ftMenu flex fs16 fcf">
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">이메일무단수집거부</a></li>
                    <li><a href="">팝업열기</a></li>
                </ul>
            </div>
            <div class="botArea flex">
                <div class="info fs15 fcf">
                    <div class="lst flex">
                        <div>주소 : 경주시 불국로 1208-45 토함산자연휴양림</div>
                        <div>대표전화 :  054-123-1234</div>
                        <div>대표메일 :  abc@abcd.efg</div>
                    </div>
                    <div class="copy">Copyright © 2026 토함산 워케이션빌리지. All Rights resered.</div>
                </div>
                <div class="util flex">
                    <div class="contact flex fs15 fcf">
                        <div class="tit">문의</div>
                        <ul class="lst">
                            <li class="flex">
                                <span class="opt">운영 시간</span>
                                <span>09:00 ~ 18:00</span>
                            </li>
                            <li class="flex">
                                <span class="opt">대표 번호</span>
                                <span>054-123-1234</span>
                            </li>
                        </ul>
                    </div>
                    <div class="etc flex">
                        <div ref="familyRef" class="familySite fs16" :class="{ open: isFamilyOpen }">
                            <div class="tit flex alc fcf" @click="toggleFamily">
                                <span>패밀리 사이트</span>
                                <img src="/img/ic_arr_w.svg" alt="화살표">
                            </div>
                            <ul class="lst">
                                <li><a href="">경주시청</a></li>
                                <li><a href="">토함산자연휴양림</a></li>
                                <li><a href="">숲나들e</a></li>
                                <li><a href="">경주문화관광</a></li>
                            </ul>
                        </div>
                        <div class="etcLogo img">
                            <img src="/img/logo_ft.svg" alt="경주시로고">
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </footer>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';

/*――――――――――――――――――――――――――――――――――
    패밀리사이트 열고닫기
――――――――――――――――――――――――――――――――――*/

// 패밀리 사이트 열기/닫기
const familyRef = ref(null);
const isFamilyOpen = ref(false);

const toggleFamily = () => {
    isFamilyOpen.value = !isFamilyOpen.value;
};

// 바깥 클릭 시 닫기
const onClickOutside = (e) => {
    if (familyRef.value && !familyRef.value.contains(e.target)) {
        isFamilyOpen.value = false;
    }
};

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));
</script>
