<template>

    <div id="sub">
        <div class="inner m_center inner89">

            <div class="subCommTit gb fs40 lh140">공유하우스 예약</div>

            <div class="reservForm flex">

                <!--신청서 작성-->
                <div class="formPanel">

                    <!--예약선택-->
                    <div class="formSection">
                        <div class="formTitle fs24 fwtbold">예약 정보 선택</div>
                        <div class="formArea useArea">
                            <div class="useTicket">
                                <div class="useTit flex alc">
                                    <span class="tit fs18">이용권 선택</span>
                                </div>
                                <ul class="ticketLst">
                                    <li v-for="ticket in ticketOptions" :key="ticket.id" class="lst">
                                        <input 
                                            type="radio" 
                                            :id="`ticket_${ticket.id}`" 
                                            name="ticketType" 
                                            :value="ticket.value" 
                                            v-model="selectedTicket"                                            
                                        >                                        
                                        <label :for="`ticket_${ticket.id}`" class="ticketLabel">
                                            {{ ticket.name }}
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="useDate">
                                <div class="useTit flex alc">
                                    <span class="tit fs18">이용일 선택</span>
                                    <span class="date fs20 fwtbold">{{ selectedDateText }}</span>
                                </div>
                                <div class="selectDate">
                                    <VDatePicker
                                        expanded
                                        :columns="1"
                                        :masks="{ title: 'YYYY년 M월' }"
                                        :min-date="minDate"
                                        :max-date="maxDate"
                                        @did-move="onMove"
                                    >
                                        <template #day-content="{ day }">
                                            <div class="customDayCell" :class="getDayClass(day)" @click="onDayClick(day)">
                                                <span class="dayNumber">{{ day.day }}</span>
                                            </div>
                                        </template>
                                    </VDatePicker>

                                    <ul class="calendarLegend">
                                        <li class="legendItem"><span class="legendBox boxSelect"></span>선택</li>
                                        <li class="legendItem"><span class="legendBox boxDisabled"></span>선택불가</li>
                                        <li class="legendItem"><span class="legendBox boxAvailable"></span>이용가능</li>
                                        <li class="legendItem"><span class="legendBox boxFull"></span>좌석마감</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--신청자정보-->
                    <div class="formSection">
                        <div class="formTitle fs24 fwtbold">신청자 정보</div>
                        <div class="formArea">

                            <!-- Row: 성함 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="userName">성함</label></div>
                                <div class="formCont">
                                    <input type="text" id="userName" class="formInput noneInput" value="김유니" readonly>
                                </div>
                            </div>       
                            
                            <!-- Row: 휴대전화 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="userPhone">휴대전화</label></div>
                                <div class="formCont">
                                    <input type="text" id="userPhone" class="formInput noneInput" value="010-1234-5678" readonly>
                                </div>
                            </div>

                            <!-- Row: 이메일 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="userEmail">이메일</label></div>
                                <div class="formCont emailCont">
                                    <input type="text" id="userEmail" class="formInput">
                                    <span class="emailAt">@</span>
                                    <input type="text" class="formInput">
                                    <select class="formSelect emailSelect">
                                        <option value="">직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="hanmail.net">hanmail.net</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="kakao.com">kakao.com</option>
                                        <option value="outlook.com">outlook.com</option>
                                        <option value="hotmail.com">hotmail.com</option>
                                        <option value="icloud.com">icloud.com</option>
                                        <option value="yahoo.com">yahoo.com</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Row: 주소 -->
                            <div class="formRow alstart">
                                <div class="formLabel"><label for="userZipcode">주소</label></div>
                                <div class="formCont addressCont">
                                    <div class="zipRow">
                                        <input v-model="form.user.zipcode" type="text" id="userZipcode" class="formInput" placeholder="우편번호" readonly>
                                        <button type="button" class="addressBtn" @click="searchAddress('user')">주소검색</button>
                                    </div>
                                    <input v-model="form.user.address" type="text" class="formInput formInputFull" readonly>
                                    <input v-model="form.user.addressDetail" type="text" class="formInput formInputFull" placeholder="상세주소를 입력해주세요.">
                                </div>
                            </div>  
                           
                        </div>
                    </div>

                    <!--업무 및 소속 정보-->
                    <div class="formSection">
                        <div class="formTitle fs24 fwtbold">업무 및 소속 정보</div>
                        <div class="formArea">

                            <!-- Row: 유형 -->
                            <div class="formRow">
                                <div class="formLabel"><label>유형</label></div>
                                <div class="formCont radioCont">
                                    <label class="radioItem">
                                        <input type="radio" name="userType" value="employee" class="radioInput">
                                        <span class="radioText">재직자</span>
                                    </label>
                                    <label class="radioItem">
                                        <input type="radio" name="userType" value="business" class="radioInput">
                                        <span class="radioText">사업자(대표)</span>
                                    </label>
                                    <label class="radioItem">
                                        <input type="radio" name="userType" value="freelancer" class="radioInput">
                                        <span class="radioText">프리랜서</span>
                                    </label>
                                    <label class="radioItem">
                                        <input type="radio" name="userType" value="etc" class="radioInput">
                                        <span class="radioText">기타</span>
                                    </label>
                                </div>
                            </div>

                             <!-- Row: 기업명 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="companyName">기업명</label></div>
                                <div class="formCont">
                                    <input type="text" id="companyName" class="formInput" value="" placeholder="기업 또는 기관명 입력">
                                    <div class="formNotice">※ 프리랜서의 경우 '프리랜서'로 입력</div>
                                </div>
                            </div>  

                            <!-- Row: 근무지 -->
                            <div class="formRow alstart">
                                <div class="formLabel"><label for="workZipcode">근무지</label></div>
                                <div class="formCont addressCont">
                                    <div class="zipRow">
                                        <input v-model="form.work.zipcode" type="text" id="workZipcode" class="formInput" placeholder="우편번호" readonly>
                                        <button type="button" class="addressBtn" @click="searchAddress('work')">주소검색</button>
                                    </div>
                                    <input v-model="form.work.address" type="text" class="formInput formInputFull" readonly>
                                    <input v-model="form.work.addressDetail" type="text" class="formInput formInputFull" placeholder="상세주소를 입력해주세요.">
                                </div>
                            </div>     

                            <!-- Row: 사용목적 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="usagePurpose">사용목적</label></div>
                                <div class="formCont">
                                    <textarea id="usagePurpose" class="formTextarea" placeholder="예약 목적을 간단하게 기입해주세요."></textarea>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!--제출서류-->
                    <div class="formSection">
                        <div class="formTitle fs24 fwtbold">제출서류</div>
                        <div class="formArea">

                            <!-- Row: 신청서 -->
                            <div class="formRow">
                                <div class="formLabel"><label for="applicationFile">신청서</label></div>
                                <div class="formCont fileCont">
                                    <div class="fileRow">
                                        <input type="text" id="applicationFileName" class="formInput" placeholder="파일을 첨부하세요." readonly>
                                        <label for="applicationFile" class="fileBtn">파일선택</label>
                                        <input type="file" id="applicationFile" class="fileInput" onchange="document.getElementById('applicationFileName').value = this.files[0] ? this.files[0].name : ''">
                                    </div>
                                </div>
                            </div>  

                            <!-- Row: 증빙서류 -->
                            <div class="formRow alstart">
                                <div class="formLabel"><label>증빙서류</label></div>
                                <div class="formCont fileCont">
                                    <!-- 1행: 파일 2개 -->
                                    <div class="fileRowGrid">
                                        <div class="fileRow">
                                            <input type="text" id="proofFileName01" class="formInput" placeholder="파일을 첨부하세요." readonly>
                                            <label for="proofFile01" class="fileBtn">파일선택</label>
                                            <input type="file" id="proofFile01" class="fileInput" onchange="document.getElementById('proofFileName01').value = this.files[0] ? this.files[0].name : ''">
                                        </div>
                                        <div class="fileRow">
                                            <input type="text" id="proofFileName02" class="formInput" placeholder="파일을 첨부하세요." readonly>
                                            <label for="proofFile02" class="fileBtn">파일선택</label>
                                            <input type="file" id="proofFile02" class="fileInput" onchange="document.getElementById('proofFileName02').value = this.files[0] ? this.files[0].name : ''">
                                        </div>
                                    </div>
                                    
                                    <!-- 2행: 파일 2개 -->
                                    <div class="fileRowGrid">
                                        <div class="fileRow">
                                            <input type="text" id="proofFileName03" class="formInput" placeholder="파일을 첨부하세요." readonly>
                                            <label for="proofFile03" class="fileBtn">파일선택</label>
                                            <input type="file" id="proofFile03" class="fileInput" onchange="document.getElementById('proofFileName03').value = this.files[0] ? this.files[0].name : ''">
                                        </div>
                                        <div class="fileRow">
                                            <input type="text" id="proofFileName04" class="formInput" placeholder="파일을 첨부하세요." readonly>
                                            <label for="proofFile04" class="fileBtn">파일선택</label>
                                            <input type="file" id="proofFile04" class="fileInput" onchange="document.getElementById('proofFileName04').value = this.files[0] ? this.files[0].name : ''">
                                        </div>
                                    </div>

                                    <!-- 하단 상세 안내 문구 영역 -->
                                    <div class="fileNotice">
                                        <div class="noticeArea">
                                            <div class="noticeTit">※ 제출서류를 확인하신 후 파일을 첨부해주세요.</div>
                                            <ul class="noticeLst">
                                                <li>- 원격근무 가능 직장인(재직자) : 재직증명서 또는 사원증 사본 등 자격 확인용 자료 1종</li>
                                                <li>- 프리랜서 : 용역계약서, 소득증빙자료, 활동 화면 캡처 등 활동 증빙자료 1종</li>
                                                <li>- 사업자등록 보유자(개인사업자·법인 대표자) : 사업자등록증</li>
                                                <li class="indent">⇒ 모든 서류는 이용일 기준 6개월 이내 발급 서류만 가능</li>
                                            </ul>
                                        </div>  
                                        <div class="noticeArea">
                                            <div class="noticeTit">※ 장기 체류나 기업 협약 프로그램을 운영 시</div>
                                            <ul class="noticeLst">
                                                <li>- 기업 협약 이용자 : 재직증명서, 협약기업 확인서, 사원증 (협약기업 소속 여부 확인)</li>
                                                <li>- 장기 체류(원격근무) : 재직증명서, 원격근무 확인서(회사 발급), 원격근무 승인서 (실제 원격근무 목적 확인)</li>
                                                <li>- 프리랜서 장기 이용 : 최근 계약서, 프로젝트 수행 확인서, 사업소득 증빙 등 (지속적인 업무 수행 여부 확인)</li>
                                                <li>- 디지털노마드 프로그램 : 업무계획서 또는 체류계획서(간단한 양식) (프로그램 운영 목적 확인)</li>
                                                <li class="indent">⇒ 모든 서류는 이용일 기준 6개월 이내 발급 서류만 가능</li>
                                            </ul>                              
                                        </div> 
                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div>

                </div>

                <!--예약정보-->
                <div class="infoPanel">
                    <div class="infoTitle">예약정보</div>

                    <!--정보리스트-->
                    <div class="infoCont">

                        <!-- Row: 예약일정 -->
                        <div class="infoRow">
                            <span class="infoLabel">예약일정</span>
                            <div class="infoValue">
                                <span class="totalPeople">2026-06-10</span>
                            </div>
                        </div>

                        <!-- Row: 예약 금액 -->
                        <div class="infoRow">
                            <span class="infoLabel">예약 금액</span>
                            <div class="infoValue">
                                <div class="costGroup">
                                    <div class="costRow">
                                        <span class="costLabel">일일권</span>
                                        <span class="costVal">10,000원</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row: 합계 -->
                        <div class="infoRow totalRow">
                            <span class="infoLabel">합계</span>
                            <div class="infoValue">
                                <span class="totalPrice">10,000 원</span>
                            </div>
                        </div>

                    </div>

                    <!--약관영역-->
                    <div class="termsWrap">
                        <div class="termsBox">
                            <div class="termsTit">이용약관 및 운영수칙 동의</div>
                            <textarea name="" id="" class="termsTxt" readonly>약관내용을 입력해주세요.</textarea>
                        </div>
                        <div class="termsBox">
                            <div class="termsTit">개인정보처리방침</div>
                            <textarea name="" id="" class="termsTxt" readonly>약관내용을 입력해주세요.</textarea>
                        </div>
                        <div class="termsAgree">
                            <label class="chkItem">
                                <input type="checkbox" name="termsAgreeAll" class="chkItemInput">
                                <span class="chkItemText">약관 전체 동의</span>
                            </label>
                        </div>
                    </div>

                    <!--하단 버튼 영역-->
                    <div class="btnGroup">
                        <button type="submit" class="btnSubmit">예약하기</button>
                        <button type="button" class="btnCancel">취소</button>
                    </div>
                </div>

            </div>

  
        </div>
    </div>

