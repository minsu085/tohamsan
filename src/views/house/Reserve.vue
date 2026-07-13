<template>

    <div id="sub">
        <div class="inner m_center inner89">

            <div class="subCommTit gb fs40 lh140">공유하우스 예약</div>

            <div class="houseRsv">

                <!-- 객실 검색 -->
                <div class="searchPanel flex fs16">

                    <!-- 이용일 -->
                    <div class="searchField dateField">
                        <VDatePicker
                            v-model.range="range"
                            :columns="2"
                            :masks="{ title: 'YYYY년 M월' }"
                            :min-date="today"
                            :disabled-dates="disabledDates"
                            :popover="{ visibility: 'click', placement: 'bottom-start' }"
                            @drag="onDrag"
                        >
                            <!-- 커스텀 인풋 -->
                            <template #default="{ togglePopover }">
                                <div class="fieldInner" @click="togglePopover">
                                    <span class="fieldLabel">이용일</span>
                                    <div class="dateValue">
                                        <span class="dateStart">{{ activeRange?.start ? formatDate(activeRange.start) : '입실일' }}</span>
                                        <span class="dateWave">~</span>
                                        <span class="dateEnd">{{ hasEnd ? formatDate(activeRange.end) : '퇴실일' }}</span>
                                    </div>
                                    <img src="/img/sub/ic_search_calendar.svg" alt="달력아이콘" class="calendarIcon">
                                </div>
                            </template>

                            <!-- 각 날짜 칸 커스텀 -->                          
                            <template #day-content="{ day, dayEvents }">
                                <div class="customDayCell" :class="getDayClass(day)" v-on="dayEvents">
                                    <span class="dayNumber">{{ day.day }}</span>
                                    <span v-if="isCheckIn(day.id)" class="statusText textIn">입실</span>
                                    <span v-else-if="isCheckOut(day.id)" class="statusText textOut">퇴실</span>
                                </div>
                            </template>

                            <!-- 달력 하단: 범례 + 안내문구 -->
                            <template #footer>
                                <div class="calendarFooter">
                                    <ul class="calendarLegend">
                                        <li class="legendItem">
                                            <span class="legendBox boxSelect"></span>선택
                                        </li>
                                        <li class="legendItem">
                                            <span class="legendBox boxDisabled"></span>선택불가
                                        </li>
                                        <li class="legendItem">
                                            <span class="legendBox boxAvailable"></span>예약가능
                                        </li>
                                    </ul>
                                    <p class="calendarNotice">
                                        *날짜를 클릭하고 조회하면 예약가능 날짜와<br class="mo"> 잔여객실을 확인할 수 있습니다.
                                    </p>
                                </div>
                            </template>
                        </VDatePicker>
                    </div>

                    <!-- 객실 -->
                    <div ref="roomFieldRef" class="searchField roomField" :class="{ open: isRoomOpen }">
                        <span class="fieldLabel">객실</span>
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
                    
                    <!-- 이용인원 -->
                    <div class="searchField guestField">
                        <span class="fieldLabel">이용인원</span>
                        <div class="guestControl">
                            <span class="guestCount">{{ guestCount }}</span>
                            <div class="guestStepper">
                                <button type="button" class="stepBtn stepMinus" aria-label="인원 감소" @click="decreaseGuest"></button>
                                <button type="button" class="stepBtn stepPlus" aria-label="인원 증가" @click="increaseGuest"></button>
                            </div>
                        </div>
                    </div>

                    <!-- 검색버튼 -->
                    <button type="button" class="searchBtn" @click="onSearch">검색</button>
                
                </div>

                <!-- 현황 텍스트 -->
                <div class="currentRoom gb fs32">
                    <span class="date fcaa fwtbold">{{ searchedDate }}</span> 예약 가능한 <span class="room fcaa fwtbold">{{ searchedRoom }}</span> 현황
                </div>

                <!-- 객실 리스트 -->
                <ul class="roomList flex fxwrap">
                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_1.jpg" alt="임시썸네일1">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주39-A</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>

                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_2.jpg" alt="임시썸네일2">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주39-B</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>

                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_3.jpg" alt="임시썸네일3">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주40-A</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>

                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_1.jpg" alt="임시썸네일1">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주39-A</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>

                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_2.jpg" alt="임시썸네일2">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주39-B</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>

                    <li class="lst">
                        <div class="thumb img">
                            <img src="/img/sub/interior_3.jpg" alt="임시썸네일3">
                        </div>
                        <div class="txts">
                            <div class="name gb fs32 fwtbold">주40-A</div>
                            <ul class="info fc36 fs18 lh140">
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_num.svg" alt="인원아이콘">
                                    <span>기준 2인 / 최대 4인</span>
                                </li>
                                <li class="infoLst flex alc">
                                    <img src="/img/sub/ic_house_room.svg" alt="룸아이콘">
                                    <span>침실2 / 화장실2</span>
                                </li>
                            </ul>
                            <div class="cost flex fc4e alc">
                                <div class="num fs28 fwtbold">120,000 ~ 160,000</div>
                                <div class="txt fs24">원</div>
                            </div>
                        </div>
                        <div class="btns flex">
                            <button class="reservBtn" @click="goReserveForm">예약하기</button>
                            <button class="detailBtn" @click="openModal">상세보기</button>
                        </div>
                    </li>
                </ul>

            </div>


            <!-- 객실 상세정보 (모달창 components > RoomDetailModal.vue) -->
            <RoomDetailModal v-model="isModalOpen" />


        </div>
    </div>

