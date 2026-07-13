<template>

    <div id="sub">
        <div class="inner m_center inner89">

            <div class="subCommTit gb fs40 lh140">공유오피스 예약</div>

            <div class="officeRsv">

                <Swiper
                    class="officeSwiper"
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :rewind="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    :navigation="swiperNavigation"
                    :pagination="swiperPagination"
                >
                    <SwiperSlide v-for="(src, i) in officeImages" :key="i" class="img">
                        <img :src="src" :alt="`오피스 이미지 ${i + 1}`">
                    </SwiperSlide>

                    <template #container-end>
                        <div class="swiper-pagination slidePg"></div>
                        <div class="slideNav flex alc">
                            <div ref="prevBtn" class="prev">
                                <img src="/img/sub/ic_slide_prev.svg" alt="이전">
                            </div>
                            <div ref="nextBtn" class="next">
                                <img src="/img/sub/ic_slide_next.svg" alt="다음">
                            </div>
                        </div>
                    </template>
                </Swiper>

                <div class="officeDetail">
                    <div class="detailBox">
                        <div class="boxTit fs24 fwtbold lh140">
                            기본 정보
                        </div>
                        <ul class="infoLst">
                            <li class="lst flex fs18">
                                <div class="opt fwt600">운영 시간</div>
                                <ul class="con">
                                    <li>08:00 ~ 20:00</li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">면적</div>
                                <ul class="con">
                                    <li>142.56㎡(약 43평) </li>
                                </ul>
                            </li>                           
                        </ul>
                    </div>

                    <div class="detailBox">
                        <div class="boxTit fs24 fwtbold lh140">
                            요금 안내
                        </div>
                        <ul class="infoLst">
                            <li class="lst flex fs18">
                                <div class="opt fwt600">숙박객</div>
                                <ul class="con">
                                    <li>무료 </li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">비숙박객</div>
                                <ul class="con">
                                    <li>- 일일권 : 10,000원</li>
                                    <li>- 주간권(5일) : 40,000원</li>
                                    <li>- 월간권(30일) : 150,000원</li>
                                </ul>
                            </li>                          
                        </ul>
                    </div>

                    <div class="detailBox">
                        <div class="boxTit fs24 fwtbold lh140">
                            시설 안내
                        </div>
                        <ul class="infoLst">
                            <li class="lst flex fs18">
                                <div class="opt fwt600">편의시설</div>
                                <ul class="con">
                                    <li>- 전 객실 개별 야외데크 제공</li>
                                    <li>- 야외 테이블 및 캠핑의자 비치</li>
                                    <li>- 숲 전망 휴식공간 제공</li>
                                    <li>- 객실 내 업무 및 휴식 가능</li>
                                </ul>
                            </li>

                            <li class="lst flex fs18 mt40">
                                <div class="opt fwt600">구비시설</div>
                                <ul class="fac flex fxwrap">
                                    <li>
                                        <img src="/img/sub/ico_facility_13.png" alt="업무용 책상">
                                        <span>업무용 책상</span>
                                    </li>
                                    <li>
                                        <img src="/img/sub/ico_facility_5.png" alt="무선 인터넷">
                                        <span>무선 인터넷</span>
                                    </li>
                                    <li>
                                        <img src="/img/sub/ico_facility_14.png" alt="프린터·복사·스캔">
                                        <span>프린터·<br>복사·스캔</span>
                                    </li>
                                    <li>
                                        <img src="/img/sub/ico_facility_10.png" alt="냉난방기">
                                        <span>냉난방기</span>
                                    </li>
                                    <li>
                                        <img src="/img/sub/ico_facility_15.png" alt="콘센트 및 충전시설">
                                        <span>콘센트 및<br>충전시설</span>
                                    </li>                                   
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="detailBox">
                        <div class="boxTit fs24 fwtbold lh140">
                           유의 사항
                        </div>
                        <ul class="infoLst">
                            <li class="lst flex fs18">
                                <div class="opt fwt600">지정좌석</div>
                                <ul class="con">
                                    <li>- 공유오피스 좌석은 자율좌석제로 운영한다.</li>
                                    <li>- 필요 시 운영자가 지정좌석제를 운영 할 수 있다.</li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">음식물 반입</div>
                                <ul class="con">
                                    <li>- 음료 및 간단한 다과류의 반입은 가능하다.</li>
                                    <li>- 냄새가 강한 음식 및 타 이용객에게 불편을 주는 음식물의 반입은 제한할 수 있다.</li>
                                    <li>- 음주행위는 금지한다.</li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">소음 관리</div>
                                <ul class="con">
                                    <li>- 전화통화 및 화상회의 시 다른 이용객에게 방해가 되지 않도록 하여야 한다.</li>
                                    <li>- 스피커 사용은 금지하며 이어폰 또는 헤드셋을 사용하여야 한다.</li>
                                    <li>- 고성방가 및 소란행위를 금지한다.</li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">시설물 관리</div>
                                <ul class="con">
                                    <li>- 시설물 및 비품을 훼손하거나 무단 반출하여서는 아니 된다.</li>
                                    <li>- 시설물 훼손 시 원상복구 또는 손해배상 책임이 발생할 수 있다.</li>
                                </ul>
                            </li>
                            <li class="lst flex fs18">
                                <div class="opt fwt600">이용 제한</div>
                                <ul class="con">
                                    <li>- 타인에게 불쾌감을 주는 행위.</li>
                                    <li>- 영리목적의 무단 홍보·판매행위.</li>
                                    <li>- 시설 운영에 지장을 주는 행위.</li>
                                    <li>- 운영자의 정당한 안내에 따르지 않는 행위.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="btnsArea ">
                        <button class="confirmBtn" @click="goReserveForm">예약하기</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'; // ref 추가
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/*―――――――――――――――――――――――――――――――――――――――
    1. 스와이퍼 설정
―――――――――――――――――――――――――――――――――――――――*/
const swiperModules = [Navigation, Pagination, Autoplay];

const prevBtn = ref(null);
const nextBtn = ref(null);

const swiperNavigation = computed(() => ({
    prevEl: prevBtn.value,
    nextEl: nextBtn.value,
}));

const swiperPagination = {
    el: '.officeSwiper .slidePg',
    type: 'fraction',
    renderFraction: (currentClass, totalClass) =>
        `<span class="${currentClass}"></span><span class="fractionBar">|</span><span class="${totalClass}"></span>`,
};

const officeImages = [
    '/img/sub/office_1.jpg',
    '/img/sub/office_1.jpg',
    '/img/sub/office_1.jpg',
    '/img/sub/office_1.jpg',
    '/img/sub/office_1.jpg',
];

/*―――――――――――――――――――――――――――――――――――――――
    2. 예약하기 → 예약 폼 페이지로 이동
―――――――――――――――――――――――――――――――――――――――*/
const router = useRouter();

const goReserveForm = () => {
    router.push({
        name: 'officeReserveForm',
    });
};
</script>