</template>

<script setup>
import { ref, computed, watch, reactive } from 'vue';

/*―――――――――――――――――――――――――――――――――――――――
    0. 폼 데이터 선언 (추가된 부분)
―――――――――――――――――――――――――――――――――――――――*/
const form = reactive({
    user: {
        zipcode: '',
        address: '',
        addressDetail: ''
    },
    work: {
        zipcode: '',
        address: '',
        addressDetail: ''
    }
});

/*―――――――――――――――――――――――――――――――――――――――
    1. 이용권 선택
―――――――――――――――――――――――――――――――――――――――*/
// 백엔드 DB에서 가져올 이용권 목록 (샘플)
const ticketOptions = ref([
    { id: 1, name: '일일권', value: 'daily' },
    { id: 2, name: '주간권 (5일)', value: 'weekly' },
    { id: 3, name: '월간권 (30일)', value: 'monthly' },
]);
const selectedTicket = ref('daily'); // 기본값: 일일권


/*―――――――――――――――――――――――――――――――――――――――
    2. 이용일 달력
    - 일일권 : 클릭한 날 1일
    - 주간권 : 클릭한 날부터 연속 5일
    - 월간권 : 보고 있는 달 전체(1일~말일), 당월~+3개월만 이동 가능
―――――――――――――――――――――――――――――――――――――――*/

