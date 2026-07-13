<template>

    <div id="sub">
        <div class="inner m_center inner89">

            <div class="subCommTit gb fs40 lh140">공유하우스 예약</div>

            <div class="reservForm flex">

                <!--신청서 작성-->
                <div class="formPanel">

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
                            
                            <!-- Row: 공유오피스 이용 -->
                            <div class="formRow">
                                <div class="formLabel"><label>공유오피스 이용</label></div>
                                <div class="formCont radioCont">
                                    <label class="radioItem">
                                        <input type="radio" name="useOffice" value="Y" class="radioInput">
                                        <span class="radioText">이용함</span>
                                    </label>
                                    <label class="radioItem">
                                        <input type="radio" name="useOffice" value="N" class="radioInput">
                                        <span class="radioText">이용하지 않음</span>
                                    </label>
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

                        <!-- Row: 객실명 -->
                        <div class="infoRow">
                            <span class="infoLabel">객실명</span>
                            <div class="infoValue roomValue">
                                <span class="roomName">주39-A</span>
                                <button type="button" class="btnDetail" @click="isDetailOpen = true">상세정보</button>
                            </div>
                        </div>

                        <!-- Row: 예약일정 -->
                        <div class="infoRow">
                            <span class="infoLabel">예약일정</span>
                            <div class="infoValue">
                                <div class="dateGroup">
                                    <div class="dateRow">
                                        <span class="dateLabel">입실일</span>
                                        <span class="dateVal">2026-07-02</span>
                                    </div>
                                    <div class="dateRow">
                                        <span class="dateLabel">퇴실일</span>
                                        <span class="dateVal">2026-07-04</span>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        <!-- Row: 예약인원 -->
                        <div class="infoRow">
                            <span class="infoLabel">예약인원</span>
                            <div class="infoValue">
                                <span class="totalPeople">2명</span>
                            </div>
                        </div>

                        <!-- Row: 예약금액 -->
                        <div class="infoRow">
                            <span class="infoLabel">예약 금액</span>
                            <div class="infoValue">
                                <div class="priceGroup">
                                    <div class="priceRow">
                                        <span class="priceLabel">비수기 평일</span>
                                        <span class="priceVal">120,000원 X2</span>
                                    </div>
                                    <div class="priceRow">
                                        <span class="priceLabel">비수기 주말</span>
                                        <span class="priceVal">135,000원 X1</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row: 합계 -->
                        <div class="infoRow totalRow">
                            <span class="infoLabel">합계</span>
                            <div class="infoValue">
                                <span class="totalPrice">375,000 원</span>
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

            <!-- 객실 상세정보 (모달창 components > house > RoomDetailModal.vue) -->
            <RoomDetailModal v-model="isDetailOpen" />

        </div>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RoomDetailModal from '@/components/RoomDetailModal.vue';

/*―――――――――――――――――――――――――――――――――――――――
    1. 예약정보 넘겨받기 & 모달
―――――――――――――――――――――――――――――――――――――――*/

const route = useRoute();
const router = useRouter();

// 객실 상세 모달
const isDetailOpen = ref(false);

// 예약 목록에서 넘어온 값 (query) - 없으면 기본값
const form = reactive({
    roomName: route.query.room || '',
    dateRange: route.query.date || '',
    guestCount: Number(route.query.guest) || 1,
    name: '',
    phone: '',
    email: '',
    user: { zipcode: '', address: '', addressDetail: '' }, // 주소
    work: { zipcode: '', address: '', addressDetail: '' },  // 근무지
    memo: '',
    agree: false,
});

const onSubmit = () => {
    console.log('예약 신청', { ...form });
};

const onCancel = () => {
    router.back();
};


/*―――――――――――――――――――――――――――――――――――――――
    2. 주소검색 (우편번호 서비스)
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
