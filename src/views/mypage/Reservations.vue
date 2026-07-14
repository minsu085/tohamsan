<template>

    <div id="sub" >
        <div class="inner m_center inner89">

            <div class="subCommTit gb fs40 lh140">예약신청 현황</div>

            <div class="myReserv">

                <!-- 탭 이동 -->
                <ul class="reservTab flex fs20">
                    <li class="lst on">
                        <RouterLink :to="{ name: 'houseReserve' }" class="block">공유하우스 예약</RouterLink>
                    </li>
                    <li class="lst">
                        <RouterLink :to="{ name: 'officeReserve' }" class="block">공유오피스 예약</RouterLink>
                    </li>
                </ul>

                <!-- 예약 검색 -->
                <div class="searchPanel flex fs16">
                    <!-- 객실 -->
                    <div ref="roomFieldRef" class="field roomField flex alc" :class="{ open: isRoomOpen }">
                        <div class="fieldTit fwt500">객실명</div>
                        <div class="fieldCon">
                            <div class="roomSelect">
                                <button type="button" class="roomTrigger" @click="toggleRoom">
                                    <span class="roomValue">{{ selectedRoom.name }}</span>
                                    <img src="/img/sub/ic_search_arr.svg" alt="화살표" class="arrIcon">
                                </button>
                            </div>
                            <div class="roomOptions abs w100">
                                <ul class="roomOptionsList">
                                    <li
                                        v-for="room in rooms"
                                        :key="room.id"
                                        class="roomOption"
                                        :class="{ on: room.id === selectedRoom.id }"
                                        @click="selectRoom(room)"
                                    >{{ room.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 이용일 -->
                    <div class="field dateField flex alc">
                        <div class="fieldTit fwt500">이용일</div>
                        <div class="fieldCon">
                            <VDatePicker
                                v-model.range="range"
                                :columns="2"
                                :masks="{ title: 'YYYY년 M월' }"
                                :popover="{ visibility: 'click', placement: 'bottom-start' }"
                                @drag="onDrag"
                            >
                                <!-- 커스텀 인풋 -->
                                <template #default="{ togglePopover }">
                                    <div class="dateValue" @click="togglePopover">
                                        <span class="dateStart">{{ activeRange?.start ? formatDate(activeRange.start) : '시작일' }}</span>
                                        <span class="dateWave">~</span>
                                        <span class="dateEnd">{{ activeRange?.end ? formatDate(activeRange.end) : '종료일' }}</span>
                                        <img src="/img/sub/ic_search_calendar.svg" alt="달력아이콘" class="calendarIcon">
                                    </div>
                                </template>

                                <!-- 각 날짜 칸 커스텀 -->
                                <template #day-content="{ day, dayEvents }">
                                    <div class="customDayCell" :class="getDayClass(day)" v-on="dayEvents">
                                        <span class="dayNumber">{{ day.day }}</span>
                                    </div>
                                </template>
                            </VDatePicker>
                        </div>
                    </div>
                    <!-- 예약번호 -->
                    <div class="field numberField flex alc">
                        <div class="fieldCon">
                            <input type="text" class="numberInput" placeholder="예약번호" v-model="reservNumber">
                        </div>
                    </div>
                    <!-- 검색버튼 -->
                    <button type="button" class="searchBtn" @click="onSearch">검색</button>
                </div>

                <!-- 신청 목록 PC -->
                <table class="rsvTable fs16 fc36 pc">
                    <colgroup>
                        <col style="width: 8rem">
                        <col style="width: 24rem">
                        <col style="width: 28rem">
                        <col style="width: 44rem">
                        <col style="width: 20rem">
                        <col style="width: 16rem">
                        <col style="width: 16rem">
                        <col style="width: 16rem">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>예약번호</th>
                            <th>이용일</th>
                            <th>객실정보</th>
                            <th>결제금액</th>
                            <th>예약상태</th>
                            <th>결제상태</th>
                            <th>결제일(취소일)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in reservations" :key="item.seq">
                            <td>{{ item.seq }}</td>
                            <td>
                                <a href="">{{ item.reservNo }}</a>
                            </td>
                            <td>{{ item.useStart }} ~ {{ item.useEnd }}</td>
                            <td>
                                <a href="">{{ item.roomInfo }}</a>
                            </td>
                            <td>{{ formatPrice(item.amount) }}</td>
                            <td>
                                <!-- 라벨은 프론트 표시용 상수(맵) → 모바일 줄바꿈 br 포함 위해 v-html -->
                                <span class="rsvState" :class="reserveStatusMap[item.reserveStatus].cls" v-html="reserveStatusMap[item.reserveStatus].label"></span>
                            </td>
                            <td>
                                <!-- modal 값이 있으면 버튼(클릭 시 모달) / 없으면 단순 텍스트 -->
                                <button
                                    v-if="payStatusMap[item.payStatus].modal"
                                    type="button"
                                    class="payState"
                                    :class="payStatusMap[item.payStatus].cls"
                                    @click="openPayModal(item)"
                                >{{ payStatusMap[item.payStatus].label }}</button>
                                <span v-else class="payState">{{ payStatusMap[item.payStatus].label }}</span>
                            </td>
                            <td>{{ item.payDate }}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- 신청 목록 MOBILE -->
                <ul class="rsvListWrap mo fs15 fc36">
                    <li class="rsvList" v-for="item in reservations" :key="item.seq">
                        <div class="line numLine">
                            <div class="num">{{ item.seq }}</div>
                        </div>
                        <div class="line infoLine">
                            <div class="item">
                                <div class="tit">예약번호</div>
                                <div class="con"><a href="">{{ item.reservNo }}</a></div>
                            </div>
                            <div class="item">
                                <div class="tit">이용일</div>
                                <div class="con">{{ item.useStart }} ~ <br class="mo"> {{ item.useEnd }}</div>
                            </div>
                            <div class="item">
                                <div class="tit">객실정보</div>
                                <div class="con"><a href="">{{ item.roomInfo }}</a></div>
                            </div>
                            <div class="item">
                                <div class="tit">결제금액</div>
                                <div class="con">{{ formatPrice(item.amount) }}</div>
                            </div>
                        </div>
                        <div class="line stateLine">
                            <div class="item">
                                <div class="tit">예약상태</div>
                                <div class="con">
                                    <span class="rsvState" :class="reserveStatusMap[item.reserveStatus].cls" v-html="reserveStatusMap[item.reserveStatus].label"></span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="tit">결제상태</div>
                                <div class="con">
                                    <button
                                        v-if="payStatusMap[item.payStatus].modal"
                                        type="button"
                                        class="payState"
                                        :class="payStatusMap[item.payStatus].cls"
                                        @click="openPayModal(item)"
                                    >{{ payStatusMap[item.payStatus].label }}</button>
                                    <span v-else class="payState">{{ payStatusMap[item.payStatus].label }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="tit">결제일<br class="mo">(취소일)</div>
                                <div class="con">{{ item.payDate }}</div>
                            </div>
                        </div>
                    </li>
                </ul>


                <!-- 페이징 -->
                <div class="paging flex alc justy_center">
                    <button type="button" class="pageArr pagePrev" aria-label="이전 페이지">
                        <img src="/img/sub/ic_page_prev.svg" alt="이전">
                    </button>
                    <ul class="pageList flex alc">
                        <li class="pageNum on"><button type="button">1</button></li>
                        <li class="pageNum"><button type="button">2</button></li>
                        <li class="pageNum"><button type="button">3</button></li>
                        <li class="pageNum"><button type="button">4</button></li>
                        <li class="pageNum"><button type="button">5</button></li>
                    </ul>
                    <button type="button" class="pageArr pageNext" aria-label="다음 페이지">
                        <img src="/img/sub/ic_page_next.svg" alt="다음">
                    </button>
                </div>

            </div>

        </div>
    </div>

    <!-- 결제상태 버튼 클릭 시 뜨는 모달 (현재는 껍데기만) -->
    <CommModal v-model="isModalOpen" :title="modalTitle">
        <!-- TODO: activeModal 종류별 내용 채우기
             rejectReason(반려사유) / payment(결제하기) / cancelRequest(취소·환불 요청)
             / cancelHistory(취소·환불 내역) / satisfaction(만족도 조사) -->
    </CommModal>

</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import CommModal from '@/components/CommModal.vue';


/*―――――――――――――――――――――――――――――――
    1. 이용일 (기간 선택 달력)
    - 시작일 ~ 종료일 선택 (선택 셀은 공유하우스와 동일 클래스)
    - 조회 필터라 과거 날짜도 선택 가능 (선택불가/예약가능 등 상태표시 없음)
    - v-calendar는 main.js에 연결
―――――――――――――――――――――――――――――――*/

// YYYY-MM-DD 포맷
const formatDate = (date) => {
    if (!date) return '';
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

// 조회 기간 (시작 ~ 종료). v-calendar 네이티브 선택으로 확정됨 (2번째 클릭에 커밋)
const range = ref({ start: null, end: null });

// 드래그(선택 진행) 중인 값 - 첫 클릭부터 즉시 반영
const dragRange = ref(null);
const onDrag = (value) => {
    dragRange.value = value;
};
// 선택이 확정되면 드래그값 초기화
watch(range, () => {
    dragRange.value = null;
});
// 화면 표시용: 드래그 중이면 드래그값, 아니면 확정값
const activeRange = computed(() => dragRange.value || range.value);

// 선택 셀 상태 (공유하우스 달력과 동일 클래스: isStart / isEnd / isBetween)
const isStart = (id) => activeRange.value?.start && formatDate(activeRange.value.start) === id;
const isEnd = (id) => {
    const r = activeRange.value;
    return r?.start && r?.end && formatDate(r.end) === id && formatDate(r.start) !== formatDate(r.end);
};
const isBetween = (id) => {
    const r = activeRange.value;
    if (!r?.start || !r?.end) return false;
    return id > formatDate(r.start) && id < formatDate(r.end);
};

// 각 날짜 칸에 상태 클래스 부여
const getDayClass = (day) => {
    const classes = [];
    if (isStart(day.id)) classes.push('isStart');       // 시작일
    else if (isEnd(day.id)) classes.push('isEnd');      // 종료일
    else if (isBetween(day.id)) classes.push('isBetween'); // 범위 중간
    return classes;
};


/*―――――――――――――――――――――――――――――――
    2. 객실명
―――――――――――――――――――――――――――――――*/

// 객실 목록 (백엔드 연동 예정). 'all'(전체)은 필터 해제용 기본 옵션
const rooms = ref([
    { id: 'all', name: '전체' },
    { id: 39, name: '주39' },
    { id: 40, name: '주40' },
    { id: 41, name: '주41' },
    { id: 42, name: '주42' },
    { id: 45, name: '주45' },
    { id: 46, name: '주46' },
    { id: 47, name: '주47' },
]);

const isRoomOpen = ref(false);
const selectedRoom = ref(rooms.value[0]);
const roomFieldRef = ref(null);

const toggleRoom = () => {
    isRoomOpen.value = !isRoomOpen.value;
};

const selectRoom = (room) => {
    selectedRoom.value = room;
    isRoomOpen.value = false;
};

// 드롭다운 바깥 클릭 시 닫기
const onClickOutside = (e) => {
    if (roomFieldRef.value && !roomFieldRef.value.contains(e.target)) {
        isRoomOpen.value = false;
    }
};

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));


/*―――――――――――――――――――――――――――――――
    3. 예약번호 (영문+숫자 혼용 - 제한 없음)
―――――――――――――――――――――――――――――――*/

const reservNumber = ref('');


/*―――――――――――――――――――――――――――――――
    4. 검색
―――――――――――――――――――――――――――――――*/

const onSearch = () => {
    const filter = {
        room: selectedRoom.value.id,
        startDate: formatDate(range.value?.start),
        endDate: formatDate(range.value?.end),
        reservNumber: reservNumber.value,
    };
    // TODO: 백엔드 연동 - filter 값으로 예약 목록 조회
    console.log('검색 조건:', filter);
};


/*―――――――――――――――――――――――――――――――――――――――
    5. 예약 목록 (백엔드 API 연동 예정)
    - reservations: API 응답 배열을 그대로 매핑
    - PC 테이블 / 모바일 카드가 같은 배열을 v-for 로 렌더
    - 상태 라벨/뱃지클래스/모달은 아래 맵에서 코드로 조회
―――――――――――――――――――――――――――――――――――――――*/

// 금액 표시용 (백엔드는 숫자, 화면은 "240,000원")
const formatPrice = (n) => `${n.toLocaleString('ko-KR')}원`;

// 예약상태 컬럼: 코드 → { 라벨, 뱃지클래스 }
// label 은 프론트 표시용 상수 (모바일 줄바꿈 br 포함) → 템플릿에서 v-html
const reserveStatusMap = {
    wait:     { label: '승인대기' },
    reject:   { label: '승인반려', cls: 'return' },
    approve:  { label: '승인<br class="mo">(결제대기)' },
    reserved: { label: '예약완료' },
    cancel:   { label: '예약취소' },
    complete: { label: '이용완료' },
};

// 결제상태 컬럼: 코드 → { 라벨, 뱃지클래스, 모달종류 }
// modal 값이 있으면 버튼으로 렌더 → 클릭 시 해당 모달 오픈
const payStatusMap = {
    none:    { label: '-' },
    reject:  { label: '반려사유',       cls: 'return',  modal: 'rejectReason' },
    pay:     { label: '결제하기',       cls: 'pay',     modal: 'payment' },
    request: { label: '취소/환불 요청', cls: 'request', modal: 'cancelRequest' },
    history: { label: '취소/환불 내역', cls: 'history', modal: 'cancelHistory' },
    survey:  { label: '만족도 조사',    cls: 'survey',  modal: 'satisfaction' },
};

// 예약 목록 (백엔드에서 배열로 응답 받아 매핑 / 지금은 목업)
const reservations = ref([
    { seq: 6, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 240000, reserveStatus: 'wait',     payStatus: 'none',    payDate: '-' },
    { seq: 5, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 150000, reserveStatus: 'reject',   payStatus: 'reject',  payDate: '-' },
    { seq: 4, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 150000, reserveStatus: 'approve',  payStatus: 'pay',     payDate: '-' },
    { seq: 3, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 150000, reserveStatus: 'reserved', payStatus: 'request', payDate: '2026-05-25' },
    { seq: 2, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 150000, reserveStatus: 'cancel',   payStatus: 'history', payDate: '2026-05-27' },
    { seq: 1, reservNo: '260528H0105', useStart: '2026-05-27', useEnd: '2026-05-28', roomInfo: '주39-A(53.68㎡) / 기준2명 최대 4명', amount: 150000, reserveStatus: 'complete', payStatus: 'survey',  payDate: '2026-05-12' },
]);


/*―――――――――――――――――――――――――――――――――――――――
    6. 모달 (결제상태 버튼 클릭 → 껍데기 오픈)
    - activeModal: 열린 모달 종류 (추후 종류별 내용 분기용)
―――――――――――――――――――――――――――――――――――――――*/

const isModalOpen = ref(false);
const activeModal = ref(null);
const modalTitle = ref('');

const openPayModal = (item) => {
    const pay = payStatusMap[item.payStatus];
    if (!pay?.modal) return;          // 모달 없는 상태('-')는 무시
    activeModal.value = pay.modal;
    modalTitle.value = pay.label;
    isModalOpen.value = true;
    // TODO: item(예약 정보)로 모달 내용 세팅
};
</script>