// 날짜 헬퍼
const pad = (n) => String(n).padStart(2, '0');
const formatDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

// 오늘 (자정 기준)
const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = formatDate(today);

// 백엔드에서 받아올 날짜별 상태 (샘플)
// status: 'full'(좌석마감) | 'blocked'(선택불가)
const dateStatus = ref([
    { date: '2026-07-12', status: 'full' },
    { date: '2026-07-14', status: 'full' },
    { date: '2026-07-24', status: 'full' },
    { date: '2026-07-27', status: 'full' },
    { date: '2026-07-28', status: 'full' },
]);
const statusMap = computed(() =>
    Object.fromEntries(dateStatus.value.map((i) => [i.date, i.status])),
);

// 이용권에 따라 달력 이동 가능 범위 제한
// - 월간권: 당월 1일 ~ +3개월 말일 / - 그 외: 오늘 이후
const minDate = computed(() => (selectedTicket.value === 'monthly' ? startOfMonth(today) : today));
const maxDate = computed(() => (selectedTicket.value === 'monthly' ? endOfMonth(addMonths(today, 3)) : undefined));

// 선택된 기간 { start, end } (일일권은 start === end)
const selectedRange = ref(null);

// 현재 보고 있는 달 (did-move 로 갱신)
const currentPage = ref({ month: today.getMonth() + 1, year: today.getFullYear() });