</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import RoomDetailModal from '@/components/RoomDetailModal.vue';


/*――――――――――――――――――――――――――――――――――
    1. 이용일 (달력)
    - 입실~퇴실 기간 선택
    - 날짜별 선택불가 표시
    - v-calendar는 main.js에 연결
――――――――――――――――――――――――――――――――――*/

// YYYY-MM-DD 포맷
const formatDate = (date) => {
    if (!date) return '';
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

// 오늘 (자정 기준). 오늘 이전 날짜는 예약불가
const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = formatDate(today);

// 선택 기간 (입실 ~ 퇴실). v-calendar 네이티브 선택으로 확정됨 (2번째 클릭에 커밋)
const range = ref({ start: null, end: null });

// 드래그(선택 진행) 중인 값 - 네이티브 @drag 로 받아 첫 클릭부터 즉시 반영
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
// 퇴실일 표시 여부 (입실과 다를 때만)
const hasEnd = computed(() => {
    const r = activeRange.value;
    return r?.start && r?.end && formatDate(r.start) !== formatDate(r.end);
});

// 백엔드에서 받아올 날짜별 객실 상태 (예시 데이터)
// status: 'soldOut'(선택불가)
const roomStatus = ref([
    { date: '2026-07-16', status: 'soldOut' },
    { date: '2026-07-28', status: 'soldOut' },
]);

// 날짜 → 상태 빠른 조회용 맵
const statusMap = computed(() =>
    Object.fromEntries(roomStatus.value.map((item) => [item.date, item.status])),
);

const isCheckIn = (dateString) => activeRange.value?.start && formatDate(activeRange.value.start) === dateString;
const isCheckOut = (dateString) => hasEnd.value && formatDate(activeRange.value.end) === dateString;
// 입실~퇴실 사이 (범위 중간)
const isBetween = (dateString) => {
    if (!hasEnd.value) return false;
    return dateString > formatDate(activeRange.value.start) && dateString < formatDate(activeRange.value.end);
};
// 오늘 이전 날짜 (표시용 - 실제 선택 차단은 min-date가 담당)
const isPast = (dateString) => dateString < todayStr;

// v-calendar 네이티브 선택을 막을 날짜 (선택불가)
// → 과거 날짜는 min-date 로, 이 목록은 disabled-dates 로 전달
const disabledDates = computed(() =>
    roomStatus.value.map((item) => new Date(`${item.date}T00:00:00`)),
);

// 각 날짜 칸에 상태 클래스 부여
const getDayClass = (day) => {
    const classes = [];
    const status = statusMap.value[day.id];
    if (isPast(day.id)) classes.push('isPast');          // 오늘 이전 (예약불가)
    if (status === 'soldOut') classes.push('isSoldOut'); // 선택불가
    if (isCheckIn(day.id)) classes.push('isStart');      // 입실
    else if (isCheckOut(day.id)) classes.push('isEnd');  // 퇴실
    else if (isBetween(day.id)) classes.push('isBetween'); // 범위 중간
    return classes;
};


/*―――――――――――――――――――――――――――――――
    2. 객실 (커스텀 드롭다운)
    - 목록 열고 닫기 / 선택
    - 바깥 클릭 시 닫기
―――――――――――――――――――――――――――――――*/

// 객실 목록 (백엔드 연동 예정 - id/name 형태로 응답 받아 rooms에 매핑)
// 'all'(전체)은 필터 해제용 기본 옵션
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


/*―――――――――――――――――――――――――――
    3. 이용인원
    - 최소 1명, 증가 / 감소
―――――――――――――――――――――――――――*/

const MIN_GUEST = 1;
const guestCount = ref(MIN_GUEST);

const increaseGuest = () => {
    guestCount.value += 1;
};

const decreaseGuest = () => {
    if (guestCount.value > MIN_GUEST) guestCount.value -= 1;
};


/*―――――――――――――――――――――――――――――――――――――――
    4. 검색 → 현황 텍스트(currentRoom) 갱신
―――――――――――――――――――――――――――――――――――――――*/

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const formatFullDate = (d) => `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일(${WEEKDAYS[d.getDay()]})`;
const formatShortDate = (d) => `${d.getMonth() + 1}월 ${d.getDate()}일(${WEEKDAYS[d.getDay()]})`;

// currentRoom 에 표시할 값 (검색 버튼을 눌렀을 때만 갱신)
const searchedDate = ref('날짜를 선택해주세요');
const searchedRoom = ref(`${selectedRoom.value.name} 객실`);

const onSearch = () => {
    const r = range.value;
    searchedDate.value =
        r?.start && r?.end ? `${formatFullDate(r.start)} ~ ${formatShortDate(r.end)}` : '날짜를 선택해주세요';
    searchedRoom.value = `${selectedRoom.value.name} 객실`;
};


/*―――――――――――――――――――――――――――――――――――――――
    5. 예약하기 → 예약 폼 페이지로 이동
―――――――――――――――――――――――――――――――――――――――*/

const router = useRouter();
const goReserveForm = () => {
    router.push({
        name: 'houseReserveForm',
        query: { room: selectedRoom.value.name, guest: guestCount.value },
    });
};


/*―――――――――――――――――――――――――――――――――――――――
    6. 객실 상세 모달 (RoomDetailModal 컴포넌트)
―――――――――――――――――――――――――――――――――――――――*/
const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};

</script>
