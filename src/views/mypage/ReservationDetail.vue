<template>

    <div id="sub">
        <div class="inner m_center inner89">
            <div class="subCommTit gb fs40 lh140 flex alc justy_btw">
                예약신청 현황
                <button class="btn">목록으로</button>
            </div>

            <div class="myReservDetail">

                <!--예약 정보-->
                <div class="rsvPanel">
                    <div class="panelTit">예약 정보</div>
                    <ul class="panelLst">
                        <li class="lst grid3 bd">
                            <div class="opt">예약번호</div>
                            <div class="con">
                                <span class="txt">260528H0105</span>
                            </div>
                        </li>
                        <li class="lst grid3 bd">
                            <div class="opt">예약상태</div>
                            <div class="con">
                                <span class="txt return">승인반려</span>
                                <button class="returnBtn btn">반려사유</button>
                            </div>
                        </li>
                        <li class="lst grid3 bd">
                            <div class="opt">결제상태</div>
                            <div class="con">
                                <span class="txt"><em>240,000</em> 원</span>
                                <button class="payBtn btn">결제대기</button>
                            </div>
                        </li>
                        <li class="lst grid3">
                            <div class="opt">객실명</div>
                            <div class="con">
                                <span class="txt">주39-A</span>
                                <button class="detailBtn btn">상세정보</button>
                            </div>
                        </li>
                         <li class="lst grid3">
                            <div class="opt">예약일정</div>
                            <div class="con">
                                <span class="txt">2026-05-27 ~ 2026-05-28</span>
                            </div>
                        </li>
                         <li class="lst grid3">
                            <div class="opt">예약인원</div>
                            <div class="con">
                                <span class="txt">2명</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--신청자 정보-->
                <div class="rsvPanel">
                    <div class="panelTit">신청자 정보</div>
                    <ul class="panelLst">
                        <li class="lst grid3 bd">
                            <div class="opt">성함</div>
                            <div class="con">
                                <span class="txt">김유니</span>
                            </div>
                        </li>
                        <li class="lst grid3 bd">
                            <div class="opt">휴대전화</div>
                            <div class="con">
                                <span class="txt">010-1234-5678</span>
                            </div>
                        </li>
                        <li class="lst grid3 bd">
                            <div class="opt">이메일</div>
                            <div class="con">
                                <span class="txt">test@test.com</span>
                            </div>
                        </li>
                        <li class="lst grid2">
                            <div class="opt">주소</div>
                            <div class="con">
                                <span class="txt">(44694) 울산광역시 남구 신정로88번길 8 2층</span>
                            </div>
                        </li>
                         <li class="lst grid2">
                            <div class="opt"><i class="pc">공유</i>오피스 이용</div>
                            <div class="con">
                                <span class="txt">이용함</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--업무 및 소속 정보-->
                <div class="rsvPanel">
                    <div class="panelTit">업무 및 소속 정보</div>
                    <ul class="panelLst">
                        <li class="lst grid2 bd">
                            <div class="opt">유형</div>
                            <div class="con">
                                <span class="txt">재직자</span>
                            </div>
                        </li>
                        <li class="lst grid2 bd">
                            <div class="opt">기업명</div>
                            <div class="con">
                                <span class="txt">(주)유니티컬</span>
                            </div>
                        </li>
                        <li class="lst grid2">
                            <div class="opt">근무지</div>
                            <div class="con">
                                <span class="txt">(44694) 울산광역시 남구 신정로88번길 8 2층</span>
                            </div>
                        </li>
                         <li class="lst grid2">
                            <div class="opt">사용목적</div>
                            <div class="con">
                                <span class="txt">사용목적입니다.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--제출서류-->
                <div class="rsvPanel">
                    <div class="panelTit">제출서류</div>
                    <ul class="panelLst">
                        <li class="lst grid1 bd">
                            <div class="opt">신청서</div>
                            <div class="con">
                                <span class="txt">
                                    <a href="" class="fileDown">경주워케이션빌리지_신청서.pdf</a>
                                </span>
                            </div>
                        </li>
                        <li class="lst grid2 bd">
                            <div class="opt">증빙서류1</div>
                            <div class="con">
                                <span class="txt">
                                    <a href="" class="fileDown">증빙서류.hwp</a>
                                </span>
                            </div>
                        </li>
                        <li class="lst grid2 bd">
                            <div class="opt">증빙서류2</div>
                            <div class="con">
                                <span class="txt">
                                    <a href="" class="fileDown none">첨부파일이 없습니다.</a>
                                </span>
                            </div>
                        </li>   
                        <li class="lst grid2 bd">
                            <div class="opt">증빙서류3</div>
                            <div class="con">
                                <span class="txt">
                                    <a href="" class="fileDown">증빙서류.hwp</a>
                                </span>
                            </div>
                        </li>
                        <li class="lst grid2 bd">
                            <div class="opt">증빙서류4</div>
                            <div class="con">
                                <span class="txt">
                                    <a href="" class="fileDown none">첨부파일이 없습니다.</a>
                                </span>
                            </div>
                        </li>                        
                    </ul>
                </div>

                <div class="btnPanel">
                    <button class="btn lineBtn">목록으로</button>
                    <button class="btn cancelBtn">예약취소</button>
                    <button class="btn updateBtn">수정하기</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
</script>