// 특정 달 전체(1일~말일) 선택 (월간권)
const selectWholeMonth = ({ month, year }) => {
    selectedRange.value = { start: new Date(year, month - 1, 1), end: new Date(year, month, 0) };
};

// 달력 페이지 이동 시 (월간권이면 이동한 달 전체 선택)
const onMove = (pages) => {
    const p = pages?.[0];
    if (!p) return;
    currentPage.value = { month: p.month, year: p.year };
    if (selectedTicket.value === 'monthly') selectWholeMonth(currentPage.value);
};

// 클릭 가능한 날짜인지 (일일/주간은 과거 불가, 월간은 월 전체라 제한 없음)
const isSelectableDay = (dayId) => selectedTicket.value === 'monthly' || dayId >= todayStr;

// 날짜 클릭 → 이용권별 선택
const onDayClick = (day) => {
    if (!isSelectableDay(day.id)) return;
    const clicked = new Date(`${day.id}T00:00:00`);
    if (selectedTicket.value === 'daily') {
        selectedRange.value = { start: clicked, end: clicked };
    } else if (selectedTicket.value === 'weekly') {
        selectedRange.value = { start: clicked, end: addDays(clicked, 4) }; // 연속 5일
    } else {
        selectWholeMonth({ month: clicked.getMonth() + 1, year: clicked.getFullYear() });
    }
};

