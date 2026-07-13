<template>

    <CommModal v-model="open" :title="room?.name || '주39-A'">

        <div class="contArea">
            <Swiper
                class="modalSwiper"
                :modules="swiperModules"
                :slides-per-view="1"
                :rewind="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                :navigation="{ prevEl: '.modalSwiper .slideNav .prev', nextEl: '.modalSwiper .slideNav .next' }"
                :pagination="swiperPagination"
            >
                <SwiperSlide v-for="(src, i) in modalImages" :key="i" class="img">
                    <img :src="src" :alt="`객실 이미지 ${i + 1}`">
                </SwiperSlide>

                <template #container-end>
                    <div class="swiper-pagination slidePg"></div>
                    <div class="slideNav flex alc">
                        <div class="prev"><img src="/img/sub/ic_slide_prev.svg" alt="이전"></div>
                        <div class="next"><img src="/img/sub/ic_slide_next.svg" alt="다음"></div>
                    </div>
                </template>
            </Swiper>

            <div class="modalDetail">
                <div class="detailBox">
                    <div class="boxTit fs24 fwtbold lh140">
                        기본 정보
                    </div>
                    <ul class="infoLst">
                        <li class="lst flex fs18">
                            <div class="opt fwt600">입/퇴실</div>
                            <ul class="con">
                                <li>입실 15:00 이후 / 퇴실 11:00 이전</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">인원</div>
                            <ul class="con">
                                <li>기존 2명 / 최대 4명</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">면적</div>
                            <ul class="con">
                                <li>53.68㎡(17평)m</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">구성</div>
                            <ul class="con">
                                <li>침실 2개 / 욕실 2개</li>
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
                            <div class="opt fwt600">성수기</div>
                            <ul class="con">
                                <li class="flex alc">
                                    160,000원 <span class="gtxt">※ 성수기는 매년 7월 15일부터 8월 24일까지</span>
                                </li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">비수기</div>
                            <ul class="con">
                                <li>- 평일 : 120,000원</li>
                                <li>- 주말 : 135,000원</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">추가인원</div>
                            <ul class="con">
                                <li>- 기준인원 초과 시 1인당 20,000원</li>
                                <li>- 최대인원 초과 불가</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">유아 기준</div>
                            <ul class="con">
                                <li>- 36개월 미만 무료 (인원 산정 제외)</li>
                                <li>- 36개월 이상은 1인으로 산정</li>
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
                                    <img src="/img/sub/ico_facility_1.png" alt="침대">
                                    <span>침대<br>(퀸사이즈)</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_2.png" alt="냉장고">
                                    <span>냉장고</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_3.png" alt="전자레인지">
                                    <span>전자레인지</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_4.png" alt="인덕션">
                                    <span>인덕션</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_5.png" alt="와이파이">
                                    <span>와이파이</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_6.png" alt="이동형 스마트 디스플레이">
                                    <span>이동형<br class="mo"> 스마트<br> 디스플레이</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_7.png" alt="취사도구 및 식기류">
                                    <span>취사도구<br> 및 식기류</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_8.png" alt="전기포트">
                                    <span>전기포트</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_9.png" alt="토스터기">
                                    <span>토스터기</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_10.png" alt="냉난방기">
                                    <span>냉난방기</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_11.png" alt="야외테이블">
                                    <span>야외테이블<br> 1개</span>
                                </li>
                                <li>
                                    <img src="/img/sub/ico_facility_12.png" alt="캠핑의자">
                                    <span>캠핑의자<br> 4개</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="detailBox">
                    <div class="boxTit fs24 fwtbold lh140">
                        기타 사항
                    </div>
                    <ul class="infoLst">
                        <li class="lst flex fs18">
                            <div class="opt fwt600">유의사항</div>
                            <ul class="con">
                                <li>- 객실 내 금연</li>
                                <li>- 반려동물 동반 불가</li>
                                <li>- 객실별 최대 인원을 초과하여 이용할 수 없습니다.</li>
                            </ul>
                        </li>
                        <li class="lst flex fs18">
                            <div class="opt fwt600">주차 안내</div>
                            <ul class="con">
                                <li>- 이용객은 주차장을 무료로 이용할 수 있습니다.</li>
                                <li>- 객실당 차량 1대 주차를 원칙으로 합니다.</li>
                                <li>- 추가 차량은 주차 여건에 따라 이용이 제한될 수 있습니다.</li>
                                <li>- 지정된 주차구역에 주차하여 주시기 바랍니다.</li>
                                <li>- 차량 내 귀중품 분실 및 훼손에 대해서는 시설에서 책임지지 않습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="modalBtns flex">
                <button class="confirmBtn">예약하기</button>
                <button class="closeBtnW" @click="close">닫기</button>
            </div>
        </div>

    </CommModal>

</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CommModal from '@/components/CommModal.vue';

const props = defineProps({
    modelValue: { type: Boolean, default: false }, // v-model (열림 상태)
    room: { type: Object, default: null },         // 객실 정보 (추후 데이터 연동)
});
const emit = defineEmits(['update:modelValue']);

const open = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});
const close = () => emit('update:modelValue', false);

// 스와이퍼 설정
const swiperModules = [Navigation, Pagination, Autoplay];
const swiperPagination = {
    el: '.modalSwiper .slidePg',
    type: 'fraction',
    renderFraction: (currentClass, totalClass) =>
        `<span class="${currentClass}"></span><span class="fractionBar">|</span><span class="${totalClass}"></span>`,
};
const modalImages = [
    '/img/sub/interior_1.jpg',
    '/img/sub/interior_2.jpg',
    '/img/sub/interior_3.jpg',
    '/img/sub/interior_4.jpg',
    '/img/sub/interior_5.jpg',
];
</script>