// 각 날짜 칸 상태 클래스
const isStart = (id) => selectedRange.value && formatDate(selectedRange.value.start) === id;
const isEnd = (id) => selectedRange.value && formatDate(selectedRange.value.end) === id;
const isBetween = (id) => {
    const r = selectedRange.value;
    return !!r && id > formatDate(r.start) && id < formatDate(r.end);
};
const getDayClass = (day) => {
    const classes = [];
    const status = statusMap.value[day.id];
    if (status === 'full') classes.push('isFull');        // 좌석마감
    if (status === 'blocked') classes.push('isBlocked');  // 선택불가
    // 과거(오늘 이전) - 월간권은 월 전체 선택이라 제외
    if (day.id < todayStr && selectedTicket.value !== 'monthly') classes.push('isPast');
    if (isStart(day.id)) classes.push('isStart');
    else if (isEnd(day.id)) classes.push('isEnd');
    else if (isBetween(day.id)) classes.push('isBetween');
    return classes;
};

// 이용권이 바뀌면 선택 초기화 (월간권은 현재 달 전체 선택)
watch(selectedTicket, () => {
    if (selectedTicket.value === 'monthly') selectWholeMonth(currentPage.value);
    else selectedRange.value = null;
});


/*―――――――――――――――――――――――――――――――――――――――
    3. 이용일 텍스트 (.useTit .date)
―――――――――――――――――――――――――――――――――――――――*/
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const selectedDateText = computed(() => {
    const r = selectedRange.value;
    if (!r) return '이용일을 선택해주세요';
    const s = r.start, e = r.end;
    const startFull = `${s.getFullYear()}년 ${pad(s.getMonth() + 1)}월 ${pad(s.getDate())}일`;
    // 단일 날짜 (일일권)
    if (formatDate(s) === formatDate(e)) return `${startFull} ${WEEKDAYS[s.getDay()]}요일`;
    // 범위 (주간/월간) - 같은 달이면 끝은 '일'만, 다른 달이면 'M월 D일'
    const sameMonth = s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth();
    const endTxt = sameMonth ? `${pad(e.getDate())}일` : `${pad(e.getMonth() + 1)}월 ${pad(e.getDate())}일`;
    return `${startFull} ~ ${endTxt}`;
});

/*―――――――――――――――――――――――――――――――――――――――
    4. 주소검색 (우편번호 서비스)
―――――――――――――――――――――――――――――――――――――――*/
const loadPostcode = () =>
    new Promise((resolve) => {
        if (window.daum?.Postcode) return resolve();
        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.onload = resolve;
        document.head.appendChild(script);
    });

const searchAddress = async (target) => {   // target: 'user' | 'work'
    await loadPostcode();
    new window.daum.Postcode({
        oncomplete(data) {
            form[target].zipcode = data.zonecode;    // 우편번호
            form[target].address = data.roadAddress; // 도로명 주소
        },
    }).open();
};
</script>